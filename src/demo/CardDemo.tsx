import React, { useEffect } from 'react';

import cardImage1 from '../assets/images/card-image-mountains.jpeg';
import cardImage2 from '../assets/images/card-image-trees.jpeg';
import cardImage3 from '../assets/images/card-image-lavender.jpeg';
import cardImage4 from '../assets/images/card-image-dessert.jpeg';

function CardDemo() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="container">
            <h1>Card component showcase</h1>
            <div className="row">
                <div className="col-xs-12 col-sm-4">
                    <div className="card full-image-card">
                        <div className="card-wrapper" style={{
                            backgroundImage: `url(${cardImage1})`

                        }}>
                            {/* Optional date */}
                            <div className="date">
                                <span className="day">18</span>
                                <span className="month">Sep</span>
                                <span className="year">2020</span>
                            </div>
                            <div className="content">
                                <p className="topic inverted">Topic</p>
                                <h3 className="inverted">Mauris tortor turpis, dignissim vel ullam.</h3>
                                <p className="inverted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                                <div className="button-container">
                                    <button className="cta inverted">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-4">
                    <div className="card">
                        <div className="card-wrapper" style={{
                            backgroundImage: `url(${cardImage2})`

                        }}>
                            <div className="content">
                                <p className="topic">Topic</p>
                                <h3>Mauris tortor turpis, dignissim vel ullam.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                                <div className="button-container">
                                    <button className="cta">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-4">
                    <div className="card full-image-card">
                        <div className="card-wrapper" style={{
                            backgroundImage: `url(${cardImage3})`

                        }}>
                            <div className="content">
                                <p className="topic inverted">Topic</p>
                                <h3 className="inverted">Mauris tortor turpis, dignissim vel ullam.</h3>
                                <p className="inverted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                                <div className="button-container">
                                    <button className="cta inverted">Read more</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br></br>
            <br></br>

            <div className="row">

                <div className="col-xs-12 col-sm-8">
                    <div className="card wide-card">

                        <div className="content">
                            <p className="topic">Topic</p>
                            <h3>Mauris tortor turpis, dignissim vel ullam.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                            <button className="cta">Read more</button>
                        </div>
                        <div className="card-image" style={{
                            backgroundImage: `url(${cardImage4})`
                        }}></div>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-4">
                    <div className="card no-image">
                        <div className="card-wrapper">
                            <div className="content">
                                <p className="topic">Topic</p>
                                <h3>Mauris tortor turpis, dignissim vel ullam.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                                <div className="button-container">
                                    <button className="cta">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default CardDemo