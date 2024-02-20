// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { generateFiles } = require('./createFile');

generateFiles({
  componentTemplate: 'templates/components/index.tsx.hbs',
  styleTemplate: 'templates/components/styles.module.css.hbs',
  filePath: '../components/'
});
