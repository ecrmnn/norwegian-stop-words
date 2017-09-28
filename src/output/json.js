'use strict';

module.exports = words => {
  return {
    extension: 'json',
    content: JSON.stringify({ data: words.all() }, null, 2)
  };
};