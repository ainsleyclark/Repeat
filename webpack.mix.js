/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

/**
 * Require & Import
 *
 */
const mix = require('laravel-mix');
const Path = require('path');
const BrowsersSupport = require("./config/browserslistrc.js");

mix.setPublicPath('public');

/**
 * Javascript
 * Compiles all JS to public
 *
 */
mix.js('src/js/repeat.js', 'dist/js/repeat.js');

/**
 * SCSS
 * Compiles all SCSS files to public and uses Sass lint.
 *
 */
mix.sass('src/scss/app.scss', 'public/css/app.css');

/**
 * Production
 *
 */
if (mix.config.production) {

    mix.js('src/js/repeat.js', 'dist/js/repeat.js');

    mix.options({
        autoprefixer: {
            options: {
                overrideBrowserslist: BrowsersSupport.overrideBrowserslist
            }
        }
    })

}