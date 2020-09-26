import React, { useEffect } from 'react';
import Prism from 'prismjs'

function Breadcrumbs() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
    });

    const code1 =
        `<div className="container-fluid breadcrumbs">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <span className="">
                    <a href="a" className="breadcrumb">
                        <i className="las la-home xxs"></i>Home
                    </a>
                    <span className="breadcrumb__spacer"><i className="las la-angle-right xxs"></i></span>
                    <a href="a" className="breadcrumb">Sub-page</a>
                    <span className="breadcrumb__spacer"><i className="las la-angle-right xxs"></i></span>
                    <a href="a" className="breadcrumb">Rabbit hole</a>
                    <span className="breadcrumb__spacer"><i className="las la-angle-right xxs"></i></span>
                    <span className="breadcrumb">Lost?</span>
                </span>
            </div>
        </div>
    </div>
</div>`;

    return (
        <div>
            <h1>Breadcrumbs</h1>
            <p>The Breadcrumbs component displays the path to the current page relative to the starting point. It allows the user to easily see where they came from and offers them a link back.</p>

            <h3>When to use this component</h3>
            <p>This component should only be used on pages other than the homepage such as on sub links from the homepage for example, clicking a Main Navigation component link from the homepage should take you to a page with a Breadcrumb component.</p>

            <h3>When not to use this component</h3>
            <p>Do not use this component on the homepage as it will serve no purpose as no link path will be available.</p>

            <h3>Snippet</h3>
            <div className="container-fluid breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <span className="">
                                <a href="a" className="breadcrumb">
                                    <i className="las la-home xxs"></i>Home
                                </a>
                                <span className="breadcrumb__spacer"><i className="las la-angle-right xxs"></i></span>
                                <a href="a" className="breadcrumb">Sub-page</a>
                                <span className="breadcrumb__spacer"><i className="las la-angle-right xxs"></i></span>
                                <a href="a" className="breadcrumb">Rabbit hole</a>
                                <span className="breadcrumb__spacer"><i className="las la-angle-right xxs"></i></span>
                                <span className="breadcrumb">Lost?</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <pre>
                <code className="language-javascript">
                    {code1}
                </code>
            </pre>
        </div>
    )
}

export default Breadcrumbs

