const template = require('./src/template');

exports.prepare = async () => {
  await template.prepare();
};
exports.templateValidator = template.validator;