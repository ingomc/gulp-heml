# gulp-heml
A gulp wrapper for HEML. Building easy responsive HEML email newsletter


What ist HEML?
https://heml.io/

Quickly craft clean, responsive emails
HEML is an open source markup language for building responsive email. It gives you the native power of HTML without having to deal with all of the email quirks. HEML makes building emails as easy as building websites.


## Install
`npm install gulp-heml`

## Use it in your gulpfile.js

```javascript
const heml = require('gulp-heml');

gulp.task('html', () => {
    gulp.src('./*.heml').pipe(heml({
        validate: 'soft', // validation levels - 'strict'|'soft'|'none'
        cheerio: {}, // config passed to cheerio parser
        juice: {},
        beautify: {}, // config passed to js-beautify html method
        elements: [
            // any custom elements you want to use
        ]
    })).pipe(gulp.dest('./dist/'))
});
```

## Learn everything about HEML
https://heml.io/docs/getting-started/overview
