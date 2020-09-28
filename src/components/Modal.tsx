import React, { useEffect } from 'react';
import Prism from 'prismjs';

import initModals from '../scripts/modal'

import modalImage1 from '../assets/images/modal-image-road.jpeg';
import modalImage2 from '../assets/images/modal-image-beach.jpeg';
import modalImage3 from '../assets/images/modal-image-canyon.jpeg';

function Modal() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
        initModals();
    });

    const code1 =
        `<div className="modal-cover modal-cover-1">
    <div className="modal modal-1">
        <button className="close-modal close-modal-1"><i className="las la-times sm inverted"></i></button>

        <div className="modal-content full-image">
            <div className="modal-content-wrapper" style={{
                backgroundImage: 'your/image/path/image.jpeg'
            }}>
                <div className="content">
                    <h3 className="inverted">Mauris tortor turpis, dignissim vel ullam.</h3>
                    <p className="inverted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                    <div className="button-container">
                        <button className="cta inverted">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

    const code2 =
        `<div className="modal-cover modal-cover-1">
    <div className="modal modal-1">
        <button className="close-modal close-modal-1"><i className="las la-times sm inverted"></i></button>

        <div className="modal-content full-image">
            <div className="modal-content-wrapper" style={{
                backgroundImage: 'your/image/path/image.jpeg'
            }}>
                <div className="content">
                    <h3 className="inverted">Mauris tortor turpis, dignissim vel ullam.</h3>
                    <p className="inverted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                    <div className="button-container">
                        <button className="cta inverted">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

    const code3 =
        `<div className="modal-cover modal-cover-1">
    <div className="modal modal-1">
        <button className="close-modal close-modal-1"><i className="las la-times sm inverted"></i></button>

        <div className="modal-content full-image">
            <div className="modal-content-wrapper" style={{
                backgroundImage: 'your/image/path/image.jpeg'
            }}>
                <div className="content">
                    <h3 className="inverted">Mauris tortor turpis, dignissim vel ullam.</h3>
                    <p className="inverted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                    <div className="button-container">
                        <button className="cta inverted">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

    const code4 =
        `<div className="modal-cover modal-cover-1">
    <div className="modal modal-1">
        <button className="close-modal close-modal-1"><i className="las la-times sm inverted"></i></button>

        <div className="modal-content full-image">
            <div className="modal-content-wrapper" style={{
                backgroundImage: 'your/image/path/image.jpeg'
            }}>
                <div className="content">
                    <h3 className="inverted">Mauris tortor turpis, dignissim vel ullam.</h3>
                    <p className="inverted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                    <div className="button-container">
                        <button className="cta inverted">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

    return (
        <div>
            <h1>Modal</h1>
            <p>The Modal component is used when an interaction is required by the web page. It used to display some sort of interactive item such as a button or a link - with the user required to action an item. It uses the styling of the Card component in order to reduce the overhead of designing new interfaces.</p>

            <h3>When to use this component</h3>
            <p>This component should be used when an imperitive option is required by the user. It should also be used sparingly as it modals can be difficult to navigate for users using accessability aids.</p>

            <h3>When not to use this component</h3>
            <p>Do not use this component for non-imperitive actions or trivial actions. Do not use this component to display messages or text with no interactive content.</p>

            <div className="modal-cover modal-cover-1">
                <div className="modal modal-1">
                    <button className="close-modal close-modal-1"><i className="las la-times sm inverted"></i></button>

                    <div className="modal-content full-image">
                        <div className="modal-content-wrapper" style={{
                            backgroundImage: `url(${modalImage1})`
                        }}>
                            <div className="content">
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

            <div className="modal-cover modal-cover-2">
                <div className="modal modal-2">
                    <button className="close-modal close-modal-2"><i className="las la-times sm inverted"></i></button>

                    <div className="modal-content">
                        <div className="modal-content-wrapper" style={{
                            backgroundImage: `url(${modalImage2})`
                        }}>
                            <div className="content">
                                <h3>Mauris tortor turpis, dignissim vel ullam.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                                <div className="button-container">
                                    <button className="primary">Read more</button>
                                    <button className="secondary">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal-cover modal-cover-3">
                <div className="modal modal-3">
                    <button className="close-modal close-modal-3"><i className="las la-times sm inverted"></i></button>
                    <div className="modal-content side-by-side">
                        <div className="content">
                            <h3>Mauris tortor turpis, dignissim vel ullam.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                            <div className="button-container">
                                <button className="primary">Read more</button>
                                <button className="secondary">Read more</button>
                            </div>
                        </div>
                        <div className="image" style={{
                            backgroundImage: `url(${modalImage3})`
                        }}></div>
                    </div>

                </div>
            </div>

            <div className="modal-cover modal-cover-4">
                <div className="modal modal-4">
                    <button className="close-modal close-modal-4"><i className="las la-times sm inverted"></i></button>

                    <div className="modal-content no-image">
                        <div className="modal-content-wrapper">
                            <div className="content">
                                <h3>Mauris tortor turpis, dignissim vel ullam.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices.</p>
                                <div className="button-container">
                                    <button className="primary">Read more</button>
                                    <button className="secondary">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h3>Options</h3>
            <p>The following options can be applied to the Modal component.</p>
            <ul className="styled-list">
                <li><b>Image and text modal (default)</b> - An image with space underneath for content</li>
                <li><b>Full image modal</b> - A full image with white content overlayed.</li>
                <li><b>Side by side modal</b> - A side by side layout of the Image and text modal</li>
                <li><b>Text only modal</b> - Useful for when no image is required.</li>
            </ul>

            <h3>Image and text modal (default)</h3>
            <button className="primary modal-trigger-2">Trigger Image and text modal</button>
            <pre>
                <code className="language-javascript">
                    {code2}
                </code>
            </pre>

            <h3>Full image modal</h3>
            <button className="primary modal-trigger-1">Trigger Full image modal</button>
            <pre>
                <code className="language-javascript">
                    {code1}
                </code>
            </pre>

            <h3>Side by side modal</h3>
            <button className="primary modal-trigger-3">Trigger Side by side modal</button>
            <pre>
                <code className="language-javascript">
                    {code3}
                </code>
            </pre>

            <h3>Text only modal</h3>
            <button className="primary modal-trigger-4">Trigger Text only modal</button>
            <pre>
                <code className="language-javascript">
                    {code4}
                </code>
            </pre>

            <pre>
                <code className="language-javascript">
                    {code1}
                </code>
            </pre>
        </div>
    )
}

export default Modal

