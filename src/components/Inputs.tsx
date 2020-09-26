import React, { useEffect } from 'react';
import Prism from 'prismjs'

function Inputs() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
    });

    const code1 =
        ``;

    return (
        <div>
            <h1>Inputs</h1>
            <p></p>

            <h3>When to use this component</h3>
            <p></p>

            <h3>When not to use this component</h3>
            <p></p>

            <h3>Snippet</h3>

            <pre>
                <code className="language-javascript">
                    {code1}
                </code>
            </pre>
        </div>
    )
}

export default Inputs

