import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import _ from "underscore";
import {
    Container,
    Row,
    Col,
    Visible,
    Hidden,
    ScreenClassRender,
    ClearFix
} from "react-grid-system";

const styleFunction = (screenClass, props) => {
    let fontSize = 0;
    if (screenClass === "xs") fontSize = 0.25;
    if (screenClass === "sm") fontSize = 0.50;
    if (screenClass === "md") fontSize = 0.75;
    if (screenClass === "lg") fontSize = 1.0;
    if (screenClass === "xl") fontSize = 2.0;

    var updatedStyle = props && props.style ? props.style : {};
    updatedStyle["fontSize"] = `${fontSize}rem`;
    return updatedStyle;
};

export default class FooterLayout extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {}

    componentDidUpdate(prevProps, prevState) {}

    componentDidMount() {}

    render() {
        return (
            <Container>

                <Row>

                    <Col xl={12} lg={12} md={12} sm={12} xs={12}>

                        <div className="footer_wrapper">

                            <h4>2017 - created by James Sewell</h4>
                        </div>

                    </Col>

                </Row>

            </Container>
        );
    }
}
