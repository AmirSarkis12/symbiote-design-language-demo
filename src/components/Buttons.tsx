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

            <h3>When to use this component</h3>
            <p>Use the Button component to help users carry out an action on a page like starting an application or moving to the next question in a form.</p>
            <p>Write Button text in sentence case, describing the action it performs. For example:</p>
            <ul className="styled-list">
                <li><p>‘Start now’ at the start of process</p></li>
                <li><p>‘Log in’ to an account the user has already created</p></li>
                <li><p>Send your application’ to submit the user’s application form</p></li>
                <li><p>‘Pay’ to make a payment</p></li>
                <li><p>‘Log out’ when a user is logged into an account</p></li>
            </ul>

            <h3>When not to use this component</h3>
            <p>The Button must never be used to draw attention to any other type of link, for example, an anchor link. They are only to be used for call to action.</p>

            <h3>Snippet</h3>
            <pre>
                <code className="language-javascript">
                    {code1}
                </code>
            </pre>

            <h3>Options</h3>
            <p>The following options can be applied and combined within the Button component.</p>

            <ul className="styled-list">
                <li><b>Size</b> - large, medium (default), small, extra small. Use this to match the context, for example, a small button makes sense next to a paragrah.</li>
                <li><b>Hierarchy</b> - Primary, Secondary, Tertiary. Use this when more than one button is presented at the same time, for example, proceed should be 'Primary' and going back should be 'Secondary'</li>
                <li><b>Style</b> - Outline Light, Outline Dark, Call to action. This is purely stylistic and is recommended for use when another component should draw as much attention as possible for example,Buttons on full image card components.</li>
                <li><b>Status</b> - Disabled. This is important for indicating to user when they are not able to proceed for example, when completing a form and certain items have not been completed appropriately.</li>
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