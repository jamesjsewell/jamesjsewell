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

const bioHeaderText = (screenClass, props) => {
	let fontSize = 0;
	if (screenClass === "xs") fontSize = 1.75;
	if (screenClass === "sm") fontSize = 2.0;
	if (screenClass === "md") fontSize = 2.5;
	if (screenClass === "lg") fontSize = 2.75;
	if (screenClass === "xl") fontSize = 3.0;

	var updatedStyle = props && props.style ? props.style : {};
	updatedStyle["fontSize"] = `${fontSize}rem`;
	return updatedStyle;
};

const bodyTextStyle = (screenClass, props) => {
	let fontSize = 0;
	if (screenClass === "xs") fontSize = 1.0;
	if (screenClass === "sm") fontSize = 1.25;
	if (screenClass === "md") fontSize = 1.50;
	if (screenClass === "lg") fontSize = 1.75;
	if (screenClass === "xl") fontSize = 2.0;

	var updatedStyle = props && props.style ? props.style : {};
	updatedStyle["fontSize"] = `${fontSize}rem`;
	return updatedStyle;
};

export default class Bio extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillReceiveProps(nextProps) {}

	componentDidUpdate(prevProps, prevState) {}

	componentDidMount() {}

	render() {
		return (
			<Container fluid={false}>
				<Row>

					<Col xl={12} className="bio_wrapper">

						<div className="bio_text_wrapper">

							<ScreenClassRender style={bioHeaderText}>

								<h3>About James</h3>

							</ScreenClassRender>

							<ScreenClassRender
								className="bio_text"
								style={bodyTextStyle}
							>
								<p>
								Nam imperdiet tempor ligula. Nullam fringilla arcu vel laoreet ornare. Sed nec diam a diam ultricies mattis. Quisque non lorem augue. Cras gravida risus a rhoncus condimentum. Quisque egestas tristique purus vitae hendrerit. Morbi urna tortor, volutpat id turpis a, accumsan pellentesque elit. Fusce in quam vel dui ultricies porttitor. Mauris eu mi vitae tortor gravida porta. Nam placerat in dolor quis accumsan. Etiam congue est ut leo maximus ornare. Cras finibus sapien eget viverra feugiat. Nam lacus ipsum, placerat non auctor viverra, tempor ac erat. Duis mi lorem, maximus vitae ex ut, tempor auctor lorem.
								</p>
							</ScreenClassRender>

						</div>

						<div className="bio_img_wrapper">

							<img
								style={{
									width: `130%`,
									position: `absolute`,
									left: `-10%`
								}}
								src={"images/profile2.jpg"}
							/>

						</div>

					</Col>

				</Row>

			</Container>
		);
	}
}
