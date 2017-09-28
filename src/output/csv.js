'use strict';

module.exports = words => {
  return {
    extension: 'csv',
    content: words.implode(',')
  };
};