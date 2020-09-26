import React, { useEffect } from 'react';
import Prism from 'prismjs'

function Radio() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
    });

    const code1 =
`<p>What is your favourite color?</p>

<div className="radio">
    <p className="title">Blue</p>
    <label htmlFor="radio1" className="radio-label">
        <div className="radio-group">
            <input type="radio" className="radio-input" id="radio1" name="customRadio" hidden />
            <span className="radio-checked"></span>
        </div>
    </label>
    <p className="title">Red</p>
    <label htmlFor="radio2" className="radio-label">
        <div className="radio-group">
            <input type="radio" className="radio-input" id="radio2" name="customRadio" hidden />
            <span className="radio-checked"></span>
        </div>
    </label>
    <p className="title">Yellow</p>
    <label htmlFor="radio3" className="radio-label">
        <div className="radio-group">
            <input type="radio" className="radio-input" id="radio3" name="customRadio" hidden />
            <span className="radio-checked"></span>
        </div>
    </label>
    <p className="title">Green</p>
    <label htmlFor="radio4" className="radio-label">
        <div className="radio-group">
            <input type="radio" className="radio-input" id="radio4" name="customRadio" hidden />
            <span className="radio-checked"></span>
        </div>
    </label>
</div>`;

    return (
        <div>
            <h1>Radio</h1>
            <div className="radio">
                <label htmlFor="radio1" className="radio-label">
                    <div className="radio-group">
                        <input type="radio" className="radio-input" id="radio1" name="customRadio" hidden />
                        <span className="radio-checked"></span>
                    </div>
                </label>
                <label htmlFor="radio2" className="radio-label">
                    <div className="radio-group">
                        <input type="radio" className="radio-input" id="radio2" name="customRadio" hidden />
                        <span className="radio-checked"></span>
                    </div>
                </label>
                <label htmlFor="radio3" className="radio-label">
                    <div className="radio-group">
                        <input type="radio" className="radio-input" id="radio3" name="customRadio" hidden />
                        <span className="radio-checked"></span>
                    </div>
                </label>
                <label htmlFor="radio4" className="radio-label">
                    <div className="radio-group">
                        <input type="radio" className="radio-input" id="radio4" name="customRadio" hidden />
                        <span className="radio-checked"></span>
                    </div>
                </label>
            </div>
            <p>Radio buttons display a set of mutually exclusive options from which a user must select exactly one.</p>

            <h3>When to use this component</h3>
            <p>Radio buttons should be used when an option in a given option list is required and therefore an option should be selected by default.</p>

            <h3>When not to use this component</h3>
            <p>Do not use Radio buttons when the list of options is not mutually exclusive. It should be clear to the user that selecting one option will anull the other options.</p>

            <h3>Snippet</h3>

            <p>What is your favourite color?</p>
            <div className="radio">
                <p className="title">Blue</p>
                <label htmlFor="radio1" className="radio-label">
                    <div className="radio-group">
                        <input type="radio" className="radio-input" id="radio1" name="customRadio" hidden />
                        <span className="radio-checked"></span>
                    </div>
                </label>
                <p className="title">Red</p>
                <label htmlFor="radio2" className="radio-label">
                    <div className="radio-group">
                        <input type="radio" className="radio-input" id="radio2" name="customRadio" hidden />
                        <span className="radio-checked"></span>
                    </div>
                </label>
                <p className="title">Yellow</p>
                <label htmlFor="radio3" className="radio-label">
                    <div className="radio-group">
                        <input type="radio" className="radio-input" id="radio3" name="customRadio" hidden />
                        <span className="radio-checked"></span>
                    </div>
                </label>
                <p className="title">Green</p>
                <label htmlFor="radio4" className="radio-label">
                    <div className="radio-group">
                        <input type="radio" className="radio-input" id="radio4" name="customRadio" hidden />
                        <span className="radio-checked"></span>
                    </div>
                </label>
            </div>
            <pre>
                <code className="language-javascript">
                    {code1}
                </code>
            </pre>

        </div>
    )
}

export default Radio