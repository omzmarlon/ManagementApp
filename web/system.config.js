/**
 * Configs for system-js loader
 * */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'assets/node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            app: "assets/target",

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            "@ngrx/core": "npm:@ngrx/core/bundles/core.umd.js",
            "@ngrx/store": "npm:@ngrx/store/bundles/store.umd.js",
            "@ngrx/effects": "npm:@ngrx/effects/bundles/effects.umd.js",
            '@ngrx/store-devtools': 'npm:@ngrx/store-devtools/bundles/store-devtools.umd.js',
            '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
            '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
            '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
            "@types/lodash": "npm:lodash/lodash.js",
            "monet": "npm:monet/src/main/javascript/monet.js",
            "protobufjs/minimal": "npm:protobufjs/dist/minimal/protobuf.js",
            "protobufjs": "npm:protobufjs/dist/protobuf.js",
            "protobuf": "npm:protobufjs/dist/protobuf.js",
            "long": "npm:long/dist/long.js",
            "jwt-decode": "npm:jwt-decode/build/jwt-decode.min.js",
            "js-cookie": "npm:js-cookie/src/js.cookie.js",
            "moment": "npm:moment/min/moment.min.js",

            // other libraries
            'rxjs':                      'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: "./main.js",
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);
