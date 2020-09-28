import React, { useEffect } from 'react';
import Prism from 'prismjs'

function List() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
    });

    const code1 =
        `<ol className="styled-list">
    <li>First item</li>
    <li>Second item (Parent)
        <ol>
            <li>Third item (Child)</li>
            <li>Fourth item (Child)</li>
            <li>Fifth item (Child)</li>
        </ol>
    </li>
    <li>Sixth item</li>
</ol>`;

    const code2 =
        `<ul className="styled-list">
    <li>First item</li>
    <li>Second item (Parent)
        <ul>
            <li>Third item (Child)</li>
            <li>Fourth item (Child)</li>
            <li>Fifth item (Child)</li>
        </ul>
    </li>
    <li>Sixth item</li>
</ul>`;

    return (
        <div>
            <h1>List</h1>
            <p>This component is useful for displaying either associated or unassociated lists of items. It is stylised in a way to help users visualise associations between list points if they exist.</p>

            <h3>When to use this component</h3>
            <p>This component should be used to display points of data and should be kept short in order to reduce visual complexity.</p>

            <h3>When not to use this component</h3>
            <p>Do not use this component to display large paragraphs of text.</p>

            <h3>Snippet</h3>
            <p>The following are the two possible varieties of the List component which show the association on hover.</p>

            <h3>Ordered list</h3>
            <ol className="styled-list">
                <li>First item</li>
                <li>Second item (Parent)
                    <ol>
                        <li>Third item (Child)</li>
                        <li>Fourth item (Child)</li>
                        <li>Fifth item (Child)</li>
                    </ol>
                </li>
                <li>Sixth item</li>
            </ol>
            <pre>
                <code className="language-javascript">
                    {code1}
                </code>
            </pre>

            <h3>Unordered list</h3>
            <ul className="styled-list">
                <li>First item</li>
                <li>Second item (Parent)
                    <ul>
                        <li>Third item (Child)</li>
                        <li>Fourth item (Child)</li>
                        <li>Fifth item (Child)</li>
                    </ul>
                </li>
                <li>Sixth item</li>
            </ul>
            <pre>
                <code className="language-javascript">
                    {code2}
                </code>
            </pre>
        </div>
    )
}

export default List

