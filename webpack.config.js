/**
 * Created by Ivan on 26.01.2016.
 */

module.exports={
    entry: "./public/js/components/markup/home.js",
    output: {
        filename: "./packaged/build.js"
    },
    watch:true,
    /*параметр-задает время ожидания после изменения в течение которого не запускается сборка*/
    watchOptions:{
        agregateTimeout:100
    },
    /*разделяет запакованый файл на отдельные модули*/
    devtool: "source-map"
};