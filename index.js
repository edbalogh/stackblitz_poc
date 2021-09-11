const prompt = require('prompt-sync');

// run `node index.js` in the terminal

// console.log(`Hello Node.js v${process.versions.node}!`);
const name = prompt('What is your name?');
console.log(`hello ${name}!`);
