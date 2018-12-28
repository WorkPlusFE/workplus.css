#!/usr/bin/env node

'use strict'
const meow = require('meow');
const build = require('./');

const cli = meow(`
  Usage
    $ build-css [file]

  File
    File. This is required. 

  Example
    $ build index.css
`);

build(cli, ({ name }) => {
  console.log(`\n Build ${name} complete \n`);
});
