import React, { useEffect } from 'react';
import Prism from 'prismjs'

function SideNavigation() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
    });

    const code1 =
        `<div className="col-xs-12 col-sm-3 side-navigation">
    <div className="side-navigation-section">
        <div className="side-navigation-content">
            <ul>
                <li className="side-navigation-content-heading">
                    <p>Section 1</p>
                </li>
                <li className="side-navigation-content-link no-border">
                    <a href="###">Link</a>
                </li>
                <li className="side-navigation-content-heading">
                    <p>Section 2</p>
                </li>
                <li className="side-navigation-content-link">
                    <a href="###">Link</a>
                </li>
                <li className="side-navigation-content-link no-border">
                    <a href="###">Link</a>
                </li>
                <li className="side-navigation-content-heading">
                    <p>Section 3</p>
                </li>
                <li className="side-navigation-content-link">
                    <a href="###">Link</a>
                </li>
                <li className="side-navigation-content-link">
                    <a href="###">Link</a>
                </li>
                <li className="side-navigation-content-link no-border">
                    <a href="###">Link</a>
                </li>
                <li className="side-navigation-content-heading">
                    <p>Section 4</p>
                </li>
                <li className="side-navigation-content-link">
                    <a href="###">Link</a>
                </li>
                <li className="side-navigation-content-link">
                    <a href="###">Link</a>
                </li>
                <li className="side-navigation-content-link">
                    <a href="###">Link</a>
                </li>
                <li className="side-navigation-content-link no-border">
                    <a href="###">Link</a>
                </li>
            </ul>
        </div>
    </div>
</div>
<div className="col-xs-12 col-sm-9">
 // Your content goes here
</div>`

    return (
        <div>
            <h1>Side Navigation</h1>
            <p>This component provides navigation for sub-pages. The links allow the user to quickly navigate to a page within the parent page while providing an indication as to which page is currently being viewed.</p>

            <h3>When to use this component</h3>
            <p>This component should only be used on pages that navigate to other pages. It should also be noted that this component should be placed within a column that is adjacent to your content column. See the below snippet for an example.</p>

            <h3>When not to use this component</h3>
            <p>For stand alone pages this component should not be used.</p>

            <h3>Snippet</h3>
            <div className="side-navigation">
                <div className="side-navigation-section">
                    <div className="side-navigation-content">
                        <ul>
                            <li className="side-navigation-content-heading">
                                <p>Section 1</p>
                            </li>
                            <li className="side-navigation-content-link no-border">
                                <a href="###">Link</a>
                            </li>
                            <li className="side-navigation-content-heading">
                                <p>Section 2</p>
                            </li>
                            <li className="side-navigation-content-link">
                                <a href="###">Link</a>
                            </li>
                            <li className="side-navigation-content-link no-border">
                                <a href="###">Link</a>
                            </li>
                            <li className="side-navigation-content-heading">
                                <p>Section 3</p>
                            </li>
                            <li className="side-navigation-content-link">
                                <a href="###">Link</a>
                            </li>
                            <li className="side-navigation-content-link">
                                <a href="###">Link</a>
                            </li>
                            <li className="side-navigation-content-link no-border">
                                <a href="###">Link</a>
                            </li>
                            <li className="side-navigation-content-heading">
                                <p>Section 4</p>
                            </li>
                            <li className="side-navigation-content-link">
                                <a href="###">Link</a>
                            </li>
                            <li className="side-navigation-content-link">
                                <a href="###">Link</a>
                            </li>
                            <li className="side-navigation-content-link">
                                <a href="###">Link</a>
                            </li>
                            <li className="side-navigation-content-link no-border">
                                <a href="###">Link</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <pre>
                <code className="language-javascript">
                    {code1}
                </code>
            </pre>

            <h3>Options</h3>
            <p>The following option can be applied to the list items within the Side Navigation component.</p>

            <ul className="styled-list">
                <li><b>Border</b> - For the last item within a section the "no-border" class should be applied. This is to ensure that when viewed on mobile devices that vertical seperators do not render.</li>
            </ul>

        </div>
        )
    }

export default SideNavigation