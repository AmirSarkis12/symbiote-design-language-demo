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

                        <p>If you find a bug or have an improvement, please do fork this project on github.</p>

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
                </div>
            </div>
            <div className="container-fluid footer-container">
                <footer>
                    <div className="container">
                        <div className="col-xs-6 col-md-3">
                            <p>More</p>
                            <ul>
                                <li><a href="a">Philosphy</a></li>
                                <li><a href="a">Components</a></li>
                                <li><a href="a">Styles</a></li>
                                <li><a href="a">Getting Started</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <p>Social</p>
                            <div className="social-link">
                                <a href="a" target="_blank"><i className="lab la-facebook inverted"></i><p>Facebook</p></a>
                            </div>
                            <div className="social-link">
                                <a href="a" target="_blank"><i className="lab la-twitter inverted"></i><p>Twitter</p></a>
                            </div>
                            <div className="social-link">
                                <a href="a" target="_blank"><i className="lab la-linkedin-in inverted"></i><p>LinkedIn</p></a>
                            </div>
                        </div>
                    </div>
                </footer>

                <div className="copyright">
                    <p>Copyright &#169; <a href="www.symbiote.com.au" target="_blank">Symbiote</a> Pty Ltd {new Date().getFullYear().toString()}</p>

                </div>
            </div>
        </div>




    )

}

export default Home