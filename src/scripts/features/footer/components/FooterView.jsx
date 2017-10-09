import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as duck from "../duck.js";
import FooterLayout from "./FooterLayout.jsx";

@connect(
    state => duck.selector(state),
    dispatch => ({
        actions: bindActionCreators(duck, dispatch)
    })
)
class FooterView extends Component {
    render() {
        return <FooterLayout {...this.props} />;
    }
}
export default FooterView;
