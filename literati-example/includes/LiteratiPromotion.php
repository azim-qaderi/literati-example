<?php

namespace Literati\Example;

/**
 * Promostion Post Type class.
 */

if ( ! class_exists( 'LiteratiPromotion' ) ) {
    class LiteratiPromotion
    {
        /**
         * Init
         */
        public static function init()
        {
            add_action( 'init', [ __CLASS__, 'register_promotion_post_type' ] );
        }

        /**
         * Register the Promotion Post Type
         */
        public static function register_promotion_post_type()
        {
            register_post_type(
                'promotion',
                array(
                    'labels'      => array(
                        'name'          => __( 'Promotions', 'literati-example' ),
                        'singular_name' => __( 'Promotion', 'literati-example' ),
                        'add_new'               => __( 'Add New', 'literati-example' ),
                        'add_new_item'          => __( 'Add New Promotion', 'literati-example' ),
                        'new_item'              => __( 'New Promotion', 'literati-example' ),
                        'edit_item'             => __( 'Edit Promotion', 'literati-example' ),
                        'view_item'             => __( 'View Promotion', 'literati-example' ),
                        'all_items'             => __( 'All Promotions', 'literati-example' ),
                    ),
                    'public'      => true,
                    'show_in_rest' => true,
                    'supports' => array(
                        'title',
                        'editor',
                        'thumbnail'
                    ),
                )
            );

            // Checks if current theme has support for Featured Image
            if ( ! current_theme_supports( 'post-thumbnails' ) ) {
                add_theme_support( 'post-thumbnails' );
            }
        }
    }
}
