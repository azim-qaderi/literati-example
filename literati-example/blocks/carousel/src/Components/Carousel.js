/**
 * Custom Component to render the Slider
 */

import { useRef } from "react";

// Imports for the Slick Slider for React - Only for the backend. 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ hasResolved, posts, transitionSpeed }) {

    // Defines custom arrow buttons for the slider
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };

    // Slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: transitionSpeed,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        arrows: false,
        pauseOnHover: false
    };

    if ( hasResolved ) {

        if( posts.length === 0 ) {
            return (
                <>
                    <div className="slide-wrapper">
                        <div className="no-post">
                            No Promotions to display.
                        </div>
                    </div>
                </>
            );
        }
        
        return (
            <>
                <div className="slide-wrapper">
                    <Slider ref={ slider => {
                        sliderRef = slider;
                        } } {...settings}
                    >
                            
                        {posts?.map(post => (

                            <div className="slide" key={post.id}>

                                <div className="slide-photo">
                                    <img
                                        src={post._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url}
                                    />
                                </div>
                                <div className="slide-content">
                                    <h2 className="slide-title">{post.title.rendered}</h2>
                                    <div className="slide-excerpt" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
                                    <a href={post.link} className="slide-button">Read More</a>
                                </div>

                            </div>

                        ))}

                    </Slider>

                </div>
                <div class="slide-arrows">
                    <button className="button" onClick={ previous }>‹</button>
                    <button className="button" onClick={ next }>›</button>
                </div>
            </>
        )
    }
}
