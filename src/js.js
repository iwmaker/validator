const fs = require('fs');
const { Linter } = require("eslint");

const linter = new Linter();
const config = {
  env: {
    es6: true,
    browser: true,
    amd: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'no-eval': 2, // 禁用 eval()
    'no-implied-eval': 2, // 禁止使用类似 eval() 的方法
    'no-new-func': 2, // 禁用 Function 构造函数
    'no-undef': 2, // 禁用未声明的变量
    'no-global-assign': 2, // 禁止对原生对象或只读的全局对象进行赋值
    'no-implicit-globals': 2 // 禁止在全局范围内使用变量声明和 function 声明
  }
};

const pCabinxVarsName = (() => {
  const axios = require('axios');
  const url = 'http://static.dmall.com/kayak-project/cabinx/dist/cabinx/comps/vars.json';
  return axios.get(url).then(({ data }) => {
    config.globals = config.globals || {};
    data.forEach(k => config.globals[k] = 'readonly');
    return Promise.resolve(data);
  }).catch(err => {
    showError('下载 CabinX 全局变量白名单失败');
    return Promise.reject(err);
  });
})();

/**
 * @params {String} code - 字符串
 */
exports.validator = (code) => {
  return pCabinxVarsName.then(() => {
    let msgs = null;
    try {
      msgs = linter.verify(code, config);
    } catch (e) {
      msgs = [e];
    }
    return {
      isVaild: msgs.length === 0,
      msgs: msgs.map(m => `At line ${ m.line }. ${ m.message }`)
    };
  });
};