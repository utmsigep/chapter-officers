<?php
/**
 * Plugin Name: Chapter Officers
 * Description: Manage chapter officers listing.
 * Author: UT Martin Sigma Phi Epsilon
 * Author URI: https://www.utmsigep.org/
 */

add_option('chapter_officers', [
  'heading' => 'Chapter Officers',
  'items' => []
]);

add_action( 'admin_menu', 'chapter_officers_menu' );

function chapter_officers_menu() {
  add_options_page( 'Manage Chapter Officers', 'Chapter Officers', 'manage_options', 'chapter-officers', 'chapter_officers_options' );
}

function chapter_officers_options() {
  if (!current_user_can('manage_options'))  {
    wp_die(__( 'You do not have sufficient permissions to access this page.', 'chapter_officers'));
  }
  include 'templates/form.php';
}

function chapter_officers_ajax_handler() {
  // Clean out previous values
  delete_option('chapter_officers');
  update_option('chapter_officers', $_POST['payload']);
  echo 'success';
	wp_die();
}
add_action('wp_ajax_chapter_officers_save', 'chapter_officers_ajax_handler');

/**
 * Enqueue Scripts
 */
function chapter_officers_enqueue($hook) {
  if ('settings_page_chapter-officers' != $hook) {
    return;
  }

	wp_enqueue_script('ajax-script', plugins_url('/js/chapter-officers.js', __FILE__), array('jquery'));
}
add_action( 'admin_enqueue_scripts', 'chapter_officers_enqueue' );
