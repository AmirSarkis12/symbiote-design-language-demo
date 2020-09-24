import React, { useEffect } from 'react';
import Prism from 'prismjs'

function MainNavigation() {
    // React hook to get syntax highlighing. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
    });

    const code =
    `<div className="container-fluid navigation">
    <div className="nav__logo">
        <img src="" alt="logo"></img>
    </div>

    <input type="checkbox" id="nav" className="hamburger-nav-toggle-checkbox" />
    <label htmlFor="nav" className="hamburger-toggle-icon"><i></i><i></i><i></i></label>

    <ul className="nav__links">
        <li className="nav__link"><a href="a"><h5>About</h5></a></li>
        <li className="nav__link"><a href="a"><h5>Getting Started</h5></a></li>
        <li className="nav__drop-down-link"><button className="nav__drop-down-link__toggle"><h5>Templates</h5></button>
            <ul className="nav__drop-down-list">
                <li className="nav__sub-link">
                    <a href="a"><h5>Template 1</h5></a>
                </li>
                <li className="nav__sub-link">
                    <a href="a"><h5>Template 2</h5></a>
                </li>
                <li className="nav__sub-link">
                    <a href="a"><h5>Template 3</h5></a>
                </li>
                <li className="nav__sub-link">
                    <a href="a"><h5>Template 4</h5></a>
                </li>
            </ul>
        </li>
        <li className="nav__link"><a href="a"><h5>Support</h5></a></li>
        <li className="nav__link"><a href="a"><h5>Contact Us</h5></a></li>
    </ul>
</div>`

    return (
        <div>
        <h1>Main Navigation</h1>

        <h2>When to use this component</h2>

        <h2>When not to use this component</h2>

        <h2>Snippet</h2>
        <pre>
            <code className="language-javascript">
                {code}
            </code>
        </pre>

        <h2>Options</h2>
        </div>
        )
    }

export default MainNavigation