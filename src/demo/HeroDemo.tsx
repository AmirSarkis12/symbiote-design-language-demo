import React, { useEffect } from 'react';

import heroImage2 from '../assets/images/hero-image-pathway.jpeg';

function HeroDemo() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Hero - Full width (Left)</h1>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="hero">
                    <img className="hero-background" alt="Hero alt text" src={heroImage2} />
                    <div className="container hero-fluid left">
                        <div className="col-xs-12 col-sm-8 col-lg-4">
                            <div className="content">
                                <h3>Mauris tortor turpis, dignissim vel ullam.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                                <button className="cta">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Hero - Full width (Centre)</h1>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="hero">
                    <img className="hero-background" alt="Hero alt text" src={heroImage2} />
                    <div className="container hero-fluid center">
                        <div className="col-xs-12 col-sm-8 col-lg-4">
                            <div className="content">
                                <h3>Mauris tortor turpis, dignissim vel ullam.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                                <button className="cta">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Hero - Full width (Right)</h1>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="hero">
                    <img className="hero-background" alt="Hero alt text" src={heroImage2} />
                    <div className="container hero-fluid right">
                        <div className="col-xs-12 col-sm-8 col-lg-4">
                            <div className="content">
                                <h3>Mauris tortor turpis, dignissim vel ullam.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                                <button className="cta">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HeroDemo