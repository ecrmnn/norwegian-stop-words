'use strict';

module.exports = words => {
  const content = [
    '---',
    'data:',
    ...words.transform(word => `- ${word}`).all()
  ];

  return {
    extension: 'yaml',
    content: content.join('\n')
  };
};