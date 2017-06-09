<?php
  add_theme_support( 'post-thumbnails' );

  // $test = has_post_thumbnail( $post->ID );

  // if(has_post_thumbnail()) {
    //  $feature_image = get_the_post_thumbnail($post->ID, 'thumbnail');
    //  echo "<script>console.log('hello world');</script>";
    //  echo "<script>console.log($test);</script>";
  // }
  // function get_the_post_thumbnail_url( $post = null, $size = 'post-thumbnail' ) {
  //   $post_thumbnail_id = get_post_thumbnail_id( $post );
  //   if ( ! $post_thumbnail_id ) {
  //       return false;
  //   }
  //   return wp_get_attachment_image_url( $post_thumbnail_id, $size );
  // }

  // $postThumb = get_the_post_thumbnail_url();

  // remove_filter( 'the_content', 'wpautop' );

  function get_featured_thumbnails( $attrs ) {
    echo "<script>console.log('HELLO WORLD1');</script>";
    // if (have_posts()) :
    //   echo "<script>console.log('HELLO WORLD2');</script>";
    //   while ( have_posts() ) : the_post();
    //
    //     if(has_post_thumbnail()) {
    //       the_post_thumbnail();
    //     }
    //
    //     echo "<script>console.log('HELLO WORLD3');</script>";
    //   endwhile;
    //   the_post();
    // endif;
    //
    // return true;
  }
  add_shortcode( 'adventure_gallery', 'get_featured_thumbnails' );

  function footag_func( $atts ) {
  	return "foo = {$atts['foo']}";
  }
  add_shortcode( 'footag', 'footag_func' );
?>
