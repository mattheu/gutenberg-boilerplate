<?php
/*
Plugin Name:  HM Gutenberg Boilerplate Plugin
Plugin URI:   https://hmn.md
Description:  Starter for Gutenberg plugins.
Version:      0.1
Author:       Human Made Limited
Author URI:   https://hmn.md
License:      GPL2
License URI:  https://www.gnu.org/licenses/gpl-2.0.html
Text Domain:  hm-gb
Domain Path:  /languages
*/

define( 'HM_GB_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
define( 'HM_GB_PLUGIN_URL', plugin_dir_url( __FILE__ ) );

require_once __DIR__ . '/inc/namespace.php';

add_action( 'plugins_loaded', function() {
	\HM\GutenbergBoilerplate\setup();
});
