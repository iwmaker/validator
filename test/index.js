const path = require('path');
const { templateValidator, jsValidator } = require('../');

/**
 * 模板检测示例
 */
(() => {
  let max = 5;
  const intervalId = setInterval(() => {
    --max <= 0 && clearInterval(intervalId);
    templateValidator(`
      <x-form>
        HI
        <x-input />
        <x-input><span>HI</span></x-input>
        <x-none />
        <c-input>Hi</c-input>
        <c-select />
        <c-select></c-select>
        <div>HI</div>
        <h1></h1>
        <template></template>
        <component></component>
      </x-form>
    `, path.resolve(__dirname, './comps'))
    .then(res => {
      console.log(``);
      console.log(`模板检测成功，${ res.isVaild ? '无' : '有' }错误`);
      console.log(`错误列表信息：${ JSON.stringify(res.msgs) }`);
    }, err => {
      console.log(``);
      console.log(`模板检测中出现错误：${ err }`);
    });
  }, 1000);
})();


/**
 * JS 检测示例
 */
(() => {
  let max = 5;
  const intervalId = setInterval(() => {
    --max <= 0 && clearInterval(intervalId);
    jsValidator(`
      import p from 'p';
      let a = 1;
      const b = () => {};
      let { c } = window;
      var d = 1;
      var d = new Date();
      var d = new Map();
      var f = function() {
        var g = 1;
        return function() {
          g = 3;
          h = 3;
        };
      };
      define('aaaa', function() {});
      require('aaa');
      export var da;
      export default XPage({});
    `).then(res => {
      console.log(``);
      console.log(`JS 检测成功，${ res.isVaild ? '无' : '有' }错误`);
      console.log(`错误列表信息：${ JSON.stringify(res.msgs) }`);
    }, err => {
      console.log(``);
      console.log(`JS 检测中出现错误：${ err }`);
    });
  }, 1000);
})();