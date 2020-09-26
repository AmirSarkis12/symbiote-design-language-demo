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
    <p className="title">Red</p>
    <label htmlFor="radioRed" className="radio-label">
        <div className="radio-group">
            <input type="radio" className="radio-input" id="radioRed" name="radioColor" hidden />
            <span className="radio-checked"></span>
        </div>
    </label>
    <p className="title">Blue</p>
    <label htmlFor="radioBlue" className="radio-label">
        <div className="radio-group">
            <input type="radio" className="radio-input" id="radioBlue" name="radioColor" hidden />
            <span className="radio-checked"></span>
        </div>
    </label>
    <p className="title">Yellow</p>
    <label htmlFor="radioYellow" className="radio-label">
        <div className="radio-group">
            <input type="radio" className="radio-input" id="radioYellow" name="radioColor" hidden />
            <span className="radio-checked"></span>
        </div>
    </label>
    <p className="title">Green</p>
    <label htmlFor="radioGreen" className="radio-label">
        <div className="radio-group">
            <input type="radio" className="radio-input" id="radioGreen" name="radioColor" hidden />
            <span className="radio-checked"></span>
        </div>
    </label>
    </div>`;

    return (
        <div>
            <h1>Radio</h1>
            <div className="radio">
                <p className="title">Beef</p>
                <label htmlFor="radioBeef" className="radio-label">
                    <div className="radio-group">
                        <input type="radio" className="radio-input" id="radioBeef" name="radioKebab" hidden />
                        <span className="radio-checked"></span>
                    </div>
                </label>
                <p className="title">Chicken</p>
                <label htmlFor="radioChicken" className="radio-label">
                    <div className="radio-group">
                        <input type="radio" className="radio-input" id="radioChicken" name="radioKebab" hidden />
                        <span className="radio-checked"></span>
                    </div>
                </label>
                <p className="title">Lamb</p>
                <label htmlFor="radioLamb" className="radio-label">
                    <div className="radio-group">
                        <input type="radio" className="radio-input" id="radioLamb" name="radioKebab" hidden />
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
                <p className="title">Red</p>
                <label htmlFor="radioRed" className="radio-label">
                    <div className="radio-group">
                        <input type="radio" className="radio-input" id="radioRed" name="radioColor" hidden />
                        <span className="radio-checked"></span>
                    </div>
                </label>
                <p className="title">Blue</p>
                <label htmlFor="radioBlue" className="radio-label">
                    <div className="radio-group">
                        <input type="radio" className="radio-input" id="radioBlue" name="radioColor" hidden />
                        <span className="radio-checked"></span>
                    </div>
                </label>
                <p className="title">Yellow</p>
                <label htmlFor="radioYellow" className="radio-label">
                    <div className="radio-group">
                        <input type="radio" className="radio-input" id="radioYellow" name="radioColor" hidden />
                        <span className="radio-checked"></span>
                    </div>
                </label>
                <p className="title">Green</p>
                <label htmlFor="radioGreen" className="radio-label">
                    <div className="radio-group">
                        <input type="radio" className="radio-input" id="radioGreen" name="radioColor" hidden />
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