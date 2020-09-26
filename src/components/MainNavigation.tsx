import React, { useEffect } from 'react';
import Prism from 'prismjs'
import '../scripts/navigation.ts'
import initMainNav from '../scripts/navigation';

function MainNavigation() {
    // React hook to get syntax highlighing as well as Main Navigation dropdown working. Similar to componentDidMount()
    useEffect(() => {
        Prism.highlightAll();
        initMainNav();
    });

    const code1 =
    `<div className="container-fluid navigation">
    <div className="nav__logo">
        <img src="" alt="logo"></img> // Populate image here
    </div>

    <input type="checkbox" id="nav" className="hamburger-nav-toggle-checkbox" />
    <label htmlFor="nav" className="hamburger-toggle-icon"><i></i><i></i><i></i></label>

    <ul className="nav__links">
        <li className="nav__link"><a href="###"><h4>Link 1</h4></a></li>
        <li className="nav__link"><a href="###"><h4>Link 2</h4></a></li>
        <li className="nav__link"><a href="###"><h4>Link 3</h4></a></li>
        <li className="nav__link"><a href="###"><h4>Link 4</h4></a></li>
    </ul>
</div>`;

    const code2 =
        `<div className="container-fluid navigation">
    <div className="nav__logo">
        <img src="" alt="logo"></img> // Populate image here
    </div>

    <input type="checkbox" id="nav" className="hamburger-nav-toggle-checkbox" />
    <label htmlFor="nav" className="hamburger-toggle-icon"><i></i><i></i><i></i></label>

    <ul className="nav__links">
        <li className="nav__link"><a href="###"><h4>Link 1</h4></a></li>
        <li className="nav__link"><a href="###"><h4>Link 2</h4></a></li>
        <li className="nav__drop-down-link"><button className="nav__drop-down-link__toggle"><h4>Link 3(Dropdown)</h4></button>
            <ul className="nav__drop-down-list">
                <li className="nav__sub-link">
                    <a href="###"><h4>Dropdown link 1</h4></a>
                </li>
                <li className="nav__sub-link">
                    <a href="###"><h4>Dropdown link 2</h4></a>
                </li>
                <li className="nav__sub-link">
                    <a href="###"><h4>Dropdown link 3</h4></a>
                </li>
                <li className="nav__sub-link">
                    <a href="###"><h4>Dropdown link 4</h4></a>
                </li>
            </ul>
        </li>
        <li className="nav__link"><a href="###"><h4>Link 4</h4></a></li>
        <li className="nav__link"><a href="###"><h4>Link 5 Us</h4></a></li>
    </ul>
</div>`;

    return (
        <div>
            <h1>Main Navigation</h1>
            <p>The primary means of navigation around your website. It should accommodate the top level links to the most important aspects of your website.</p>

            <h2>When to use this component</h2>
            <p>This component should be used as the main source of inital navigation on your webpages. It should be placed at the begining of your document to ensure that screen readers read through its navigation links first. It should allow for a user to navigate to each major page within your site. To avoid overcrowding it should not be used to contain every possible sub-page or link on your site.</p>

            <h2>When not to use this component</h2>
            <p>Please only use one Main Navigation component on your website. It should serve as a permanant landmark on your site of your users to refer back to. Having more than one of these components will lead to confusion.</p>

            <h2>Snippet</h2>
            <div className="navigation-demo">
                <div className="container-fluid navigation">
                    <div className="nav__logo">
                    </div>

                    <input type="checkbox" id="nav" className="hamburger-nav-toggle-checkbox" />
                    <label htmlFor="nav" className="hamburger-toggle-icon"><i></i><i></i><i></i></label>

                    <ul className="nav__links">
                        <li className="nav__link"><a href="###"><h4>Link 1</h4></a></li>
                        <li className="nav__link"><a href="###"><h4>Link 2</h4></a></li>
                        <li className="nav__link"><a href="###"><h4>Link 3</h4></a></li>
                        <li className="nav__link"><a href="###"><h4>Link 4</h4></a></li>
                    </ul>
                </div>
            </div>

            <pre>
                <code className="language-javascript">
                    {code1}
                </code>
            </pre>

            <h3>Options</h3>
            <p>The following options can be applied to the Main Navigation component.</p>

            <ul className="styled-list">
                <li><b>Dropdown list</b> - Nesting an un-ordered list within a list item will produce a dropdown list when clicking.</li>
            </ul>

            <h3>Dropdown list</h3>
            <div className="container-fluid navigation">
                <div className="nav__logo">
                </div>

                <input type="checkbox" id="nav" className="hamburger-nav-toggle-checkbox" />
                <label htmlFor="nav" className="hamburger-toggle-icon"><i></i><i></i><i></i></label>

                <ul className="nav__links">
                    <li className="nav__link"><a href="###"><h4>Link 1</h4></a></li>
                    <li className="nav__link"><a href="###"><h4>Link 2</h4></a></li>
                    <li className="nav__drop-down-link"><button className="nav__drop-down-link__toggle"><h4>Link 3 (Dropdown)</h4></button>
                        <ul className="nav__drop-down-list">
                            <li className="nav__sub-link">
                                <a href="###"><h4>Dropdown link 1</h4></a>
                            </li>
                            <li className="nav__sub-link">
                                <a href="###"><h4>Dropdown link 2</h4></a>
                            </li>
                            <li className="nav__sub-link">
                                <a href="###"><h4>Dropdown link 3</h4></a>
                            </li>
                            <li className="nav__sub-link">
                                <a href="###"><h4>Dropdown link 4</h4></a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav__link"><a href="###"><h4>Link 4</h4></a></li>
                    <li className="nav__link"><a href="###"><h4>Link 5</h4></a></li>
                </ul>
            </div>

            <pre>
                <code className="language-javascript">
                    {code2}
                </code>
            </pre>

            <h3>Scripts</h3>
            <p>In order to use the dropdown option, please ensure that navigation.ts is included in your build.</p>
        </div>
        )
    }

export default MainNavigation