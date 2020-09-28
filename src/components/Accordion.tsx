import React, { useEffect } from 'react';
import Prism from 'prismjs'

function Accordion() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
    });

    const code1 =
        `<div className="accordion">
    <div className="tab">
        <input type="checkbox" id="accordion-1"></input>
        <label className="tab-label" htmlFor="accordion-1">First accordion tab</label>
        <div className="tab-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
        </div>
    </div>
    <div className="tab">
        <input type="checkbox" id="accordion-2"></input>
        <label className="tab-label" htmlFor="accordion-2">Second accordion tab</label>
        <div className="tab-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
        </div>
    </div>
    <div className="tab">
        <input type="checkbox" id="accordion-3"></input>
        <label className="tab-label" htmlFor="accordion-3">Third accordion tab</label>
        <div className="tab-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
        </div>
    </div>
</div>`;

    return (
        <div>
            <h1>Accordion</h1>
            <p>The accordion component allows users show and hide sections of related content on a page.</p>

            <h3>When to use this component</h3>
            <p>Accordions can be used to show and hide information that might be part of larger or more complex areas of content.</p>

            <h3>When not to use this component</h3>
            <p>Accordions hide content from users, and not everyone will notice or understand them. Don’t use them for content that is essential to all users. Accordions work best when they contain simple content and links, for example, do not place a table within an Accordion component.</p>

            <h3>Snippet</h3>
            <div className="accordion">
                <div className="tab">
                    <input type="checkbox" id="accordion-1"></input>
                    <label className="tab-label" htmlFor="accordion-1">First accordion tab</label>
                    <div className="tab-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                    </div>
                </div>
                <div className="tab">
                    <input type="checkbox" id="accordion-2"></input>
                    <label className="tab-label" htmlFor="accordion-2">Second accordion tab</label>
                    <div className="tab-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                    </div>
                </div>
                <div className="tab">
                    <input type="checkbox" id="accordion-3"></input>
                    <label className="tab-label" htmlFor="accordion-3">Third accordion tab</label>
                    <div className="tab-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                    </div>
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

export default Accordion

