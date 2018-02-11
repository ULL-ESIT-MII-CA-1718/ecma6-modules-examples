var gulp = require("gulp");
var shell = require("gulp-shell");

gulp.task("serve", shell.task("static-server -p 8180"));

// canary chrome > 60
gulp.task("canary", shell.task("open http://localhost:8180/hello/index.html"));

// Starting with version 8.5.0, Node.js supports ES modules natively, behind a command line option
gulp.task("nodejs", shell.task("node --experimental-modules nodejs/esm-demo/main.mjs"));
