<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<?php 
	if ( ! empty( $attributes['transitionSpeed'] ) ) {
		$transitionSpeed = $attributes['transitionSpeed'];
	}

	$args = array(
		'post_type'  => 'promotion',
		'posts_per_page' => 10,
	  );
	  
	$posts = get_posts( $args );
	  	
?>
<div <?php echo get_block_wrapper_attributes(); ?>>

	<div class="slide-wrapper" data-transition-speed="<?php echo $transitionSpeed; ?>">

		<?php 
			if ( $posts ) :
				foreach ( $posts as $post ) :
		?>

		<div class="slide">
			<div class="slide-photo">
				<img src="<?php echo get_the_post_thumbnail_url( $post->ID, 'large' ); ?>">
			</div>
			<div class="slide-content">
				<h2 class="slide-title"><?php echo $post->post_title; ?></h2>
				<div class="slide-excerpt"><?php echo $post->post_content; ?></div>
				<a href="<?php echo get_permalink( $post ); ?>" class="slide-button">Read More</a>
			</div>
		</div>
		
		<?php
				endforeach;
			else:
		?>
			<div class="no-post">
				No Promotions to display.
			</div>
		<?php
			endif;	
		?>
	</div>
	
	<?php if ( $posts ) : ?>

	<div class="slide-arrows">
		<button class="prev-slide">‹</button>
		<button class="next-slide">›</button>
	</div>
	
	<?php endif; wp_reset_postdata(); ?>

</div>
