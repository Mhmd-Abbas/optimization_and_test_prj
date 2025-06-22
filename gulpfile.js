import gulp from "gulp";
import shell from "gulp-shell";

//build
gulp.task("build", shell.task("parcel build index.html"));
gulp.task("parcel server", shell.task("parcel index.html"));

//test
gulp.task("test", shell.task("mocha"))
gulp.task("cypress-test", shell.task("npx cypress run"))

//default
gulp.task("default", gulp.series("parcel server"));