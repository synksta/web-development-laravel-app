const mix = require("laravel-mix");
// ADMIN
mix.styles(
    [
        "resources/assets/admin/plugins/fontawesome-free/css/all.min.css",
        "resources/assets/admin/css/adminlte.min.css",
        "resources/assets/admin/plugins/select2/css/select2.min.css",
        "resources/assets/admin/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css",
        "resources/assets/admin/plugins/toastui/css/toastui-editor-dark.min.css",
        "resources/assets/admin/plugins/toastui/css/toastui-editor-viewer.min.css",
    ],
    "public/assets/admin/css/style.css"
);

mix.js(
    [
        "resources/assets/admin/plugins/jquery/jquery.min.js",
        "resources/assets/admin/plugins/bootstrap/js/bootstrap.bundle.min.js",
        "resources/assets/admin/plugins/select2/js/select2.full.min.js",
        "resources/assets/admin/plugins/bs-custom-file-input/bs-custom-file-input.min.js",
        "resources/assets/admin/js/adminlte.min.js",
        "resources/assets/admin/js/demo.js",
        "resources/assets/admin/plugins/toastui/js/toastui-editor-all.min.js",
        "resources/assets/toastui/js/editor.js",
    ],
    "public/assets/admin/js/script.js"
).extract();

//MARKEDIA
mix.styles(
    [
        "resources/assets/markedia/css/bootstrap.css",
        "resources/assets/markedia/css/font-awesome.min.css",
        "resources/assets/markedia/css/style.css",
        "resources/assets/markedia/css/animate.css",
        "resources/assets/markedia/css/responsive.css",
        "resources/assets/markedia/css/colors.css",
        "resources/assets/markedia/css/version/marketing.css",
    ],
    "public/assets/markedia/css/style.css"
);

mix.js(
    [
        "resources/assets/markedia/js/jquery.min.js",
        "resources/assets/markedia/js/tether.min.js",
        "resources/assets/markedia/js/bootstrap.min.js",
        "resources/assets/markedia/js/animate.js",
        "resources/assets/markedia/js/custom.js",
        // "resources/assets/markedia/js/bootstrap.js",
        // "resources/assets/markedia/js/carousel.js",
        // "resources/assets/markedia/js/food-map.js",
        // "resources/assets/markedia/js/garden-map.js",
    ],
    "public/assets/markedia/js/script.js"
).extract();
mix.copyDirectory(
    "resources/assets/markedia/fonts",
    "public/assets/markedia/fonts"
);
mix.copyDirectory(
    "resources/assets/markedia/images",
    "public/assets/markedia/images"
);
mix.copyDirectory(
    "resources/assets/markedia/upload",
    "public/assets/markedia/upload"
);
mix.copyDirectory(
    "resources/assets/markedia/js",
    "public/assets/markedia/js/scripts"
);
mix.copyDirectory(
    "resources/assets/markedia/css",
    "public/assets/markedia/css/styles"
);

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
