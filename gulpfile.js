let gulp = require("gulp");
let babel = require("gulp-babel");
let concat = require("gulp-concat");

gulp.task("compile-js", () => {
   gulp.src(__dirname + "/src/**")
      .pipe(babel({
         presets: ['env']
      }))
      .pipe(gulp.dest("dist"))
});