/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const handlebars = require('handlebars');
const path = require('path');
const readline = require('readline');

const formatNameFile = (name) => {
  return name
    .split('')
    .map((letter, index) => (index === 0 ? letter.toUpperCase() : letter))
    .join('');
};

function renderTemplate(template, data) {
  const compiledTemplate = handlebars.compile(template);
  return compiledTemplate(data);
}

function createFile(filename, content) {
  fs.writeFileSync(filename, content, 'utf-8');
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const createFiles = ({ filePath, name, outputFilename }) => {
  const outputDirectory = path.join(__dirname, `${filePath}/${name}`);

  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory);
  }

  const fullPath = path.join(outputDirectory, outputFilename);

  return fullPath;
};

const generateFiles = ({ filePath, componentTemplate, styleTemplate }) => {
  rl.question('What is the name of the component: ', (name) => {
    const data = {
      name: formatNameFile(name)
    };

    const componentContent = fs.readFileSync(componentTemplate, 'utf-8');
    const styleContent = fs.readFileSync(styleTemplate, 'utf-8');

    const componentContentTemplate = renderTemplate(componentContent, data);
    const styleContentTemplate = renderTemplate(styleContent, data);

    const componentFilename = `${data.name}.tsx`;
    const styleFilename = `style.module.scss`;

    const styleFilePath = createFiles({
      filePath,
      name: data.name,
      outputFilename: styleFilename
    });

    const componentFilePath = createFiles({
      filePath,
      name: data.name,
      outputFilename: componentFilename
    });

    createFile(styleFilePath, styleContentTemplate);
    createFile(componentFilePath, componentContentTemplate);

    console.log('Arquivo gerado com sucesso!');
    console.info(componentFilePath);
    console.info(styleFilePath);
    rl.close();
  });
};

module.exports = { generateFiles };
