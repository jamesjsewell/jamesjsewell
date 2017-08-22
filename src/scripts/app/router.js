import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import createHistory from "history/createBrowserHistory";

import {
    Menu,
    Segment,
    Grid,
    Sidebar,
    Header,
    Button,
    Dimmer,
    Loader,
    Container,
    Icon,
    Divider
} from "semantic-ui-react";

import Navbar from "../features/navbar/components/NavbarView.jsx";

class Blank extends Component {
    render() {
        return <div />;
    }
}

class RouterConfig extends Component {
    handleHideSidebar() {
        //this.props.hideSidebar()
    }

    render() {
        return (
            <Router>

                <Container as={Segment} secondary stretched>

                    <Dimmer active={this.props.loadingData} page>

                        <Grid columns="equal" padded>

                            <Grid.Row>

                                <Grid.Column>
                                    <Loader size="big">Loading</Loader>
                                </Grid.Column>

                            </Grid.Row>

                            <Divider hidden />

                            <Grid.Row>

                                <Grid.Column>
                                    <Button
                                        onClick={() => {
                                            //this.props.dataIsLoading(false)
                                        }}
                                    >
                                        finish testing
                                    </Button>
                                </Grid.Column>

                            </Grid.Row>

                        </Grid>

                    </Dimmer>

                    <Navbar />
                  

                    <Switch>

                        <Route exact path="/" component={Blank} />
                        <Route path="*" component={Blank} />

                    </Switch>

                </Container>

            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {
        
    };
}

export default withRouter(connect(mapStateToProps)(RouterConfig));
