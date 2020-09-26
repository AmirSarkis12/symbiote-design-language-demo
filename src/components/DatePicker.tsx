import React, { useEffect } from 'react';
import Prism from 'prismjs'

function DatePicker() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
    });

    const code1 =
        ``;

    return (
        <div>
            <h1>Date Picker</h1>
            <p>The Select component allows users to choose an option from a long list.</p>

            <h3>When to use this component</h3>
            <p>This component should only be used when a long list of options is being presented.</p>

            <h3>When not to use this component</h3>
            <p>It is not recommended to use this component when only a short list of options are presented. Some users may have difficulty with Select components and as such a group of radio buttons may suffice in order to reduce overall complexity.</p>

            <h3>Snippet</h3>

            <pre>
                <code className="language-javascript">
                    {code1}
                </code>
            </pre>

        </div>
    )
}

export default DatePicker