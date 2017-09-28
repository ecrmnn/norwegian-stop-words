'use strict';

module.exports = words => {
  const content = [
    "'use strict';",
    '',
    'module.exports = [',
    words.transform(word => `  '${word}'`).implode(',\n'),
    '];'
  ];

  return {
    extension: 'js',
    content: content.join('\n')
  };
};