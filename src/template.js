const fs = require('fs');
const path = require('path');

let cabinxCompsName = null;
const {
  showError
} = require('./util');
const exists = fs.existsSync;

const prepare = (() => {
  let needDownload = true;
  return () => {
    if (needDownload) {
      needDownload = false;
      return require('axios').get(
        'http://api.github.com/repos/iwmaker/validator/contents/src/lib/comps-name.json'
      ).then(({ data }) => {
        const raw = Buffer.from(data.content, data.encoding).toString('utf8');
        return Promise.resolve(
          cabinxCompsName = JSON.parse(raw)
        );
      }).catch(err => {
        needDownload = true;
        showError('下载 CabinX 组件白名单失败');
        return Promise.reject(err);
      });
    } else if (cabinxCompsName) {
      return Promise.resolve(cabinxCompsName);
    } else {
      return Promise.reject('正在下载 CabinX 组件白名单');
    }
  };
})();

const getFolders = (p) => {
  return fs.readdirSync(p).filter(d => {
    return fs.statSync(path.resolve(p, d)).isDirectory();
  });
};

const isCabinxCompName = (s) => {
  return cabinxCompsName
    ? cabinxCompsName.includes(s)
    : s.indexOf('x-') === 0;
};

/**
 * @params {String} template - 字符串
 * @params {String} cpath - 自定义组件路径
 */
exports.validator = (template, cpath) => {
  if (!exists(cpath)) {
    return {
      isVaild: false,
      msgs: ['自定义组件目录不存在']
    };
  }

  return prepare().then(() => {
    const ast = require('./lib/parser').parse(template, {});
    const cusCompsName = getFolders(cpath);
    const msgs = [];
    const queue = [ast];
    
    while (queue.length) {
      const cur = queue.shift();
      const tag = cur.tag;
      const children = cur.children;
      if (tag
        && !cusCompsName.includes(tag)
        && !isCabinxCompName(tag)) {
        msgs.push(`非法标签 ${ tag }`);
      }
      children
      && children.length
      && queue.push(...children);
    }

    return { msgs, isVaild: !msgs.length };
  });
};