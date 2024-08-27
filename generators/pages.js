// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { generateFiles } = require('./createFile');

generateFiles({
  componentTemplate: 'templates/pages/index.tsx.hbs',
  styleTemplate: 'templates/pages/styles.module.css.hbs',
  filePath: '../screens/'
});
