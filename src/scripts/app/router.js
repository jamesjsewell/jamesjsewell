import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import createHistory from "history/createBrowserHistory";

import Navbar from "../features/navbar/components/NavbarView.jsx";
import HomePageView from "../features/HomePage/components/HomePageView.jsx"
import HeroView from "../features/heroSection/components/HeroView.jsx"

class Blank extends Component {
    render() {
        return <div />;
    }
}

class RouterConfig extends Component {
    render() {
        return (
            <Router>

                <div>
                   
                    <Navbar />
                    <HeroView />
                    
                    <Switch>

                        <Route exact path="/" component={HomePageView} />
                        <Route path="*" component={HomePageView} />

                    </Switch>

                </div>

            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default withRouter(connect(mapStateToProps)(RouterConfig));
