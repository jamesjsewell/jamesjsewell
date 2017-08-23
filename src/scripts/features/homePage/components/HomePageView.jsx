import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as duck from "../duck.js"
import HomePageLayout from "./HomePageLayout.jsx"

@connect(
    state => duck.selector(state),
    dispatch => ({
        actions: bindActionCreators(duck, dispatch)
    })
)
class HomePageView extends Component {


    render() {
       

        return (
            <HomePageLayout
                {...this.props}
            />
        )
    }
}
export default HomePageView