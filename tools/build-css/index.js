const path = require('path');
const buildCss = require('./build');

function InputException(message) {
  this.message = message
  this.name = "InputException"
}

module.exports = ({ input, flag }, callback) => {
  if (!input || input.length === 0) {
    throw new InputException("You must supply a file to build");
  }

  const [file] = input;
  if (!file.match(/\.css$/)) {
    throw new InputException("We are only able to handle .css files");
  }

  buildCss(file, flag, callback);
};
