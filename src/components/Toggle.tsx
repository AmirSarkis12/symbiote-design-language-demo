import React, { useEffect } from 'react';
import Prism from 'prismjs'

function Toggle() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
    });

    const code1 =
        `<div className="toggle">
    <p className="title">Show week day</p>
    <label htmlFor="customToggle" className="toggle-label">
        <input type="checkbox" className="toggle-input" id="customToggle" hidden />
        <div className="toggle-group">
            <span className="toggle-checked"></span>
        </div>
    </label>
</div>`;
    return (
        <div>
            <h1>Toggle</h1>
            <div className="toggle">
                <p className="title">Dark mode</p>
                <label htmlFor="darkMode" className="toggle-label">
                    <input type="checkbox" className="toggle-input" id="darkMode" hidden />
                    <div className="toggle-group">
                        <span className="toggle-checked"></span>
                    </div>
                </label>
            </div>
            <p>The Toggle component act as on/off switches. They prompt users to choose between two mutually exclusive options and always have a default value. Toggles should provide immediate results, giving users the freedom to control their preferences as needed.</p>

            <h3>When to use this component</h3>
            <p>Toggle switches are best used for changing the state of system functionalities and preferences. Toggles may replace two radio buttons or a single checkbox to allow users to choose between two opposing states.</p>

            <h3>When not to use this component</h3>
            <p>Do not use the Toggle component when the setting being toggled is ambiguous or has a level of complexity. Toggles should only be used for very simple and straight forward settings or decisions.</p>

            <h3>Snippet</h3>
            <div className="toggle">
                <p className="title">Show week day</p>
                <label htmlFor="showWeekDay" className="toggle-label">
                    <input type="checkbox" className="toggle-input" id="showWeekDay" hidden />
                    <div className="toggle-group">
                        <span className="toggle-checked"></span>
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

export default Toggle