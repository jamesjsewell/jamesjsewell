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


const bodyTextStyle = (screenClass, props) => {
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
					<Col xl={12} lg={12} md={12} sm={12} xs={12}>

						<Row>

							<Col xl={8} className="bio_text">

								<ScreenClassRender style={bodyTextStyle}>
									<p>
										Nam imperdiet tempor ligula. Nullam fringilla arcu vel laoreet ornare. Sed nec diam a diam ultricies mattis. Quisque non lorem augue. Cras gravida risus a rhoncus condimentum. Quisque egestas tristique purus vitae hendrerit. Morbi urna tortor, volutpat id turpis a, accumsan pellentesque elit. Fusce in quam vel dui ultricies porttitor. Mauris eu mi vitae tortor gravida porta. Nam placerat in dolor quis accumsan. Etiam congue est ut leo maximus ornare. Cras finibus sapien eget viverra feugiat. Nam lacus ipsum, placerat non auctor viverra, tempor ac erat. Duis mi lorem, maximus vitae ex ut, tempor auctor lorem.
									</p>
								</ScreenClassRender>

							</Col>

							<Col xl={4}>
								<div
									style={{
										width: `50rem`,
										height: `35rem`,
										maxWidth: `100%`,
										maxHeight: `100%`,
										position: `relative`,
										overflow: `hidden`,
										borderRadius: `.4rem`

									}}
								>
									<img
										style={{
											
											position: `absolute`,
											top: `50%`,
											left: `50%`,
											transform: `translate(-50%, -50%)`,
											width: `59rem`
										
										}}
										src={"images/profile1.jpg"}
									/>
								</div>
							</Col>

						</Row>

					</Col>
				</Row>
			</Container>
		);
	}
}
