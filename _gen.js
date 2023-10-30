const fs = require('fs');
fs.rmSync('public/css', {
  recursive: true,
  force: true,
});
fs.mkdirSync('public/css');

const sass = require('sass');

const scssMixins = fs.readFileSync('public/scss/cursors.scss', 'utf-8');

fs.writeFileSync(
  'public/css/var.css',
  sass.compile('public/scss/cursorVars.scss').css,
);

fs.writeFileSync(
  'public/css/classes.css',
  sass.compile('public/scss/cursorClasses.scss').css,
);

fs.writeFileSync(
  'public/css/cursor.css',
  sass.compile('public/scss/global.scss').css,
);

fs.writeFileSync(
  'public/css/vitepress.css',
  sass.compile('./public/scss/vitepress.scss').css,
);
