import React, { useEffect } from 'react';
import Prism from 'prismjs'

function Tooltip() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
    });

    const code1 =
        `<div className="tooltip">
    <p>Hover over me</p>
    <span className="tooltip-text">Hey, I'm a tooltip!</span>
</div>`;

    return (
        <div>
            <h1>Tooltip</h1>
            <p>The Tooltip component is a text labels that appears when a user hovers over, focuses on, or touches an element.</p>

            <h3>When to use this component</h3>
            <p>This component should be used sparingly and only when a specific item may need further clasrification</p>

            <h3>When not to use this component</h3>
            <p>Do not use this component for common UI elements that do not require any further information.</p>

            <h3>Snippet</h3>
            <div className="tooltip">
                <p>Hover over me</p>
                <span className="tooltip-text">Hey, I'm a tooltip!</span>
            </div>

            <pre>
                <code className="language-javascript">
                    {code1}
                </code>
            </pre>
        </div>
    )
}

export default Tooltip

