import React, { useEffect } from 'react';
import Prism from 'prismjs'

function Label() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
    });

    const code1 =
        `<span className="label label-success">Success</span>
<span className="label label-warning">Warning</span>
<span className="label label-error">Error</span>
<span className="label label-new">New</span>
<span className="label label-info">Info</span>`;

    return (
        <div>
            <h1>Label</h1>
            <p>This component is used to notify the user when a something has occured, for example, when a new feature has been made available or if an error has occured.</p>

            <h3>When to use this component</h3>
            <p>Use this component sparingly and only when a small piece of text will be enough to relay that something requires attention.</p>

            <h3>When not to use this component</h3>
            <p>If the event that has occured requires more text than a single word consider using a Notification or Page Alert component instead.</p>

            <h3>Snippet</h3>
            <span className="label label-success">Success</span>
            <span className="label label-warning">Warning</span>
            <span className="label label-error">Error</span>
            <span className="label label-new">New</span>
            <span className="label label-info">Info</span>

            <pre>
                <code className="language-javascript">
                    {code1}
                </code>
            </pre>
        </div>
    )
}

export default Label

