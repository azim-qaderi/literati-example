/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

// Imports Slick Carousel JavaScript for the frontend
import "slick-carousel/slick/slick.min.js";

(function( $ ) {

	"use strict";
	
	document.addEventListener("DOMContentLoaded", function(){
        
        // Get the .slide-wrapper
        const element = document.querySelector('.slide-wrapper');

        // Get the transitionSpeed from the data attribute - This transitionSpeed value set while editing the block and is provided to data-transition-speed on render.php
        const transitionSpeed = element.dataset.transitionSpeed;

        $('.slide-wrapper').slick( {
            dots: false,
            infinite: true,
            speed: 300,
            autoplay: true,
            autoplaySpeed: transitionSpeed,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true,
            nextArrow: '.next-slide',
            prevArrow: '.prev-slide'
        } );
    });

})(jQuery);


