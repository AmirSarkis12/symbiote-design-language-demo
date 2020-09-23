import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink} from "react-router-dom";
import logo from './assets/images/logo.png';

import Color from './components/color'
import Home from './components/home'


import './styles/main.scss';
import './demo/demo.scss';

export default function App() {
    return (
        <Router>
        <div className="App">
            <div className="container-fluid navigation">
                <div className="nav__logo">
                        <Link to='/'><img src={logo} alt="logo"></img></Link>
                </div>
            </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-3 side-navigation">
                            <div className="side-navigation-section">
                                <div className="side-navigation-content">
                                    <ul>
                                        <li className="side-navigation-content-heading">
                                            <p>Foundations</p>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to='/color'>Color</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link no-border">
                                            <NavLink activeClassName='active' to='/typography'>Typography</NavLink>
                                        </li>

                                        <li className="side-navigation-content-heading">
                                            <p>Layout</p>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to='/grid'>Grid</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link no-border">
                                            <NavLink activeClassName='active' to='/spacing'>Spacing</NavLink>
                                        </li>

                                        <li className="side-navigation-content-heading">
                                            <p>Navigation</p>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to='/main-navigation'>Main navigation</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to='/side-navigation'>Side navigation</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to='/breadcrumbs'>Breadcrumbs</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link no-border">
                                            <NavLink activeClassName='active' to='/footer'>Footer</NavLink>
                                        </li>

                                        <li className="side-navigation-content-heading">
                                            <p>Interactions</p>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to='/buttons'>Buttons</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to='/toggle'>Toggle</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to='/checkbox'>Checkbox</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to='/inputs'>Inputs</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to='/radio'>Radio</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to='/select'>Select</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to='/date-picker'>Date picker</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link no-border">
                                            <NavLink activeClassName='active' to='/slider'>Slider</NavLink>
                                        </li>

                                        <li className="side-navigation-content-heading">
                                            <p>Content</p>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to='/hero'>Hero</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to='/table'>Table</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to='/list'>List</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to='/accordion'>Accordion</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to='/cards'>Cards</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to='/pagination'>Pagination</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to='/tooltip'>Tooltip</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to='/label'>Label</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to='/progress-bar'>Progress bar</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to='/icons'>Icons</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to='/notifications'>Notifications</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to='/page-alerts'>Page alerts</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to='/carousel'>Carousel</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link no-border">
                                            <NavLink activeClassName='active' to='/modal'>Modal</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-9">
                            <Switch>
                                <Route exact={true} path="/">
                                    <Home />
                                </Route>
                                <Route path="/color">
                                    <Color />
                                </Route>
                            </Switch>

                        </div>
                    </div>
                </div>

        </div>
        </Router>
    );
}
