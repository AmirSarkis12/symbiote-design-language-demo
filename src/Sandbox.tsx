import React from 'react';

import './styles/main.scss';

import './scripts/navigation.ts'
import './scripts/side-navigation.ts'
import './scripts/notification.ts'
import './scripts/modal.ts'
import './scripts/carousel.ts'
import './scripts/datepicker.ts'

import logo from './assets/images/logo.png';

// All images are royalty free and sourced from Unsplash - https://unsplash.com/
import cardImage1 from './assets/images/card-image-mountains.jpeg';
import cardImage2 from './assets/images/card-image-trees.jpeg';
import cardImage3 from './assets/images/card-image-lavender.jpeg';
import cardImage4 from './assets/images/card-image-dessert.jpeg';
import modalImage1 from './assets/images/modal-image-road.jpeg';
import modalImage2 from './assets/images/modal-image-beach.jpeg';
import modalImage3 from './assets/images/modal-image-canyon.jpeg';
import carouselImage1 from './assets/images/carousel-image-bay.jpeg';
import carouselImage2 from './assets/images/carousel-image-breakwater.jpeg';
import carouselImage3 from './assets/images/carousel-image-underwater.jpeg';
import carouselImage4 from './assets/images/carousel-image-white-water.jpeg';
import carouselImage5 from './assets/images/carousel-image-path.jpeg';
import carouselImage6 from './assets/images/carousel-image-point.jpeg';
import heroImage1 from './assets/images/hero-image-glacier.jpeg';
import heroImage2 from './assets/images/hero-image-pathway.jpeg';

