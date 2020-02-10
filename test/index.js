const path = require('path');
const validator = require('../');

(() => {
  validator.prepare().then(res => {
    console.log(`CabinX 内部标签列表 ${ JSON.stringify(res[0]) }\n`);
  }).catch(err => {
    console.log(`${ err }\n`);
  });

  setInterval(() => {
    console.log(`Template Validator\n`);
    const res = require('../').templateValidator(`
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
    `, path.resolve(__dirname, './comps'));
    console.log(`${ JSON.stringify(res) }\n`);
  }, 5000);
})();