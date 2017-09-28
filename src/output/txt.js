'use strict';

module.exports = words => {
  return {
    extension: 'txt',
    content: words.implode('\n')
  };
};