import React, { useEffect } from 'react';
import Prism from 'prismjs'

function Notification() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
    });

    const code1 =
        `<div className="container-fluid notification information">
    <i className="las la-info-circle"></i>
    <div className="text">
        <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Cum sociis natoque penatibus et magnis dis parturient.</p>
    </div>
    <button className="button outline-light cta sm">Read More</button>
</div>`;

    const code2 =
        `<div className="container-fluid notification success">
    <i className="las la-check-circle"></i>
    <div className="text">
        <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Cum sociis natoque penatibus et magnis dis parturient.</p>
    </div>
    <button className="button outline-light cta sm">Read More</button>
</div>`;

    const code3 =
        `<div className="container-fluid notification success">
    <i className="las la-exclamation-circle"></i>
    <div className="text">
        <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Cum sociis natoque penatibus et magnis dis parturient.</p>
    </div>
    <button className="button outline-light cta sm">Read More</button>
</div>`;

    const code4 =
        `<div className="container-fluid notification error">
    <i className="las la-times-circle"></i>
    <div className="text">
        <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Cum sociis natoque penatibus et magnis dis parturient.</p>
    </div>
    <button className="button outline-light cta sm">Read More</button>
</div>`;

    return (
        <div>
            <h1>Notification</h1>
            <p>The Notification component is used to relay important information or changes on a page to the user in a way that attracts their attention without interrupting their current task. They appear at the top of the page and are dismissable.</p>

            <h3>When to use this component</h3>
            <p>This component should be used sparingly and only when the information is considered critial for the user.</p>

            <h3>When not to use this component</h3>
            <p>Do not use this component to relay unimportant information such as form submission or for trivial/non-urgent information. Consider using a page alert component if the information being relayed is in regards to a recent interaction.</p>

            <h3>Positioning</h3>
            <p>It is recommended to place the Notification component just below the Main Navigation component to ensure that it is read in the correct order by screen readers. This component will also dynamically re-position itself below any Breadcrumb components should they exist on a page. </p>

            <h3>Options</h3>
            <p>The following options are available for this component</p>

            <ul className="styled-list">
                <li><b>Information</b> - This is the general purpose Notification component and should used for relaying information of a general nature, for example relaying information on an upcoming event or information regarding another area of the website.</li>
                <li><b>Success</b> - The success level of the Notification component is recommended for use when positive information needs to be relayed, for example, a new feature is now available or if a recent upgrade has been made that will improve the user experience.</li>
                <li><b>Warning</b> - This level of the Notification component should only be used for relaying semi-critical information for example, soon to be expected downtime or a currently disabled feature.</li>
                <li><b>Error</b> - This level of the Notification component is reserved only for critcal information and should be used sparingly.</li>
            </ul>

            <h3>Information</h3>
            <div className="container-fluid notification information">
                <i className="las la-info-circle"></i>
                <div className="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Cum sociis natoque penatibus et magnis dis parturient.</p>
                </div>
                <button className="button outline-light cta sm">Read More</button>
            </div>
            <pre>
                <code className="language-javascript">
                    {code1}
                </code>
            </pre>

            <h3>Success</h3>
            <div className="container-fluid notification success">
                <i className="las la-check-circle"></i>
                <div className="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Cum sociis natoque penatibus et magnis dis parturient.</p>
                </div>
                <button className="button outline-light cta sm">Read More</button>
            </div>
            <pre>
                <code className="language-javascript">
                    {code2}
                </code>
            </pre>

            <h3>Warning</h3>
            <div className="container-fluid notification warning">
                <i className="las la-exclamation-circle"></i>
                <div className="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Cum sociis natoque penatibus et magnis dis parturient.</p>
                </div>
                <button className="button outline-light cta sm">Read More</button>
            </div>
            <pre>
                <code className="language-javascript">
                    {code3}
                </code>
            </pre>

            <h3>Error</h3>
            <div className="container-fluid notification error">
                <i className="las la-times-circle"></i>
                <div className="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Cum sociis natoque penatibus et magnis dis parturient.</p>
                </div>
                <button className="button outline-light cta sm">Read More</button>
            </div>
            <pre>
                <code className="language-javascript">
                    {code4}
                </code>
            </pre>

        </div>
    )
}

export default Notification

