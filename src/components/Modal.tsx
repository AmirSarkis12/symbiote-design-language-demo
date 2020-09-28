import React, { useEffect } from 'react';
import Prism from 'prismjs'

function Modal() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
    });

    const code1 =
        ``;

    return (
        <div>
            <h1>Modal</h1>
            <p>The Modal component is used when interaction is required by the user. It used to display some sort of interactive item such as a button or a link - with the user requiring to action an item.</p>

            <h3>When to use this component</h3>
            <p>This component should be used when an imperitive option is required by the user.</p>

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

export default Modal

