Human Made Gutenberg Block Boilerplate
======================================

Example Gutenberg plugin that follows Human Made coding standards. Can be used to quickly get started writing your own blocks.

## What does this include?

* Simple plugin that has a few scripts/styles and enqueues them in the right place.
  * `editor.js` for your block that is loaded in the editor.
  * `editor.css` loaded in the editor only and `frontend.css` loaded on the front end of the site.
* Build scripts for modern JS and Sass.
  * Webpack/babel etc so you can write modern JS.
  * Webpack externals are configured for anything loaded globally by WP/Gutenberg. You can just do `import React from react` as normal without loading it twice.
    * Covers `jQuery, React, ReactDOM, ReactDOMServer, tinymce, moment and wp`
  * JSX compiled using `wp.element.createElement` instead of `react.createElement`.
* Compiled JS/CSS is created in the `/build` directory. This is ignored by version control.
  * You will need to either run the build scripts as part of your release process, or remove this ignore rule from `.gitignore`.

## Commands

* `yarn build` Builds a production version of the code.
* `yarn watch` Watches for changes and builds development versions of the code.
* `yarn lint` Lints your JS and fixes your code.

## FAQs

**I need a new JS file - eg to load on the front end.**

You can easily add new JS files to the build process, just edit `webpack.config.js` and add the new file to the `entry` section.
