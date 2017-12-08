<?php

namespace HM\GutenbergBoilerplate;

require_once __DIR__ . '/react-wp-scripts-loader.php';

/**
 * Setup the plugin.
 */
function setup() {
	add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\enqueue_block_editor_assets' );
	add_action( 'enqueue_block_assets',        __NAMESPACE__ . '\\enqueue_block_assets' );
	add_filter( 'reactwpscripts.is_development', '__return_true' );
}

/**
 * Enqueue block assets in the admin.
 */
function enqueue_block_editor_assets() {
	\ReactWPScripts\enqueue_assets( HM_GB_PLUGIN_DIR, [
		'script_deps' => [ 'wp-blocks', 'wp-element' ],
	] );
}

/**
 * Enqueue block assets in both the admin and front end.
 */
function enqueue_block_assets() {
}
