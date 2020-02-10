const template = require('./src/template');

exports.prepare = () => {
  return Promise.all([
    template.prepare()
  ]);
};
exports.templateValidator = template.validator;