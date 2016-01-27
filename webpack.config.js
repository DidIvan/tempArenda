/**
 * Created by Ivan on 26.01.2016.
 */
/*создаем переменную окружения*/
const NODE_ENV = process.env.NODE_ENV || "development";
/*устанавливаем локал вебпак, для того чтоб можно было установить плагины*/
const webpack = require('webpack');

module.exports = {
    entry: {
        /*точки входа*/
        header: "./public/js/components/markup/header-id.js",
        bestGoods: "./public/js/components/markup/bestGoods.js",
        captcha: "./public/js/components/markup/captcha.js",
        footer: "./public/js/components/markup/footer-id.js",
        goodsCategory: "./public/js/components/markup/goodsCategory.js"
    },
    output: {
        /*абсолютный путь к директории сборки*/
        path: __dirname + '/packaged',
        filename: "[name].js",
        library: "[name]"
    },
    /*   entry: "./public/js/components/markup/home.js",
     output: {
     filename: "./packaged/build.js",
     /!*експорт модуля будет помещен в переменную с таким названием*!/
     library:"home"
     },*/
    watch: NODE_ENV == "development",
    /*параметр-задает время ожидания после изменения в течение которого не запускается сборка*/
    watchOptions: {
        agregateTimeout: 100
    },
    /*разделяет запакованый файл на отдельные модули*/
    /*   devtool: "source-map"   */
    devtool: NODE_ENV == "development" ? "cheap-module-eval-source-map" : "source-map",

    plugins:[
        new webpack.NodeEnvironmentPlugin('NODE_ENV')
    ],
    module: {
        loaders: [
            {test: /\.js$/, loader: 'jsx-loader'}
            // => "jade" loader is used for ".jade" files
        ]
    }
};