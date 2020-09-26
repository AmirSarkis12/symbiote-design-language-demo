import React from 'react';
import { Route, NavLink, useRouteMatch, Switch} from "react-router-dom";

// Import main stylesheet as well as overridding styles just for demo purposes
import '../styles/main.scss';
import '../demo/demo.scss';

import Color from './Color';
import Typography from './Typography';
import Grid from './Grid';
import Spacing from './Spacing';
import MainNavigation from './MainNavigation';
import Breadcrumbs from './Breadcrumbs';
import Footer from './Footer';
import Buttons from './Buttons';
import Toggle from './Toggle';
import Checkbox from './Checkbox';
import Inputs from './Inputs';
import Radio from './Radio';
import Select from './Select';
import DatePicker from './DatePicker';
import Slider from './Slider';
import Hero from './Hero';
import Table from './Table';
import List from './List';
import Accordion from './Accordion';
import Cards from './Cards';
import Icons from './Icons';
import ProgressBar from './ProgressBar';
import Tooltip from './Tooltip';
import Pagination from './Pagination';
import Label from './Label';
import SideNavigation from './SideNavigation';
import Notifications from './Notifications';
import PageAlerts from './PageAlerts';
import Carousel from './Carousel';
import Modal from './Modal';
import ComponentsContent from './ComponentsContent';

export default function Components() {
    let { url } = useRouteMatch();
    return (
            <div className="ComponentsIndex">
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
                                            <NavLink activeClassName='active' to={`${url}/color`}>Color</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link no-border">
                                            <NavLink activeClassName='active' to={`${url}/typography`}>Typography</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to={`${url}/icons`}>Icons</NavLink>
                                        </li>

                                        <li className="side-navigation-content-heading">
                                            <p>Layout</p>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to={`${url}/grid`}>Grid</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link no-border">
                                            <NavLink activeClassName='active' to={`${url}/spacing`}>Spacing</NavLink>
                                        </li>

                                        <li className="side-navigation-content-heading">
                                            <p>Navigation</p>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to={`${url}/main-navigation`}>Main navigation</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to={`${url}/side-navigation`}>Side navigation</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to={`${url}/breadcrumbs`}>Breadcrumbs</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link no-border">
                                            <NavLink activeClassName='active' to={`${url}/footer`}>Footer</NavLink>
                                        </li>

                                        <li className="side-navigation-content-heading">
                                            <p>Interactions</p>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to={`${url}/buttons`}>Buttons</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to={`${url}/toggle`}>Toggle</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to={`${url}/checkbox`}>Checkbox</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to={`${url}/inputs`}>Inputs</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to={`${url}/radio`}>Radio</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to={`${url}/select`}>Select</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to={`${url}/date-picker`}>Date picker</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link no-border">
                                            <NavLink activeClassName='active' to={`${url}/slider`}>Slider (TBD)</NavLink>
                                        </li>

                                        <li className="side-navigation-content-heading">
                                            <p>Alerts</p>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to={`${url}/notifications`}>Notifications</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to={`${url}/page-alerts`}>Page alerts (TBD)</NavLink>
                                        </li>

                                        <li className="side-navigation-content-heading">
                                            <p>Content</p>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to={`${url}/hero`}>Hero</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to={`${url}/table`}>Table</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to={`${url}/list`}>List</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to={`${url}/accordion`}>Accordion</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to={`${url}/cards`}>Cards</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to={`${url}/tooltip`}>Tooltip</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to={`${url}/label`}>Label</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to={`${url}/carousel`}>Carousel</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link no-border">
                                            <NavLink activeClassName='active' to={`${url}/modal`}>Modal</NavLink>
                                        </li>

                                        <li className="side-navigation-content-heading">
                                            <p>Page elements</p>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to={`${url}/progress-bar`}>Progress bar</NavLink>
                                        </li>
                                        <li className="side-navigation-content-link">
                                            <NavLink activeClassName='active' to={`${url}/pagination`}>Pagination</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-9">
                            <Switch>
                                <Route exact path="/components" component={ComponentsContent} />
                                <Route exact path="/components/color" component={Color} />
                                <Route exact path="/components/typography" component={Typography} />
                                <Route exact path="/components/grid" component={Grid} />
                                <Route exact path="/components/spacing" component={Spacing} />
                                <Route exact path="/components/main-navigation" component={MainNavigation} />
                                <Route exact path="/components/side-navigation" component={SideNavigation} />
                                <Route exact path="/components/breadcrumbs" component={Breadcrumbs} />
                                <Route exact path="/components/footer" component={Footer} />
                                <Route exact path="/components/buttons" component={Buttons} />
                                <Route exact path="/components/toggle" component={Toggle} />
                                <Route exact path="/components/checkbox" component={Checkbox} />
                                <Route exact path="/components/inputs" component={Inputs} />
                                <Route exact path="/components/radio" component={Radio} />
                                <Route exact path="/components/select" component={Select} />
                                <Route exact path="/components/date-picker" component={DatePicker} />
                                <Route exact path="/components/slider" component={Slider} />
                                <Route exact path="/components/hero" component={Hero} />
                                <Route exact path="/components/table" component={Table} />
                                <Route exact path="/components/list" component={List} />
                                <Route exact path="/components/accordion" component={Accordion} />
                                <Route exact path="/components/cards" component={Cards} />
                                <Route exact path="/components/pagination" component={Pagination} />
                                <Route exact path="/components/tooltip" component={Tooltip} />
                                <Route exact path="/components/Label" component={Label} />
                                <Route exact path="/components/progress-bar" component={ProgressBar} />
                                <Route exact path="/components/icons" component={Icons} />
                                <Route exact path="/components/notifications" component={Notifications} />
                                <Route exact path="/components/page-alerts" component={PageAlerts} />
                                <Route exact path="/components/carousel" component={Carousel} />
                                <Route exact path="/components/modal" component={Modal} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>

    );

}

