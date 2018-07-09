#!/usr/bin/env node

import askQuestion from '..';

console.log('Welcome to the Brain Games!');

const name = askQuestion('May I have your name?');
console.log(`Hello, ${name}!`);
