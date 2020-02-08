const path = require('path');
const validator = require('../');

const start = async () => {
  await validator.prepare();
  const res = validator.templateValidator(`
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
  console.log(res);
};

start();