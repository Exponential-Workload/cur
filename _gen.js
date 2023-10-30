const fs = require('fs');
fs.rmSync('public/css/cur', {
  recursive: true,
  force: true,
});
fs.mkdirSync('public/css/cur');

const sass = require('sass');

const scssMixins = fs.readFileSync('public/css/cursors.scss', 'utf-8');

const classStyle = `.cursor {
  &.default {
    @include defaultCursor();
  }
  &.pointer {
    @include pointerCursor();
  }
  &.text {
    @include textCursor();
  }
}
`;
const varStyle = `:root {
  --cursor-default: #{$defaultCursorValue};
  --cursor-pointer: #{$linkCursorValue};
  --cursor-text: #{$textCursorValue};
}`;

fs.writeFileSync(
  'public/css/cur/var.css',
  sass.compileString(`${scssMixins}
${varStyle}
`).css,
);

fs.writeFileSync(
  'public/css/cur/classes.css',
  sass.compileString(`${scssMixins}
${classStyle}`).css,
);

fs.writeFileSync(
  'public/css/cur/cursor.css',
  sass.compileString(`${scssMixins}
${varStyle}
${classStyle}
html.cursor,
body.cursor {
  @include defaultCursor();
  .defaultCursor {
    @include defaultCursor();
  }
  p:not(.nativeCursor) {
    @include textCursor();
  }
  a:not(.nativeCursor) {
    @include pointerCursor();
  }
  .link:not(.nativeCursor) {
    @include pointerCursor();
  }
}
`).css,
);

fs.writeFileSync(
  'public/css/cur/vitepress.css',
  sass.compile('./public/css/vitepress.scss').css,
);
