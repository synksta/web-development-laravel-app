const mix = require("laravel-mix");

mix.styles(
    [
        "resources/assets/admin/plugins/fontawesome-free/css/all.min.css",
        "resources/assets/admin/css/adminlte.min.css",
        "resources/assets/admin/plugins/select2/css/select2.min.css",
        "resources/assets/admin/plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css",
    ],
    "public/assets/admin/css/admin.css"
);

mix.scripts(
    [
        "resources/assets/admin/plugins/jquery/jquery.min.js",
        "resources/assets/admin/plugins/bootstrap/js/bootstrap.bundle.min.js",
        "resources/assets/admin/js/adminlte.min.js",
        "resources/assets/admin/js/demo.js",
        "resources/assets/admin/plugins/select2/js/select2.full.min.js",
    ],
    "public/assets/admin/js/admin.js"
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

mix.browserSync("localhost:8000");
