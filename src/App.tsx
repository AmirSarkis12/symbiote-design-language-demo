import React from 'react';
import './styles/main.scss';

function App() {
    return (
        <div className="App">
            <header className="App-header"></header>

            {/* Checkbox, Radio and toggle */}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Checkbox */}
                        <div className="checkbox">
                            <p className="title">Custom checkbox</p>
                            <label htmlFor="customCheckbox1" className="checkbox__label">
                                <div className="checkbox__group">
                                    <input type="checkbox" className="checkbox__input" id="customCheckbox1" hidden />
                                    <span className="checkbox__checked"></span>
                                </div>
                            </label>

                            <label htmlFor="customCheckbox2" className="checkbox__label">
                                <div className="checkbox__group">
                                    <input type="checkbox" className="checkbox__input" id="customCheckbox2" hidden />
                                    <span className="checkbox__checked"></span>
                                </div>
                            </label>

                            <label htmlFor="customCheckbox3" className="checkbox__label">
                                <div className="checkbox__group">
                                    <input type="checkbox" className="checkbox__input" id="customCheckbox3" hidden />
                                    <span className="checkbox__checked"></span>
                                </div>
                            </label>
                        </div>

                        {/* Radio Buttons */}
                        <div className="radio">
                            <p className="title">Custom radio</p>
                            <label htmlFor="customRadio1" className="radio__label">
                                <div className="radio__group">
                                    <input type="radio" className="radio__input" id="customRadio1" name="customRadio" hidden />
                                    <span className="radio__checked"></span>
                                </div>
                            </label>

                            <label htmlFor="customRadio2" className="radio__label">
                                <div className="radio__group">
                                    <input type="radio" className="radio__input" id="customRadio2" name="customRadio" hidden />
                                    <span className="radio__checked"></span>
                                </div>
                            </label>

                            <label htmlFor="customRadio3" className="radio__label">
                                <div className="radio__group">
                                    <input type="radio" className="radio__input" id="customRadio3" name="customRadio" hidden />
                                    <span className="radio__checked"></span>
                                </div>
                            </label>
                        </div>

                        {/* Toggle */}
                        <div className="toggle">
                            <p className="title">Custom toggle</p>
                            <label htmlFor="customToggle" className="toggle__label">
                                    <input type="checkbox" className="toggle__input" id="customToggle" hidden />
                                    <div className="toggle__group">
                                        <span className="toggle__checked"></span>
                                    </div>
                            </label>
                        </div>
                    </div>
                </div>

                <br></br>
                <div className="row">
                    <div className="col-6">
                        {/* Accordion */}
                        <div className="accordion">
                            <div className="tab">
                                <input type="checkbox" id="chck1"></input>
                                <label className="tab-label" htmlFor="chck1">Item 1</label>
                                <div className="tab-content">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, reiciendis!</p>
                                </div>
                            </div>
                            <div className="tab">
                                <input type="checkbox" id="chck2"></input>
                                <label className="tab-label" htmlFor="chck2">Item 2</label>
                                <div className="tab-content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, in!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br></br>
                <div className="row">
                    <div className="col-12">
                        <table>
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Date of Birth</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Amir</td>
                                    <td>Sarkis</td>
                                    <td>(03) 9999 9999</td>
                                    <td><a href="mailto:x@x.com">email@emailaddress.com</a></td>
                                    <td>12/12/1991</td>
                                </tr>
                                <tr>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>(02) 8888 8888</td>
                                    <td><a href="mailto:x@x.com">j.doe@exampleserver.com</a></td>
                                    <td>15/02/1971</td>
                                </tr>
                                <tr>
                                    <td>John</td>
                                    <td>Johnson</td>
                                    <td>(04) 7777 7777</td>
                                    <td><a href="mailto:x@x.com">jj@jayjayjay.com</a></td>
                                    <td>12/10/1965</td>
                                </tr>
                                <tr>
                                    <td>Tracy</td>
                                    <td>Richardson</td>
                                    <td>(02) 8888 8888</td>
                                    <td><a href="mailto:x@x.com">trichard@website.com</a></td>
                                    <td>03/11/1980</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <br></br>
                <div className="row">
                    <div className="col-12">
                        <button className="primary rounded">Button Primary Rounded</button>
                        <button className="secondary">Button Secondary</button>
                        <button className="tertiary">Button Tertiary</button>
                        <button className="outline-light">Button Outline Light</button>
                        <button className="outline-dark">Button Outline Dark</button>

                        <button className="primary large">Button lg</button>
                        <button className="primary">Button md</button>
                        <button className="primary small">Button sm</button>
                        <button className="primary extra-small">Button xs</button>

                        <button className="primary disabled">Button md</button>
                    </div>
                </div>

                <br></br>
                <div className="row">
                    <div className="col-6">
                        <span className="label label-info">Info</span>
                        <span className="label label-success">Success</span>
                        <span className="label label-warning">Warning</span>
                        <span className="label label-error">Error</span>
                    </div>
                </div>

                <br></br>
                <div className="row">
                    <div className="col-6">
                        <ol>
                            <li> Make Design Langauge </li>
                            <li> Create own web site:
                                <ol>
                                    <li> Find it to be super helpful </li>
                                    <li> Learn all the stuff</li>
                                    <li> Teach others </li>
                                </ol>
                            </li>
                            <li> Retire </li>
                        </ol>
                    </div>
                </div>

                <br></br>
                <div className="row">
                    <div className="col-6">
                        <ul>
                            <li> Make Design Langauge </li>
                            <li> Create own web site:
                                <ul>
                                    <li> Find it to be super helpful </li>
                                    <li> Learn all the stuff</li>
                                    <li> Teach others </li>
                                </ul>
                            </li>
                            <li> Retire </li>
                        </ul>
                    </div>
                </div>

                <br></br>
                <div className="row">
                    <div className="col-6">
                        <div className="tooltip">
                            <p>Hover over me</p>
                            <span className="tooltip-text">Here is some tooltip text</span>
                        </div>
                    </div>
                </div>

                <br></br>
                <div className="row">
                    <div className="col-6">
                        <form>
                            <input className="error" type="text" id="firstName" placeholder="First Name" required/>
                            <input type="text" id="lastName" placeholder="Last Name" required/>
                            <input type="email" id="email" placeholder="Email" required/>
                            <input type="password" id="password" placeholder="Password" required/>
                            <input type="password" id="confirmPassword" placeholder="Confirm Password" required/>
                        </form>
                    </div>
                </div>

                <br></br>
                <div className="row">
                    <div className="col-6">
                        <i className="las la-battery-three-quarters"></i>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
