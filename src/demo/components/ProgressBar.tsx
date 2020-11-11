import React, { useEffect } from 'react';
import Prism from 'prismjs'

function ProgressBar() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
    });

    const code1 =
        `<div className="progress-bar">
    <ol className="progress-steps">
        <li className="progress-step">
            <span className="count highlight-index"></span>
            <span className="description">Step one</span>
        </li>
        <li className="progress-step">
            <span className="count highlight-index"></span>
            <span className="description">Step two</span>
        </li>
        <li className="progress-step">
            <span className="count current"></span>
            <span className="description">Step three</span>
        </li>
        <li className="progress-step">
            <span className="count"></span>
            <span className="description">Step four</span>
        </li>
        <li className="progress-step">
            <span className="count"></span>
            <span className="description">Step five</span>
        </li>
    </ol>
</div>`;

    return (
        <div>
            <h1>Progress Bar</h1>
            <p>The progress Bar component is useful for helping users see their progress when completing multi-step forms. It indicates the number of pages in a journey as well as the completed steps as well as the current step.</p>

            <h3>When to use this component</h3>
            <p>This component should only be used when a from has at least two distinct steps and an update occurs to the fields being completed.</p>

            <h3>When not to use this component</h3>
            <p>This component should not be used for a single page form or for indicating any other progress.</p>

            <h3>Snippet</h3>
            <div className="progress-bar">
                <ol className="progress-steps">
                    <li className="progress-step">
                        <span className="count completed"></span>
                        <span className="description">Step one</span>
                    </li>
                    <li className="progress-step">
                        <span className="count completed"></span>
                        <span className="description">Step two</span>
                    </li>
                    <li className="progress-step">
                        <span className="count current"></span>
                        <span className="description">Step three</span>
                    </li>
                    <li className="progress-step">
                        <span className="count"></span>
                        <span className="description">Step four</span>
                    </li>
                    <li className="progress-step">
                        <span className="count"></span>
                        <span className="description">Step five</span>
                    </li>
                </ol>
            </div>

            <pre>
                <code className="language-javascript">
                    {code1}
                </code>
            </pre>
        </div>
    )
}

export default ProgressBar

