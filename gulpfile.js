var gulp = require("gulp");
var shell = require("gulp-shell");

gulp.task("serve", shell.task("static-server -p 8180"));

// canary chrome > 60
gulp.task("canary", shell.task("open http://localhost:8180/hello/index.html"));
