import React from 'react';
import { Link } from 'react-router-dom';

import CardImagePhilosophy from '../assets/images/card-image-philosophy.jpeg';
import CardImageComponents from '../assets/images/card-image-components.jpeg';
import CardImageGettingStarted from '../assets/images/card-image-getting-started.jpeg';
import CardImageStyles from '../assets/images/card-image-styles.jpeg';

function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>Symbiote Human Centred Design System</h2>
                    <br></br>
                    <p>Use this design system to provide a human centered, consistent and trustworthy online experience for everyone who accesses your website. It's a living, breathing, pull-request loving, store of how we, as an organisation wish to help you build and craft your web experiences.</p>
                    <br></br>
                    <p>It's released under a MIT license, apart from the use of our logo, it's free and open software. <Link to='/getting-started'>Here</Link> is how you can get started. If you find this useful, we'd love to hear about it at <a href="mailto:hello@symbiote.com.au ">hello@symbiote.com.au</a>
                    </p>
                    <br></br>
                    <p>
                    If you find a bug or have an improvement, please do fork this project on github.
                    </p>
                    <br></br>
                    <p>The Symbiote Team</p>
                    <br></br>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-6 col-lg-3">
                    <div className="card">
                        <div className="card-wrapper" style={{
                            backgroundImage: `url(${CardImagePhilosophy})`

                        }}>
                            <div className="content">
                                <h3>Philosophy</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                                <div className="button-container">
                                    <button className="cta"><Link to='/philosophy'>Read more</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-3">
                    <div className="card">
                        <div className="card-wrapper" style={{
                            backgroundImage: `url(${CardImageComponents})`
                        }}>
                            <div className="content">
                                <h3>Components</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                                <div className="button-container">
                                    <button className="cta"><Link to='/components'>Read more</Link></button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-3">
                    <div className="card">
                        <div className="card-wrapper" style={{
                            backgroundImage: `url(${CardImageGettingStarted})`

                        }}>
                            <div className="content">
                                <h3>Getting Started</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                                <div className="button-container">
                                    <button className="cta"> <Link to='/getting-started'>Read more</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-6 col-lg-3">
                    <div className="card">
                        <div className="card-wrapper" style={{
                            backgroundImage: `url(${CardImageStyles})`

                        }}>
                            <div className="content">
                                <h3>Styles</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                                <div className="button-container">
                                    <button className="cta"> <Link to='/styles'>Read more</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )

}

export default Home