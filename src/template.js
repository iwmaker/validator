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
    const download = require('download-git-repo');
    const home = require('user-home');
    const save = path.resolve(home, '.cabin/cabinx');
    const site = 'gitlab.dmall.com:kayak-project/cabinxcomps';
    const toMiddleLine = (s) => {
      const t = s.replace(/[A-Z]/g, s => `-${ s.toLowerCase() }`);
      return t.indexOf('-') === 0 ? t.slice(1) : t;
    };

    if (needDownload) {
      needDownload = false;
      return new Promise((resolve, reject) => {
        exists(save) && require('rimraf').sync(save);
        download(site, save, { clone: true }, err => {
          if (err) {
            needDownload = true;
            showError('下载 CabinX 仓库失败');
            return reject(err);
          }
          return resolve(cabinxCompsName = JSON.parse(
            fs.readFileSync(
              path.resolve(save, './comps-name.json'),
              { encoding: 'utf8' }
            )
          ).map(toMiddleLine));
        });
      });
    } else if (cabinxCompsName) {
      return Promise.resolve(cabinxCompsName);
    } else {
      return Promise.reject('正在下载 CabinX 仓库');
    }
  }
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