import React, { Component, PropTypes } from "react";
import {
	Container,
	Row,
	Col,
	Visible,
	Hidden,
	ScreenClassRender,
	ClearFix
} from "react-grid-system";

const buttonStyle = (screenClass, props) => {
	var updatedStyle = {};
	
	if (props.style) {
		updatedStyle = props.style;
	}

	if (screenClass === "xs") {
		updatedStyle["padding"] = `.1rem`;
		updatedStyle["fontSize"] = `.80rem`
	}

	if (screenClass === "sm") {
		updatedStyle["padding"] = `.1rem`;
		updatedStyle["fontSize"] = `.85rem`
	}

	if (screenClass === "md") {
		updatedStyle["padding"] = `.2rem`;
		updatedStyle["fontSize"] = `.90rem`
	}

	if (screenClass === "lg") {
		updatedStyle["padding"] = `.3rem`;
		updatedStyle["fontSize"] = `1rem`
	}

	if (screenClass === "xl") {
		updatedStyle["padding"] = `.5rem`;
		updatedStyle["fontSize"] = `1.2rem`

	}

	return updatedStyle;
};

export default class NavbarLayout extends Component {
	render() {
		var currentUrl = window.location.pathname;
		const {
			sidebarVisible,
			authenticated,
			action_onClickLink,
			action_sidebarVis,
			routes
		} = this.props;
		return (
			<Visible md lg xl sm>

				<Container fluid className="navbar" >

					<Row>

						<Col md={12} lg={12} sm={12}>

							<ScreenClassRender style={buttonStyle}>
								<button
									className="active"
									style={{marginRight: `8px`, display: `inline`}}
									onClick={() => {
										console.log("clicked home nav link");
									}}
								>
									home
								</button>
							</ScreenClassRender>
							<ScreenClassRender style={buttonStyle}>
								<button
									style={{marginRight: `8px`, marginLeft: `0`, display: `inline`}}
									onClick={() => {
										console.log("clicked home nav link");
									}}
								>
									about
								</button>
							</ScreenClassRender>
							<ScreenClassRender style={buttonStyle}>
								<button
									style={{marginRight: `0px`, marginLeft: `0`, display: `inline`}}
									onClick={() => {
										console.log("clicked home nav link");
									}}
								>
									contact
								</button>
							</ScreenClassRender>

						</Col>

					</Row>

				</Container>
			</Visible>
		);
	}
}
