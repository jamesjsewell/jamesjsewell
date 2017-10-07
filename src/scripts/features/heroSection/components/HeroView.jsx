import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import * as duck from "../duck.js"
import HeroLayout from "./HeroLayout.jsx"

@connect(
    state => duck.selector(state),
    dispatch => ({
        actions: bindActionCreators(duck, dispatch)
    })
)
class HeroView extends Component {


    render() {
       

        return (
            <HeroLayout
                {...this.props}
            />
        )
    }
}
export default HeroView