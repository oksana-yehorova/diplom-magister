const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .sass('resources/sass/pages/login.scss', 'public/css/pages')
  .sass('resources/sass/pages/custom.scss', 'public/css/pages')
  .sass('resources/sass/pages/responsive.scss', 'public/css/pages')
  .copyDirectory('resources/img', 'public/images')

// copy images folder into laravel public folder
mix.copyDirectory('resources/metronic/src/assets/media', 'public/assets/media')
