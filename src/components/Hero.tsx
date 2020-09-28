import React, { useEffect } from 'react';
import Prism from 'prismjs'

import heroImage1 from '../assets/images/hero-image-glacier.jpeg';
import heroImage2 from '../assets/images/hero-image-pathway.jpeg';
import { Link } from 'react-router-dom';

function Hero() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
    });

    const code1 =
        `<div className="hero">
    <img className="hero-background" alt="Hero alt text" src={/your/image/path/image.jpg} />
    <div className="col-xs-10 col-sm-8 col-lg-4 content">
        <h3>Mauris tortor turpis, dignissim vel ullam.</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
        <button className="cta">Read more</button>
    </div>
</div>`;

    const code2 =
        `<div className="container-fluid">
    <div className="hero">
        <img className="hero-background" alt="Hero alt text"  src={/your/image/path/image.jpg} />
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
</div>`;

    return (
        <div>
            <h1>Hero</h1>
            <p>The Hero component is used to draw attention and to relay short and useful information to the user.</p>

            <h3>When to use this component</h3>
            <p>This component can be used on any page but is recommended to be used as the first element within the content section of a page as it designed to draw attention.</p>

            <h3>When not to use this component</h3>
            <p>Do not use this component as the last content element on page as it may not be viewed by users who choose not to scroll to the bottom of the page. This component should really be considered as a prominent feature of any page that uses it.</p>

            <h3>Options</h3>
            <p>The following options can be applied to the Hero component.</p>

            <ul className="styled-list">
                <li><b>Size</b> - Full viewport width or contained width. The component can be positioned in either a fluid or regular container spaning either the full viewport width or be constrained to the width of a container. </li>
                <li><b>Content positioning</b> - Content is optional but can be positioned in the left, the centre or the right of the Hero component. Choosing to align either left or right along with placing the Hero component in a fluid container will cause the content to align with the content that is contained in a container.</li>
            </ul>

            <h3>Contained width</h3>
            <div className="hero">
                <img className="hero-background" alt="Hero alt text" src={heroImage1} />
                <div className="col-xs-10 col-sm-8 col-lg-4 content">
                    <h3>Mauris tortor turpis, dignissim vel ullam.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                    <button className="cta">Read more</button>
                </div>
            </div>
            <pre>
                <code className="language-javascript">
                    {code1}
                </code>
            </pre>

            <h3>Full width</h3>
            <p>This is best displayed on its own page which can be viewed <Link to='/hero-demo'>here</Link>.</p>
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
            <pre>
                <code className="language-javascript">
                    {code2}
                </code>
            </pre>

        </div>
    )
}

export default Hero

