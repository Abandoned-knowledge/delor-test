const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const less = require("gulp-less");
const fileinclude = require("gulp-file-include");

gulp.task("less", function () {
  return gulp
    .src(["./src/styles/less/**/*.less", "!./src/styles/less/**/_*.less"])
    .pipe(less({}))
    .pipe(gulp.dest("./src/styles/css"));
});

gulp.task("server", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
});

gulp.task("watch", function () {
  gulp.watch("./**/*.html").on("change", browserSync.reload);
  gulp
    .watch("./src/styles/less/*.less", gulp.series("less"))
    .on("change", browserSync.reload);
});

gulp.task("default", gulp.parallel("server", "less", "watch"));
