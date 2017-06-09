<?php get_header(); ?>

<?php
  // get_template_part('content', get_post_format());
  // Start the loop.
  while ( have_posts() ) : the_post();

    // Include the page content template.
    get_template_part( 'content', 'page' );

    // If comments are open or we have at least one comment, load up the comment template.
    if ( comments_open() || get_comments_number() ) :
      comments_template();
    endif;

  // End the loop.
  endwhile;
  echo "<script>console.log('JELLO');</script>";
?>

<?php get_footer(); ?>
