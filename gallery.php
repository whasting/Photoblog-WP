<?php
  /**
   * Template Name: Gallery
   */
  get_header();
?>

<div id="main-content" class="main-content">



	<div id="primary" class="content-area">
		<div id="content" class="site-content" role="main">

			<h1>Hello There</h1>
      <?php
        // TO SHOW THE PAGE CONTENTS
        while ( have_posts() ) : the_post(); ?> <!--Because the_content() works only inside a WP Loop -->
            <div class="photo-gallery">
                <?php the_content(); ?> <!-- Page Content -->
                <script type="text/javascript">
                  $('.photo-gallery').children().children().wrap(function() {
                    return `<a href=${this.src}></a>`;
                  });
                </script>
            </div><!-- .entry-content-page -->

      <?php
        endwhile; //resetting the page loop
        wp_reset_query(); //resetting the page query
      ?>
		</div><!-- #content -->
	</div><!-- #primary -->
</div><!-- #main-content -->

<?php
  get_footer();
?>
