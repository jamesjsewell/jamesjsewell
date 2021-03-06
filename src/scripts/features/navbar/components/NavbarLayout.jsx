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
		updatedStyle["padding"] = `.5rem`;
		updatedStyle["margin"] = `.5rem`;
		updatedStyle["fontSize"] = `1.2rem`;
	}

	if (screenClass === "sm") {
		updatedStyle["padding"] = `.1rem`;
		updatedStyle["fontSize"] = `.85rem`;
	}

	if (screenClass === "md") {
		updatedStyle["padding"] = `.2rem`;
		updatedStyle["fontSize"] = `.90rem`;
	}

	if (screenClass === "lg") {
		updatedStyle["padding"] = `.3rem`;
		updatedStyle["fontSize"] = `1rem`;
	}

	if (screenClass === "xl") {
		updatedStyle["padding"] = `.5rem`;
		updatedStyle["fontSize"] = `1.2rem`;
	}

	return updatedStyle;
};

export default class NavbarLayout extends Component {
	constructor(props) {
		super(props);
		this.state = { sidebarOpen: false };
	}

	changeRoute(path) {
		var getUrl = window.location;
		var baseUrl = getUrl.protocol + "//" + getUrl.host + "/";
		this.props.history.push(baseUrl + path);
	}

	render() {
		var currentUrl = window.location.pathname;
		const {
			sidebarVisible,
			authenticated,
			action_onClickLink,
			action_sidebarVis,
			routes
		} = this.props;

		const { homePath, contactPath, aboutPath } = this.props.routes;
		return (
			<div>
				<Visible md lg xl sm>

					<Container fluid className="navbar">

						<Row>

							<Col md={12} lg={12} sm={12}>

								<ScreenClassRender style={buttonStyle}>
									<button
										className={
											window.location.pathname.includes(
												homePath
											)
												? "active"
												: ""
										}
										style={{
											marginRight: `8px`,
											display: `inline`
										}}
										onClick={() => {
											this.props.history.push(homePath);
										}}
									>
										home
									</button>
								</ScreenClassRender>
								<ScreenClassRender style={buttonStyle}>
									<button
										className={
											window.location.pathname.includes(
												aboutPath
											)
												? "active"
												: ""
										}
										style={{
											marginRight: `8px`,
											marginLeft: `0`,
											display: `inline`
										}}
										onClick={() => {
											this.props.history.push(aboutPath);
										}}
									>
										about
									</button>
								</ScreenClassRender>
								<ScreenClassRender style={buttonStyle}>
									<button
										className={
											window.location.pathname.includes(
												contactPath
											)
												? "active"
												: ""
										}
										style={{
											marginRight: `0px`,
											marginLeft: `0`,
											display: `inline`
										}}
										onClick={() => {
											this.props.history.push(
												contactPath
											);
										}}
									>
										contact
									</button>
								</ScreenClassRender>

							</Col>

						</Row>

					</Container>
				</Visible>

				<Visible xs>

					<Container fluid>
						<Row>

							<Col xs={12}>
								<div
									className={
										this.state.sidebarOpen
											? "hidden"
											: "mobile_nav_header"
									}
								>
									<button style={{ color: `white` }}>
										<i
											className="material-icons"
											onClick={() => {
												this.setState({
													sidebarOpen: true
												});
											}}
										>
											menu
										</i>
									</button>
								</div>

							</Col>

						</Row>

					</Container>

					<Container
						fluid
						className={
							this.state.sidebarOpen ? "navbar_side" : "hidden"
						}
					>

						<Row>

							<Col xs={12}>

								<div
									style={{
										marginTop: `.2rem`,
										margin: `.2rem`
									}}
								>
									<button
										onClick={() => {
											this.setState({
												sidebarOpen: false
											});
										}}
										style={{
											color: `white`,
											margin: `.1rem`,
											padding: `.1rem`,
											float: `right`
										}}
									>
										<i className="material-icons">clear</i>
									</button>
								</div>

								<ScreenClassRender style={buttonStyle}>
									<button
										className={
											window.location.pathname.includes(
												homePath
											)
												? "active"
												: ""
										}
										style={{
											marginRight: `8px`,
											display: `block`
										}}
										onClick={() => {
											this.props.history.push(homePath);
										}}
									>
										home
									</button>
								</ScreenClassRender>
								<ScreenClassRender style={buttonStyle}>
									<button
										className={
											window.location.pathname.includes(
												aboutPath
											)
												? "active"
												: ""
										}
										style={{
											marginRight: `8px`,
											marginLeft: `0`,
											display: `block`
										}}
										onClick={() => {
											this.props.history.push(aboutPath);
										}}
									>
										about
									</button>
								</ScreenClassRender>
								<ScreenClassRender style={buttonStyle}>
									<button
										className={
											window.location.pathname.includes(
												contactPath
											)
												? "active"
												: ""
										}
										style={{
											marginRight: `0px`,
											marginLeft: `0`,
											display: `block`
										}}
										onClick={() => {
											this.props.history.push(
												contactPath
											);
										}}
									>
										contact
									</button>
								</ScreenClassRender>

							</Col>

						</Row>

					</Container>

				</Visible>

			</div>
		);
	}
}
