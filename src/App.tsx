import React from 'react';
import './styles/main.scss';
import cardImage1 from './assets/images/card-background-mountains.jpeg';
import cardImage2 from './assets/images/card-background-trees.jpeg';
import cardImage3 from './assets/images/card-background-lavender.jpeg';
import cardImage4 from './assets/images/card-background-dessert.jpeg';
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
                            <label htmlFor="customCheckbox1" className="checkbox-label">
                                <div className="checkbox-group">
                                    <input type="checkbox" className="checkbox-input" id="customCheckbox1" hidden />
                                    <span className="checkbox-checked"></span>
                                </div>
                            </label>

                            <label htmlFor="customCheckbox2" className="checkbox-label">
                                <div className="checkbox-group">
                                    <input type="checkbox" className="checkbox-input" id="customCheckbox2" hidden />
                                    <span className="checkbox-checked"></span>
                                </div>
                            </label>

                            <label htmlFor="customCheckbox3" className="checkbox-label">
                                <div className="checkbox-group">
                                    <input type="checkbox" className="checkbox-input" id="customCheckbox3" hidden />
                                    <span className="checkbox-checked"></span>
                                </div>
                            </label>
                        </div>

                        {/* Radio Buttons */}
                        <div className="radio">
                            <p className="title">Custom radio</p>
                            <label htmlFor="customRadio1" className="radio-label">
                                <div className="radio-group">
                                    <input type="radio" className="radio-input" id="customRadio1" name="customRadio" hidden />
                                    <span className="radio-checked"></span>
                                </div>
                            </label>

                            <label htmlFor="customRadio2" className="radio-label">
                                <div className="radio-group">
                                    <input type="radio" className="radio-input" id="customRadio2" name="customRadio" hidden />
                                    <span className="radio-checked"></span>
                                </div>
                            </label>

                            <label htmlFor="customRadio3" className="radio-label">
                                <div className="radio-group">
                                    <input type="radio" className="radio-input" id="customRadio3" name="customRadio" hidden />
                                    <span className="radio-checked"></span>
                                </div>
                            </label>
                        </div>

                        {/* Toggle */}
                        <div className="toggle">
                            <p className="title">Custom toggle</p>
                            <label htmlFor="customToggle" className="toggle-label">
                                    <input type="checkbox" className="toggle-input" id="customToggle" hidden />
                                    <div className="toggle-group">
                                        <span className="toggle-checked"></span>
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
                    <div className="col-2">
                        <button className="primary">Primary Button</button>
                    </div>
                    <div className="col-2">
                        <button className="secondary">Secondary Button</button>
                    </div>
                    <div className="col-2">
                        <button className="tertiary">Tertiary Button</button>
                    </div>
                    <div className="col-2">
                        <button className="outline-light">Outline Light Button</button>
                    </div>
                    <div className="col-2">
                        <button className="outline-dark">Outline Dark Button</button>
                    </div>
                    <div className="col-2">
                        <button className="primary lg">Button lg</button>
                    </div>
                    <div className="col-2">
                        <button className="primary">Button md</button>
                    </div>
                    <div className="col-2">
                        <button className="primary sm">Button sm</button>
                    </div>
                    <div className="col-2">
                        <button className="primary xs">Button xs</button>
                    </div>
                    <div className="col-2">
                        <button className="disabled">Button md</button>
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
                            <label htmlFor="firstName">First Name</label>
                            <input className="error" type="text" id="firstName" required/>

                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" id="lastName" required/>

                            <label htmlFor="email">Email</label>
                            <input type="email" id="email"required/>

                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" required/>

                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" id="confirmPassword"  required/>
                        </form>
                    </div>
                </div>

                <br></br>
                <div className="row">
                    <div className="col-6">
                        <ul className="pagination" role="menubar" aria-label="Pages">
                            <li className="previous">
                                <button>
                                    <i className="las la-arrow-circle-left"></i>
                                    <span className="sr-only">Previous page</span>
                                </button>
                            </li>
                            <li><button>1</button></li>
                            <li><button>2</button></li>
                            <li><button>3</button></li>
                            <li className="current">
                                <button>4</button>
                            </li>
                            <li><button>5</button></li>
                            <li><button>6</button></li>
                            <li><button>7</button></li>
                            <li><button>8</button></li>
                            <li><button>9</button></li>
                            <li><button>10</button></li>
                            <li className="next">
                                <button>
                                    <i className="las la-arrow-circle-right"></i>
                                    <span className="sr-only">Next page</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="notification success">
                    <i className="las la-exclamation-circle"></i>
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Cum sociis natoque penatibus et magnis dis parturient. Quam temere in vitiis, legem sancimus haerentia</p>
                    </div>
                    <button className="button outline-light cta sm">Stay Logged In</button>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="progress-bar">
                            <ol className="progress-steps">
                                <li className="progress-step">
                                    <span className="count highlight-index"></span>
                                    <span className="description">Step one</span>
                                </li>
                                <li className="progress-step">
                                    <span className="count highlight-index"></span>
                                    <span className="description">Step two</span>
                                </li>
                                <li className="progress-step">
                                    <span className="count highlight-index"></span>
                                    <span className="description">Step three</span>
                                </li>
                                <li className="progress-step">
                                    <span className="count"></span>
                                    <span className="description">Step four</span>
                                </li>
                                <li className="progress-step">
                                    <span className="count"></span>
                                    <span className="description">Step five</span>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-8">
                        <label htmlFor="selectField">Confirm Password</label>
                        <select name="selectField">
                            <option value="">Color!</option>
                            <option value="">Lorem Ipsum dolar set amet consequler von mapelle</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-4">
                        <div className="card full-image-card">
                            <div className="card-wrapper" style={{
                                backgroundImage: `url(${cardImage1})`

                            }}>
                                {/* Optional date */}
                                <div className="date">
                                    <span className="day">18</span>
                                    <span className="month">Sep</span>
                                    <span className="year">2020</span>
                                </div>
                                <div className="content">
                                    <p className="inverted">Topic</p>
                                    <h3 className="inverted">Mauris tortor turpis, dignissim vel ullam.</h3>
                                    <p className="inverted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                                    <button className="cta inverted">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                        <div className="card">
                            <div className="card-wrapper" style={{
                                backgroundImage: `url(${cardImage2})`

                            }}>
                                <div className="content">
                                    <p>Topic</p>
                                    <h3>Mauris tortor turpis, dignissim vel ullam.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                                    <button className="cta">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                        <div className="card full-image-card">
                            <div className="card-wrapper" style={{
                                backgroundImage: `url(${cardImage3})`

                            }}>
                                {/* Optional date */}
                                <div className="date">
                                    <span className="day">22</span>
                                    <span className="month">Nov</span>
                                    <span className="year">2020</span>
                                </div>
                                <div className="content">
                                    <p className="inverted">Topic</p>
                                    <h3 className="inverted">Mauris tortor turpis, dignissim vel ullam.</h3>
                                    <p className="inverted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                                    <button className="cta inverted">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>

                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-8">
                        <div className="card wide-card">

                            <div className="content">
                                <p>Topic</p>
                                <h3>Mauris tortor turpis, dignissim vel ullam.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                                <button className="cta">Read more</button>
                            </div>
                             <div className="card-image" style={{
                                backgroundImage: `url(${cardImage4})`
                            }}></div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="card no-image">
                            <div className="card-wrapper">
                                <div className="content">
                                    <p>Topic</p>
                                    <h3>Mauris tortor turpis, dignissim vel ullam.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                                    <button className="cta">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>


            </div>
        </div>
    );
}

export default App;
