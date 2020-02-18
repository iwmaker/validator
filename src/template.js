const fs = require('fs');
const exists = fs.existsSync;
const path = require('path');
const {
  showError
} = require('./util');

// 将值设置成 Promise ，已达到类似串行的作用
const pCabinxCompsName = (() => {
  const axios = require('axios');
  const url = 'http://static.dmall.com/kayak-project/cabinx/dist/cabinx/comps/names.json';
  return axios.get(url).then(({ data }) => {
    return Promise.resolve(data);
  }).catch(err => {
    showError('下载 CabinX 组件白名单失败');
    return Promise.reject(err);
  });
})();

const getFolders = (p) => {
  return fs.readdirSync(p).filter(d => {
    return fs.statSync(path.resolve(p, d)).isDirectory();
  });
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

  // 为第一次，未取到 cabinxCompsName 前的过程加速
  const { parse } = require('./lib/parser');
  const ast = parse(template, {});
  const cusCompsName = getFolders(cpath);

  return pCabinxCompsName.then((cabinxCompsName) => {
    const msgs = [];
    const queue = [ast];
    
    while (queue.length) {
      const cur = queue.shift();
      const tag = cur.tag;
      const children = cur.children;
      if (tag
        && !cusCompsName.includes(tag)
        && !cabinxCompsName.includes(tag)) {
        msgs.push(`非法标签 ${ tag }`);
      }
      children
      && children.length
      && queue.push(...children);
    }

    return { msgs, isVaild: !msgs.length };
  });
};