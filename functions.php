<?php
  function add_hero_image( $atts ) {
    if ( has_post_thumbnail() ) {

      echo "<div class='hero'>" .
              "<div class='hero-img' style='background-image: url(" .
              get_the_post_thumbnail_url() .
              ")'></div>" .
            "</div>";

    }
  }

  function add_gallery_title( $atts ) {
    echo "<div class='gallery-title'>" .
         "<div class='line'></div>" .
         "<h1 class='gallery-title-text'>" . $atts["title"] . "</h1>" .
         "<div class='line'></div>" .
         "</div>";
  }

  add_theme_support( 'post-thumbnails' );
  add_filter( 'use_default_gallery_style', '__return_false' );
  add_shortcode('hero-img', 'add_hero_image');
  add_shortcode('gallery-title', 'add_gallery_title');
?>
