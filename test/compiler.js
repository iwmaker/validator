const { compile } = require('vue-template-compiler');

const res = compile(`
  <div class="t-comp">
    <slot></slot>
    <slot name="scope" v-bind="data"></slot>
  </div>
`);

console.log(res.render)

debugger ;