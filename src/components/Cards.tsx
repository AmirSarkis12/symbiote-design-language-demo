import React, { useEffect } from 'react';
import Prism from 'prismjs'

import cardImage1 from '../assets/images/card-image-mountains.jpeg';
import cardImage2 from '../assets/images/card-image-trees.jpeg';
import cardImage3 from '../assets/images/card-image-lavender.jpeg';
import cardImage4 from '../assets/images/card-image-dessert.jpeg';
import { Link } from 'react-router-dom';

function Cards() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
    });

    const code1 =
        ``;

    const code2 =
        ``;

    const code3 =
        ``;

    const code4 =
        ``;

    return (
        <div>
            <h1>Cards</h1>
            <p>The Card component is a stylised container useful for capturing attention and presenting some text and an image along with a call to action link. It acts as an entry point to more detailed information.</p>

            <h3>When to use this component</h3>
            <p>This component should be used to present a small snippet of information along with an optional image.</p>

            <h3>When not to use this component</h3>
            <p>An individual Card component is typically a member of a collection of similar Cards and should not be used in isolation.</p>

            <h3>Options</h3>
            <p>The following options can be applied to the Card component.</p>

            <ul className="styled-list">
                <li><b>Image and text card (default)</b> - An image with space underneath for content</li>
                <li><b>Full image card</b> - A full imsge with white content overlayed.</li>
                <li><b>Full image card with date</b> - A full imsge with white content overlayed as well as a date overlay.</li>
                <li><b>Wide card</b> - A side by side layout of the Image and text card</li>
                <li><b>Text only card</b> - Useful for when no image is required.</li>
            </ul>

            <h3>Image and text card (default)</h3>
            <div className="row">
                <div className="col-xs-12 col-sm-5">
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
            </div>
            <br></br>

            <h3>Full image card</h3>
            <div className="row">
                <div className="col-xs-12 col-sm-5">
                    <div className="card full-image-card">
                        <div className="card-wrapper" style={{
                            backgroundImage: `url(${cardImage1})`
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

            <h3>Full image card with date</h3>
            <div className="row">
                <div className="col-xs-12 col-sm-5">
                    <div className="card full-image-card">
                        <div className="card-wrapper" style={{
                            backgroundImage: `url(${cardImage2})`
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
            </div>
            <br></br>

            <h3>Wide card</h3>
            <div className="row">
                <div className="col-xs-12 col-sm-10">
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
            </div>
            <br></br>

            <h3>Text only card</h3>
            <div className="row">
                <div className="col-xs-12 col-sm-5">
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

            <h3>Showcase</h3>
            <p>This component is best seen in context in this example  <Link to='/card-demo'>here</Link>.</p>
        </div>
    )
}

export default Cards

