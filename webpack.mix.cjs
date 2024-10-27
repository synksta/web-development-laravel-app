const mix = require("laravel-mix");

// const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

// mix.js("resources/js/app.js", "public/js")
//     // .sass("resources/sass/app.scss", "public/css")
//     .version()
//     .sourceMaps()
//     .webpackConfig({
//         plugins: [
//             new BrowserSyncPlugin(
//                 {
//                     proxy: "http://localhost:8000", // Убедитесь, что это ваш URL
//                     files: [
//                         "**/*.php",
//                         "public/**/*.{css,js,jpg,jpeg,png,gif,svg}",
//                     ],
//                     reloadDelay: 1000,
//                 },
//                 {
//                     reload: false,
//                 }
//             ),
//         ],
//     });

mix.styles(
    [
        "resources/assets/admin/plugins/fontawesome-free/css/all.min.css",
        "resources/assets/admin/css/adminlte.min.css",
        "resources/assets/admin/plugins/select2/css/select2.min.css",
        "resources/assets/admin/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css",
    ],
    "public/assets/admin/css/style.css"
);

mix.js(
    [
        "resources/assets/admin/plugins/jquery/jquery.min.js",
        "resources/assets/admin/plugins/bootstrap/js/bootstrap.bundle.min.js",
        "resources/assets/admin/js/adminlte.min.js",
        "resources/assets/admin/plugins/select2/js/select2.full.min.js",
        "resources/assets/admin/js/demo.js",
    ],
    "public/assets/admin/js/script.js"
).extract();

mix.copyDirectory(
    "resources/assets/admin/plugins/fontawesome-free/webfonts",
    "public/assets/admin/webfonts"
);

mix.copyDirectory("resources/assets/admin/img", "public/assets/admin/img");

// mix.copyDirectory(
//     "resources/assets/admin/css/adminlte.min.css.map",
//     "public/assets/admin/css/adminlte.min.css.map"
// );

mix.browserSync("http://localhost:8000/");
