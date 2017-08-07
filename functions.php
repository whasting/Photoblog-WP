<?php
  add_theme_support( 'post-thumbnails' );
  add_filter( 'use_default_gallery_style', '__return_false' );
  add_shortcode('hero-img', 'add_hero_image');
?>