function Sandbox() {
    return (
        <div className="Sandbox">
            {/* Temporary code - until tech stack is thought out more, this is best done with a react component to dynamically set content / show and hide - with local storage feature */}
            <div className="modal-cover modal-cover-1">
                <div className="modal modal-1">
                    <button className="close-modal close-modal-1"><i className="las la-times sm inverted"></i></button>

                    <div className="modal-content full-image">
                        <div className="modal-content-wrapper" style={{
                            backgroundImage: `url(${modalImage1})`
                        }}>
                            <div className="content">
                                <h3 className="inverted">Mauris tortor turpis, dignissim vel ullam.</h3>
                                <p className="inverted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                                <div className="button-container">
                                    <button className="cta inverted">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal-cover modal-cover-2">
                <div className="modal modal-2">
                    <button className="close-modal close-modal-2"><i className="las la-times sm inverted"></i></button>

                    <div className="modal-content">
                        <div className="modal-content-wrapper" style={{
                            backgroundImage: `url(${modalImage2})`
                        }}>
                            <div className="content">
                                <h3>Mauris tortor turpis, dignissim vel ullam.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                                <div className="button-container">
                                    <button className="primary">Read more</button>
                                    <button className="secondary">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal-cover modal-cover-3">
                <div className="modal modal-3">
                    <button className="close-modal close-modal-3"><i className="las la-times sm inverted"></i></button>
                    <div className="modal-content side-by-side">
                        <div className="content">
                            <h3>Mauris tortor turpis, dignissim vel ullam.</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                            <div className="button-container">
                                <button className="primary">Read more</button>
                                <button className="secondary">Read more</button>
                            </div>
                        </div>
                        <div className="image" style={{
                            backgroundImage: `url(${modalImage3})`
                        }}></div>
                    </div>

                </div>
            </div>

            <div className="modal-cover modal-cover-4">
                <div className="modal modal-4">
                    <button className="close-modal close-modal-4"><i className="las la-times sm inverted"></i></button>

                    <div className="modal-content no-image">
                        <div className="modal-content-wrapper">
                            <div className="content">
                                <h3>Mauris tortor turpis, dignissim vel ullam.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices.</p>
                                <div className="button-container">
                                    <button className="primary">Read more</button>
                                    <button className="secondary">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid navigation">
                <div className="nav__logo">
                    <img src={logo} alt="logo"></img>
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
            </div>

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

            <div className="container-fluid notification success">
                <i className="las la-exclamation-circle"></i>
                <div className="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Cum sociis natoque penatibus et magnis dis parturient. Quam temere in vitiis, legem sancimus haerentia</p>
                </div>
                <button className="button outline-light cta sm">Read More</button>
            </div>

            <div className="container">
                <div className="row">

                    <div className="col-xs-12 col-sm-3 side-navigation">
                        <div className="side-navigation-section">
                            <div className="side-navigation-content">
                                <ul>
                                    <li className="side-navigation-content-heading">
                                        <p>Section 1</p>
                                    </li>
                                    <li className="side-navigation-content-link no-border">
                                        <button>Lorum Ipsum</button>
                                    </li>
                                    <li className="side-navigation-content-heading">
                                        <p>Section 2</p>
                                    </li>
                                    <li className="side-navigation-content-link">
                                        <button>Consectetur adipiscing</button>
                                    </li>
                                    <li className="side-navigation-content-link no-border">
                                        <button>Facilisis diam</button>
                                    </li>
                                    <li className="side-navigation-content-heading">
                                        <p>Section 3</p>
                                    </li>
                                    <li className="side-navigation-content-link">
                                        <button>Aenean tincidunt</button>
                                    </li>
                                    <li className="side-navigation-content-link">
                                        <button>Sagittis mapelle</button>
                                    </li>
                                    <li className="side-navigation-content-link no-border">
                                        <button>Adipiscing</button>
                                    </li>
                                    <li className="side-navigation-content-heading">
                                        <p>Section 4</p>
                                    </li>
                                    <li className="side-navigation-content-link">
                                        <button>Ipsum velit</button>
                                    </li>
                                    <li className="side-navigation-content-link">
                                        <button>Curabitur in facilisis</button>
                                    </li>
                                    <li className="side-navigation-content-link">
                                        <button>Erat at nulla</button>
                                    </li>
                                    <li className="side-navigation-content-link no-border">
                                        <button>Diam velit</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-9">
                        <div className="col-12">
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

                        <div className="col-12">
                            {/* Accordion */}
                            <div className="accordion">
                                <div className="tab">
                                    <input type="checkbox" id="accordion-1"></input>
                                    <label className="tab-label" htmlFor="accordion-1">First accordion tab</label>
                                    <div className="tab-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                                    </div>
                                </div>
                                <div className="tab">
                                    <input type="checkbox" id="accordion-2"></input>
                                    <label className="tab-label" htmlFor="accordion-2">Second accordion tab</label>
                                    <div className="tab-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                                    </div>
                                </div>
                                <div className="tab">
                                    <input type="checkbox" id="accordion-3"></input>
                                    <label className="tab-label" htmlFor="accordion-3">Third accordion tab</label>
                                    <div className="tab-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

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

                        <div className="col-12">
                            <button className="primary">Primary Button</button>
                            <button className="secondary">Secondary Button</button>
                            <button className="tertiary">Tertiary Button</button>
                            <button className="outline-light">Outline Light Button</button>
                            <button className="outline-dark sm">Outline Dark Button</button>
                            <button className="primary lg">Button lg</button>
                            <button className="primary">Button md</button>
                            <button className="primary sm">Button sm</button>
                            <button className="primary xs">Button xs</button>
                            <button className="disabled" tabIndex={-1}>Button md</button>
                        </div>

                        <div className="col-12">
                            <span className="label label-success">Success</span>
                            <span className="label label-warning">Warning</span>
                            <span className="label label-error">Error</span>
                            <span className="label label-new">New</span>
                            <span className="label label-info">Info</span>
                        </div>

                        <div className="col-6">
                            <ol className="styled-list">
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

                        <div className="col-6">
                            <ul className="styled-list">
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

                        <div className="col-12">
                            <div className="tooltip">
                                <p>Hover over me</p>
                                <span className="tooltip-text">Hey, I'm a tooltip!</span>
                            </div>
                        </div>

                        <div className="col-12">
                            <form>
                                <label htmlFor="firstName">First Name</label>
                                <input className="error" type="text" id="firstName" required />

                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id="lastName" required />

                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" required />

                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" required />

                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type="password" id="confirmPassword" required />

                                <label htmlFor="selectField">Confirm Password</label>
                                <select name="selectField">
                                    <option value="">Color!</option>
                                    <option value="">Lorem Ipsum dolar set amet consequler von mapelle</option>
                                </select>
                            </form>
                        </div>

                        <div className="col-12">
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
                                        <span className="count current"></span>
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
                                        <div className="button-container">
                                            <button className="cta inverted">Read more</button>
                                        </div>
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
                                        <div className="button-container">
                                            <button className="cta">Read more</button>
                                        </div>
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
                                        <div className="button-container">
                                            <button className="cta inverted">Read more</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <br></br>

                        <div className="col-xs-12 col-sm-8">
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

                        <div className="col-xs-12 col-sm-4">
                            <div className="card no-image">
                                <div className="card-wrapper">
                                    <div className="content">
                                        <p>Topic</p>
                                        <h3>Mauris tortor turpis, dignissim vel ullam.</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                                        <div className="button-container">
                                            <button className="cta">Read more</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <button className="primary modal-trigger-1">Trigger full image modal</button>
                            <button className="primary modal-trigger-2">Trigger regular modal</button>
                            <button className="primary modal-trigger-3">Trigger side by side modal</button>
                            <button className="primary modal-trigger-4">Trigger text only modal</button>
                        </div>

                        <div className="col-12">
                            <div className="carousel">
                                <ul>
                                    <li className="carousel-slide"><img className="carousel-slide-background" alt="Carousel slide 1 - alt text" src={carouselImage1} /></li>
                                    <li className="carousel-slide"><img className="carousel-slide-background" alt="Carousel slide 2 - alt text" src={carouselImage2} /></li>
                                    <li className="carousel-slide"><img className="carousel-slide-background" alt="Carousel slide 3 - alt text" src={carouselImage3} /></li>
                                    <li className="carousel-slide"><img className="carousel-slide-background" alt="Carousel slide 4 - alt text" src={carouselImage4} /></li>
                                    <li className="carousel-slide"><img className="carousel-slide-background" alt="Carousel slide 5 - alt text" src={carouselImage5} /></li>
                                    <li className="carousel-slide"><img className="carousel-slide-background" alt="Carousel slide 6 - alt text" src={carouselImage6} /></li>
                                </ul>
                                <div className="controls">
                                    <button className="previous-slide">
                                        <i className="las la-arrow-circle-left sm inverted"></i>
                                        <span className="sr-only">Previous slide</span>
                                    </button>
                                    <button className="play-pause">
                                        <i className="las la-pause-circle sm inverted"></i>
                                        <span className="sr-only">Pause</span>
                                    </button>
                                    <button className="next-slide">
                                        <i className="las la-arrow-circle-right sm inverted"></i>
                                        <span className="sr-only">Next slide</span>
                                    </button>
                                </div>
                                <div className="carousel-dots-container">
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <form>
                                <label htmlFor="date">Date</label>
                                <input type="text" className="date-picker" id="date"></input>
                            </form>
                        </div>
                        <div className="col-6">
                            <form>
                                <div className="date-range-picker">
                                    <label htmlFor="date">Date range</label>
                                    <input className="from-date" type="text" name="start"></input>
                                    <span>to</span>
                                    <input className="to-date" type="text" name="end"></input>
                                </div>
                            </form>
                        </div>

                        <div className="col-12">
                            <div className="hero">
                                <img className="hero-background" alt="Hero alt text" src={heroImage1} />
                                <div className="col-xs-10 col-sm-8 col-lg-4 content right">
                                    <h3>Mauris tortor turpis, dignissim vel ullam.</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                                    <button className="cta">Read more</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="hero">
                    <img className="hero-background" alt="Hero alt text" src={heroImage2} />
                    <div className="container hero-fluid right">
                        <div className="col-xs-12 col-sm-8 col-lg-4">
                            <div className="content">
                                <h3>Mauris tortor turpis, dignissim vel ullam.</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in facilisis diam. Aenean tincidunt erat at nulla sagittis ultrices. Suspendisse id molestie velit.</p>
                                <button className="cta">Read more</button>
                            </div>
                        </div>
                    </div>


                </div>


            </div>

            <div className="container-fluid footer-container">
                <footer>
                    <div className="container">
                        <div className="col-xs-6 col-md-3">
                            <p>Company</p>
                            <ul>
                                <li><a href="a">About</a></li>
                                <li><a href="a">Mission</a></li>
                                <li><a href="a">Services</a></li>
                                <li><a href="a">Social</a></li>
                                <li><a href="a">Get in touch</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <p>Products</p>
                            <ul>
                                <li><a href="a">About</a></li>
                                <li><a href="a">Mission</a></li>
                                <li><a href="a">Services</a></li>
                                <li><a href="a">Social</a></li>
                                <li><a href="a">Get in touch</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <p>Accounts</p>
                            <ul>
                                <li><a href="a">About</a></li>
                                <li><a href="a">Mission</a></li>
                                <li><a href="a">Services</a></li>
                                <li><a href="a">Social</a></li>
                                <li><a href="a">Get in touch</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <p>Social</p>
                            <div className="social-link">
                                <a href="a" target="_blank"><i className="lab la-facebook inverted"></i><p>Facebook</p></a>
                            </div>
                            <div className="social-link">
                                <a href="a" target="_blank"><i className="lab la-twitter inverted"></i><p>Twitter</p></a>
                            </div>
                            <div className="social-link">
                                <a href="a" target="_blank"><i className="lab la-instagram inverted"></i><p>Instagram</p></a>
                            </div>
                            <div className="social-link">
                                <a href="a" target="_blank"><i className="lab la-linkedin-in inverted"></i><p>LinkedIn</p></a>
                            </div>
                        </div>
                    </div>

                </footer>
                <div className="copyright">
                    <p>Copyright &#169; <a href="www.symbiote.com.au" target="_blank">Symbiote</a> Pty Ltd {new Date().getFullYear().toString()}</p>
                </div>
            </div>
        </div>
    );
}

export default Sandbox;
