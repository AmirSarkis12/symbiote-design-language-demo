import React, { useEffect } from 'react';
import Prism from 'prismjs'

function Buttons() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
    });

    const code1 =
        `<button>Click me</button>`

    const code2 =
        `<button className="primary lg">Large button</button>
<button className="primary md">Medium button</button>
<button className="primary sm">Small button</button>
<button className="primary xs">Extra small button</button>`

    const code3 =
        `<button className="primary">Primary button</button>
<button className="secondary">Secondary button</button>
<button className="tertiary">Tertiary button</button>`

    const code4 =
        `<button className="outline-light">Outline Line button</button>
<button className="outline-dark">Outline Dark button</button>
<button className="cta">Call to action button</button>`

    const code5 =
        `<button className="disabled">Disabled button</button>`

    return (
        <div>
            <h1>Buttons</h1>
            <button className="primary">Click me</button>
            <button className="secondary">Click me</button>
            <button className="tertiary">Click me</button>
            <button className="disabled">Click me</button>
            <button className="outline-dark">Click me</button>
            <button className="cta">Click me</button>

            <h2>When to use this component</h2>
            <p>Use the Button component to help users carry out an action on a page like starting an application or moving to the next question in a form.</p>
            <p>Write Button text in sentence case, describing the action it performs. For example:</p>
            <ul className="styled-list">
                <li>‘Start now’ at the start of process</li>
                <li>‘Log in’ to an account the user has already created</li>
                <li>Send your application’ to submit the user’s application form</li>
                <li>‘Pay’ to make a payment</li>
                <li>‘Log out’ when a user is logged into an account</li>
            </ul>

            <h2>When not to use this component</h2>
            <p>The Button must never be used to draw attention to any other type of link, for example, an anchor link. They are only to be used for call to action.</p>

            <h2>Snippet</h2>
            <pre>
                <code className="language-javascript">
                    {code1}
                </code>
            </pre>

            <h2>Options</h2>
            <p>The following options can be applied and combined within the Button component.</p>

            <ul className="styled-list">
                <li>Size - large, medium (default), small, extra small</li>
                <li>Hierarchy - Primary, Secondary, Tertiary</li>
                <li>Style - Outline Light, Outline Dark, Call to action</li>
                <li>Status - Disabled</li>
            </ul>

            <h3>Size</h3>
            <button className="primary lg">Large button</button>
            <button className="primary">Medium button</button>
            <button className="primary sm">Small button</button>
            <button className="primary xs">Extra small button</button>
            <pre>
                <code className="language-javascript">
                    {code2}
                </code>
            </pre>

            <h3>Hierarchy</h3>
            <button className="primary">Primary button</button>
            <button className="secondary">Secondary button</button>
            <button className="tertiary">Tertiary button</button>
            <pre>
                <code className="language-javascript">
                    {code3}
                </code>
            </pre>

            <h3>Style</h3>
            <div className="button-outline-background">
                <button className="outline-light">Outline Light button</button>
            </div>
            <button className="outline-dark">Outline Dark button</button>
            <button className="cta">Call to action button</button>
            <pre>
                <code className="language-javascript">
                    {code4}
                </code>
            </pre>

            <h3>Status</h3>
            <button className="disabled">Disabled button</button>
            <pre>
                <code className="language-javascript">
                    {code5}
                </code>
            </pre>
        </div>
    )
}

export default Buttons