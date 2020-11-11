import React, { useEffect } from 'react';
import Prism from 'prismjs'

function Checkbox() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
    });

    const code1 =
        `<div className="checkbox">
    <p className="title">I agree to the terms and conditions</p>
    <label htmlFor="terms" className="checkbox-label">
        <div className="checkbox-group">
            <input type="checkbox" className="checkbox-input" id="terms" hidden />
            <span className="checkbox-checked"></span>
        </div>
    </label>
</div>`;

    return (
        <div>
            <h1>Checkbox</h1>
            <div className="checkbox">
                <p className="title">Pickles</p>
                <label htmlFor="pickles" className="checkbox-label">
                    <div className="checkbox-group">
                        <input type="checkbox" className="checkbox-input" id="pickles" hidden />
                        <span className="checkbox-checked"></span>
                    </div>
                </label>
                <p className="title">Cheese</p>
                <label htmlFor="cheese" className="checkbox-label">
                    <div className="checkbox-group">
                        <input type="checkbox" className="checkbox-input" id="cheese" hidden />
                        <span className="checkbox-checked"></span>
                    </div>
                </label>
                <p className="title">Mayo</p>
                <label htmlFor="mayo" className="checkbox-label">
                    <div className="checkbox-group">
                        <input type="checkbox" className="checkbox-input" id="mayo" hidden />
                        <span className="checkbox-checked"></span>
                    </div>
                </label>
                <p className="title">Extra napkins</p>
                <label htmlFor="extraNapkins" className="checkbox-label">
                    <div className="checkbox-group">
                        <input type="checkbox" className="checkbox-input" id="extraNapkins" hidden />
                        <span className="checkbox-checked"></span>
                    </div>
                </label>
            </div>
            <p>Check boxes allow users to select one or more items</p>

            <h3>When to use this component</h3>
            <p>Checkboxes are recomended to be used when there are lists of options and a user may select any number of choices, including zero, one, or several. In other words, each checkbox is independent of all other checkboxes in the list, so checking one box doesn't uncheck the others.</p>

            <h3>When not to use this component</h3>
            <p>Do not use checkboxes when the label does not make both states — (turned on, and turned off) — clear to the user. If that is not possible, use a pair of radio button with two options instead. Then both states can have their own label.</p>

            <h3>Snippet</h3>
            <div className="checkbox">
                <p className="title">I agree to the terms and conditions</p>
                <label htmlFor="terms" className="checkbox-label">
                    <div className="checkbox-group">
                        <input type="checkbox" className="checkbox-input" id="terms" hidden />
                        <span className="checkbox-checked"></span>
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

export default Checkbox