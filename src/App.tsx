import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import logo from './assets/images/logo.png';

import Home from './components/Home'
import Components from './components/Components'
import Philosophy from './components/Philosophy'
import GettingStarted from './components/GettingStarted'

import './styles/main.scss';


export default function App() {
    return (
        <Router>
            <div className="App">
                <div className="container-fluid navigation">
                    <div className="nav__logo">
                        <img src={logo} alt="logo"></img>
                    </div>
                        <input type="checkbox" id="nav" className="hamburger-nav-toggle-checkbox" />
                        <label htmlFor="nav" className="hamburger-toggle-icon"><i></i><i></i><i></i></label>
                        <ul className="nav__links">
                            <li className="nav__link"> <NavLink to='/'><h5>Home</h5></NavLink></li>
                            <li className="nav__link"> <NavLink to='/philosophy'><h5>Philosophy</h5></NavLink></li>
                            <li className="nav__link"> <NavLink to='/components'><h5>Components</h5></NavLink></li>
                            <li className="nav__link"> <NavLink to='/getting-started'><h5>Getting Started</h5></NavLink></li>
                        </ul>
                </div>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/philosophy">
                        <Philosophy />
                    </Route>
                        <Route path="/components" component={Components}>
                    </Route>
                    <Route path="/getting-started">
                        <GettingStarted />
                    </Route>
                </Switch>

            </div>
        </Router>

    );
}
