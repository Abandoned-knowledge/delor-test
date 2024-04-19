const gulp = require("gulp");
const browserSync = require("browser-sync").create();

const paths = {
  html: {
    src: "./**/*.html",
  },
  less: {
    src: "./src/less/*.less",
  },
};

gulp.task("server", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
});

gulp.task("watch", function () {
  gulp.watch(paths.html.src).on("change", browserSync.reload);
  gulp.watch(paths.less.src).on("change", browserSync.reload);
});

gulp.task("default", gulp.parallel("server", "watch"));
