'use strict';

const fs = require('fs');
const collect = require('collect.js');
const path = require('path');

const readResourceFile = filename => {
  return fs.readFileSync(path.join(__dirname, `../resources/${filename}`), 'utf-8').split('\n');
}

// Collect all words from all sources
let collection = collect([
  ...readResourceFile('ranks.nl.txt'),
  ...readResourceFile('alir3z4.txt'),
  ...readResourceFile('crodas.txt'),
  ...readResourceFile('jan-bruusgaard.txt'),
]);

const words = collection.unique().sort();

const outputPath = path.join(__dirname, 'output');

fs.readdirSync(outputPath).forEach(function (file) {
  const { extension, content } = require(outputPath + '/' + file)(Object.create(words));
  fs.writeFile(path.join(__dirname, `../dist/stop-words.${extension}`), content);
  console.log(`Generated: stop-words.${extension}`)
});