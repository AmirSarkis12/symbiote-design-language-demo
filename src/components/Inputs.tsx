import React, { useEffect } from 'react';
import Prism from 'prismjs'

function Inputs() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
    });

    const code1 =
        `<form>
    <label htmlFor="firstName">First Name</label>
    <input type="text" id="firstName" />
</form>`;

    const code2 =
        `<form>
    <label htmlFor="lastname">Last Name (required)</label>
    <input type="text" id="lastname" required/>
</form>`;

    const code3 =
        `<form>
    <label htmlFor="message">Optional extra message</label>
    <textarea id="message" />
</form>`;

    const code4 =
        `<form>
    <label htmlFor="firstName">First Name</label>
    <input type="text" id="firstName" className="valid" />

    <label htmlFor="lastname">Last Name</label>
    <input type="text" id="lastname" className="error" />
</form>`;

    const code5 =
        `<form>
    <label htmlFor="address">Address</label>
    <input type="text" id="address" disabled/>
</form>`;

    const code6 =
        `<form>
    <label htmlFor="postcode">Postcode</label>
    <input type="text" id="postcode" className="xs" />
</form>`;

    const code7 =
        `<form>
    <label htmlFor="postcode">Postcode</label>
    <input type="text" id="postcode" className="sm" />
</form>`;

    const code8 =
        `<form>
    <label htmlFor="firstname">First Name</label>
    <input type="text" id="firstname" />
</form>`;

    const code9 =
        `<form>
    <label htmlFor="lastname">Last Name</label>
    <input type="text" id="lastname" className="lg" />
</form>`;

    const code10 =
        `<form>
    <label htmlFor="username">Username</label>
    <input type="text" id="username" className="xl" />
</form>`;

    const code11 =
        `<form>
    <label htmlFor="address">Address</label>
    <input type="text" id="address" className="full-width" />
</form>`;

    return (
        <div>
            <h1>Inputs</h1>
            <p>Input components are are input fields typically used in forms that allow users to enter text in a structured format. All text inputs must have visible labels; placeholder text is not an acceptable replacement for a label as it vanishes when users start typing.</p>

            <p>Labels should be aligned above the text input they refer to. They should be short, direct and written in sentence case. Do not use colons at the end of labels.</p>

            <h3>Varieties</h3>
            <p>The following examples are the possible varieties of text input. The below can be mixed together, for example, a textare can be required as well as being set to full width.</p>

            <h3>Default</h3>
            <form>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" className="md"/>
            </form>
            <pre>
                <code className="language-javascript">
                    {code1}
                </code>
            </pre>

            <h3>Required Input</h3>
            <form>
                <label htmlFor="lastname">Last Name (required)</label>
                <input type="text" id="lastname" required/>
            </form>
            <pre>
                <code className="language-javascript">
                    {code2}
                </code>
            </pre>

            <h3>Textarea</h3>
            <form>
                <label htmlFor="message">Optional extra message</label>
                <textarea id="message" />
            </form>
            <pre>
                <code className="language-javascript">
                    {code3}
                </code>
            </pre>

            <h3>Valid and Invalid input</h3>
            <form>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" className="valid" />

                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" className="error" />
            </form>
            <pre>
                <code className="language-javascript">
                    {code4}
                </code>
            </pre>

            <h3>Disabled input</h3>
            <form>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" disabled/>
            </form>
            <pre>
                <code className="language-javascript">
                    {code5}
                </code>
            </pre>

            <h3>Extra small input</h3>
            <form>
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" className="xs" />
            </form>
            <pre>
                <code className="language-javascript">
                    {code6}
                </code>
            </pre>

            <h3>Small input</h3>
            <form>
                <label htmlFor="postcode">Postcode</label>
                <input type="text" id="postcode" className="sm" />
            </form>
            <pre>
                <code className="language-javascript">
                    {code7}
                </code>
            </pre>

            <h3>Medium input (Default)</h3>
            <form>
                <label htmlFor="firstname">First Name</label>
                <input type="text" id="firstname" />
            </form>
            <pre>
                <code className="language-javascript">
                    {code8}
                </code>
            </pre>

            <h3>Large input</h3>
            <form>
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" className="lg" />
            </form>
            <pre>
                <code className="language-javascript">
                    {code9}
                </code>
            </pre>

            <h3>Extra large input</h3>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" className="xl" />
            </form>
            <pre>
                <code className="language-javascript">
                    {code10}
                </code>
            </pre>

            <h3>Full width input</h3>
            <form>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" className="full-width" />
            </form>
            <pre>
                <code className="language-javascript">
                    {code11}
                </code>
            </pre>

        </div>
    )
}

export default Inputs

