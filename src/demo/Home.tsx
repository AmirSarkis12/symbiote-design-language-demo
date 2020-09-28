import React from 'react';
import { Link } from 'react-router-dom';

import CardImagePhilosophy from '../assets/images/card-image-philosophy.jpeg';
import CardImageComponents from '../assets/images/card-image-components.jpeg';
import CardImageStyles from '../assets/images/card-image-styles.jpeg';
import CardImageGettingStarted from '../assets/images/card-image-getting-started.jpeg';

function Home() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Symbiote Human Centred Design System</h1>

                        <p>Use this design system to provide a human centered, consistent and trustworthy online experience for everyone who accesses your website. It's a living, breathing, pull-request loving, store of how we, as an organisation wish to help you build and craft your web experiences.</p>

                        <p>It's released under a MIT license, apart from the use of our logo, it's free and open software. <Link to='/getting-started'>Here</Link> is how you can get started. If you find this design system useful, we'd love to hear about it at <a href="mailto:hello@symbiote.com.au?subject=Symbiote%20Human%20Centred%20Design%20System&body=Hi%20Symbiote,">hello@symbiote.com.au</a>
                        .</p>

                        <p>If you find a bug or have an improvement, please do fork this project on GitHub.</p>

                        <p>The Symbiote Team</p>
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
                                    <p>Learn about our approach to design and how it as well as our experience can help you to build elegant and accessable web experiences.</p>
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
                                    <p>We have documented all aspects of our design components along with realistic examples and snippets to get you up and running quickly.</p>
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
                                backgroundImage: `url(${CardImageStyles})`

                            }}>
                                <div className="content">
                                    <h3>Styles</h3>
                                    <p>Our design system is extremely flexible and can be easily modified and offers a flat file structure to help you easily curate it.</p>
                                    <div className="button-container">
                                        <button className="cta"> <Link to='/styles'>Read more</Link></button>
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
                                    <p>Whether you're a designer or developer or maybe even both, this guide will help you to quickly get started with our design system.</p>
                                    <div className="button-container">
                                        <button className="cta"> <Link to='/getting-started'>Read more</Link></button>
                                    </div>
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