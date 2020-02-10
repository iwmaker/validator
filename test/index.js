const path = require('path');
const validator = require('../');

let max = 5;
const intervalId = setInterval(() => {
  --max <= 0 && clearInterval(intervalId);
  validator.templateValidator(`
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
    console.log(`模板检测成功\n${ JSON.stringify(res) }\n`);
  }, err => {
    console.log(`模板检测失败\n${ err }\n`);
  });
}, 1000);