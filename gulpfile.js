var gulp = require('gulp');
var browserSync = require('browser-sync');

var srcDir = "public"

gulp.task('browser-sync', function() {  // Создаем таск browser-sync
    browserSync({                       // Выполняем browser Sync
        server: {                       // Определяем параметры сервера
            baseDir: srcDir             // Директория для сервера - src
        },
        notify: false                   // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch(srcDir+'/*.html', browserSync.reload);    // Наблюдение за HTML файлами в корне проекта
    gulp.watch(srcDir+'/**/*.html', browserSync.reload); // Наблюдение за HTML файлами в поддиректориях
    gulp.watch(srcDir+'/**/*.js', browserSync.reload);   // Наблюдение за JS файлами в папке js
});

gulp.task('default', ["watch"]);
