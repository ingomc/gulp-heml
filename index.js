'use strict';
const through = require('through2');
const heml = require('heml');
const path = require('path');
var ext = ".html";

module.exports = options => {
    return through.obj((file, enc, cb) => {
        if (file.isNull()) {
            cb(null, file);
            return;
        }

        if (file.isStream()) {
            console.log("Gulp-HEML: Streaming not supported")
            return;
        }

        heml(file.contents.toString(), options).then(({html, metadata, errors}) => {
            file.contents = Buffer.from(html);
            var replaceExt = replaceExt || false;
            if (typeof ext === 'string' && ext.length > 0) {
                ext = ext.indexOf('.') === 0
                    ? ext
                    : '.' + ext;
                let filePath = path.parse(file.path);
                filePath.base = filePath.base.replace(
                    replaceExt
                    ? replaceExt
                    : path.extname(file.path),
                ext);
                // format the path back into an absolute
                file.path = path.format(filePath);
            }

            cb(null, file);
        });

    });
};

module.exports.heml = heml;
