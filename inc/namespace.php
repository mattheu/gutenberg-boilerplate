<?php

namespace HM\GutenbergBoilerplate;

/**
 * Setup the plugin.
 */
function setup() {
	add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\enqueue_block_editor_assets' );
	add_action( 'enqueue_block_assets',        __NAMESPACE__ . '\\enqueue_block_assets' );
}

/**
 * Enqueue block assets in the admin.
 */
function enqueue_block_editor_assets() {
	wp_enqueue_script(
		'hm-gb-boilerplate-editor',
		HM_GB_PLUGIN_URL . '/build/editor.bundle.js',
		[ 'wp-blocks', 'wp-element' ],
		filemtime( HM_GB_PLUGIN_PATH . '/build/editor.bundle.js' ),
		false
	);

	wp_enqueue_style(
		'hm-gb-boilerplate-editor',
		HM_GB_PLUGIN_URL . '/build/editor.css',
		[],
		filemtime( HM_GB_PLUGIN_PATH . '/build/editor.css' )
	);
}

/**
 * Enqueue block assets in both the admin and front end.
 */
function enqueue_block_assets() {
	wp_enqueue_script(
		'hm-gb-boilerplate-frontend',
		HM_GB_PLUGIN_URL . '/build/frontend.bundle.js',
		[ 'wp-blocks', 'wp-element' ],
		filemtime( HM_GB_PLUGIN_PATH . '/build/frontend.bundle.js' ),
		false
	);

	wp_enqueue_style(
		'hm-gb-boilerplate-frontend',
		HM_GB_PLUGIN_URL . '/build/frontend.css',
		[],
		filemtime( HM_GB_PLUGIN_PATH . '/build/frontend.css' )
	);
}
