import React, { useEffect } from 'react';
import Prism from 'prismjs'
import initCarousel from '../scripts/carousel'

import carouselImage1 from '../assets/images/carousel-image-bay.jpeg';
import carouselImage2 from '../assets/images/carousel-image-breakwater.jpeg';
import carouselImage3 from '../assets/images/carousel-image-underwater.jpeg';
import carouselImage4 from '../assets/images/carousel-image-white-water.jpeg';
import carouselImage5 from '../assets/images/carousel-image-path.jpeg';
import carouselImage6 from '../assets/images/carousel-image-point.jpeg';

function Carousel() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
        initCarousel();
    });

    const code1 =
        `<div className="carousel">
    <ul>
        <li className="carousel-slide"><img className="carousel-slide-background" alt="Carousel slide 1 - alt text" src={/your/image/path/image.jpg}/></li>
        <li className="carousel-slide"><img className="carousel-slide-background" alt="Carousel slide 2 - alt text" src={/your/image/path/image.jpg}/></li>
        <li className="carousel-slide"><img className="carousel-slide-background" alt="Carousel slide 3 - alt text" src={/your/image/path/image.jpg}/></li>
        <li className="carousel-slide"><img className="carousel-slide-background" alt="Carousel slide 4 - alt text" src={/your/image/path/image.jpg}/></li>
        <li className="carousel-slide"><img className="carousel-slide-background" alt="Carousel slide 5 - alt text" src={/your/image/path/image.jpg}/></li>
        <li className="carousel-slide"><img className="carousel-slide-background" alt="Carousel slide 6 - alt text" src={/your/image/path/image.jpg}/></li>
    </ul>
    <div className="controls">
        <button className="previous-slide">
            <i className="las la-arrow-circle-left sm inverted"></i>
            <span className="sr-only">Previous slide</span>
        </button>
        <button className="play-pause">
            <i className="las la-pause-circle sm inverted"></i>
            <span className="sr-only">Pause</span>
        </button>
        <button className="next-slide">
            <i className="las la-arrow-circle-right sm inverted"></i>
            <span className="sr-only">Next slide</span>
        </button>
    </div>
    <div className="carousel-dots-container">
    </div>
</div>`;

    return (
        <div>
            <h1>Carousel</h1>
            <p>The Carousel component is a list of content that is displayed one by one, it allows a user to browse left and right in order to view the images or content. They add visual interest and reduce clutter. Users can scroll through each image by swiping on mobile devices or clicking the left-right arrows on desktop. It also has the feature of pausing the animation in order to reduce visual motion for certain users who prefer to reduce this.</p>

            <h3>When to use this component</h3>
            <p>The Carousel component should be used sparingly as its overuse can lead to content not being clicked on or skipped entirely by users.</p>

            <h3>When not to use this component</h3>
            <p>Do not use the Carousel component when there is two or fewer items to display. It is recommended for useful content and should not be used to display vital information.</p>

            <h3>Snippet</h3>
            <div className="carousel">
                <ul>
                    <li className="carousel-slide"><img className="carousel-slide-background" alt="Carousel slide 1 - alt text" src={carouselImage1} /></li>
                    <li className="carousel-slide"><img className="carousel-slide-background" alt="Carousel slide 2 - alt text" src={carouselImage2} /></li>
                    <li className="carousel-slide"><img className="carousel-slide-background" alt="Carousel slide 3 - alt text" src={carouselImage3} /></li>
                    <li className="carousel-slide"><img className="carousel-slide-background" alt="Carousel slide 4 - alt text" src={carouselImage4} /></li>
                    <li className="carousel-slide"><img className="carousel-slide-background" alt="Carousel slide 5 - alt text" src={carouselImage5} /></li>
                    <li className="carousel-slide"><img className="carousel-slide-background" alt="Carousel slide 6 - alt text" src={carouselImage6} /></li>
                </ul>
                <div className="controls">
                    <button className="previous-slide">
                        <i className="las la-arrow-circle-left sm inverted"></i>
                        <span className="sr-only">Previous slide</span>
                    </button>
                    <button className="play-pause">
                        <i className="las la-pause-circle sm inverted"></i>
                        <span className="sr-only">Pause</span>
                    </button>
                    <button className="next-slide">
                        <i className="las la-arrow-circle-right sm inverted"></i>
                        <span className="sr-only">Next slide</span>
                    </button>
                </div>
                <div className="carousel-dots-container">
                </div>
            </div>

            <pre>
                <code className="language-javascript">
                    {code1}
                </code>
            </pre>
        </div>
    )
}

export default Carousel

