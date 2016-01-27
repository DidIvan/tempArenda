/**
 * Created by Ivan on 26.01.2016.
 */
/*создаем переменную окружения*/
const NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
    entry: "./public/js/components/markup/home.js",
    output: {
        filename: "./packaged/build.js",
        library:"home"
    },
    watch: NODE_ENV == "development",
    /*параметр-задает время ожидания после изменения в течение которого не запускается сборка*/
    watchOptions: {
        agregateTimeout: 100
    },
    /*разделяет запакованый файл на отдельные модули*/
    /*   devtool: "source-map"   */
    devtool: NODE_ENV == "development" ? "cheap-module-eval-source-map" : null
};