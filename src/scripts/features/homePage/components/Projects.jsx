//make a copy of this component and swap it out in the homepage layout when you decide to update it

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
import Modal from "../../../components/modal/Modal.jsx";
import Grid from "../../../components/grid/Grid.jsx";

export default class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { modalOpen: false, modalContent: null };
	}

	componentWillReceiveProps(nextProps) {}

	componentDidUpdate(prevProps, prevState) {}

	componentDidMount() {}

	generatedProjects() {
		var definedProjectsArray = [
			{
				name: "Refugee Requests",
				description: "Refugee shelter resource management app"
			},
			{
				name: "Snake Remake",
				description: "Webapp remake of the classic game snake"
			},
			{
				name: "Personal Site",
				description: "Previous personal website"
			},
			{
				name: "Weather App",
				description: "Mauris semper vitae nisl ac sollicitudin. Nam luctus posuere nisl, ultrices malesuada justo varius id. Fusce molestie, nisi id venenatis condimentum, mauris nisl laoreet nibh, vel suscipit dolor nunc a enim. Curabitur quis accumsan lectus."
			},
			{
				name: "Final TIY",
				description: "Mauris semper vitae nisl ac sollicitudin. Nam luctus posuere nisl, ultrices malesuada justo varius id. Fusce molestie, nisi id venenatis condimentum, mauris nisl laoreet nibh, vel suscipit dolor nunc a enim. Curabitur quis accumsan lectus."
			}
		];

		var projectElementsArray = [];

		for (var i = 0; i < definedProjectsArray.length; i++) {
			console.log(definedProjectsArray[i]);
			projectElementsArray.push(
				<Project
					key={i}
					projectNumber={i}
					openProject={this.handleOpenModal.bind(this)}
					theProject={definedProjectsArray[i]}
				/>
			);
		}

		return (
			<Grid
				columnsContent={projectElementsArray}
				width={4}
				height={
					projectElementsArray.length - 4 >= 1
						? projectElementsArray.length - 4
						: 1
				}
			/>
		);
	}

	handleCloseModal() {
		if (this.state.modalOpen) {
			this.setState({ modalOpen: false });
		}
	}

	handleOpenModal(theProject) {
		const headingTextStyle = (screenClass, props) => {
			var updatedStyle = props && props.style ? props.style : {};

			if (screenClass === "xs") updatedStyle.fontSize = `1.75rem`;
			if (screenClass === "sm") updatedStyle.fontSize = `2rem`;
			if (screenClass === "md") updatedStyle.fontSize = `2.5rem`;
			if (screenClass === "lg") updatedStyle.fontSize = `2.75rem`;
			if (screenClass === "xl") updatedStyle.fontSize = `3rem`;

			return updatedStyle;
		};

		const bodyTextStyle = (screenClass, props) => {
			var updatedStyle = props && props.style ? props.style : {};

			if (screenClass === "xs") updatedStyle.fontSize = `1rem`;
			if (screenClass === "sm") updatedStyle.fontSize = `1.25rem`;
			if (screenClass === "md") updatedStyle.fontSize = `1.5rem`;
			if (screenClass === "lg") updatedStyle.fontSize = `1.75rem`;
			if (screenClass === "xl") updatedStyle.fontSize = `2rem`;

			return updatedStyle;
		};

		var modalContent = (
			<div className="modal_content_wrapper">
				<Container fluid>

					<Row>

						<Col xl={12}>

							<div className="modal_content">

								<ScreenClassRender style={headingTextStyle}>
									<h3>{theProject.name}</h3>
								</ScreenClassRender>

								<ScreenClassRender style={bodyTextStyle}>
									<p>{theProject.description}</p>
								</ScreenClassRender>

							</div>

						</Col>

					</Row>

				</Container>
			</div>
		);

		this.setState({ modalContent: modalContent, modalOpen: true });
	}

	render() {
		return (
			<Container fluid={false} className="projects_wrapper">
				<Row>
					<Col xl={12}>

						<h3>Projects</h3>

						<div style={{ padding: `.5rem`, width: `100%` }}>

							{this.generatedProjects()}

						</div>

						{this.state.modalOpen
							? <Modal
									modalContent={this.state.modalContent}
									closeModal={this.handleCloseModal.bind(this)}
								/>
							: null}

					</Col>

				</Row>

			</Container>
		);
	}
}

class Project extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillReceiveProps(nextProps) {}

	componentDidUpdate(prevProps, prevState) {}

	componentDidMount() {}

	wrapperResize(screenClass, props) {
		var updatedStyle = props && props.style ? props.style : {};

		if (screenClass === "xs")
			(updatedStyle.width = `6.75rem`), (updatedStyle.height = `6.75rem`), (updatedStyle.fontSize = `1.75rem`);
		if (screenClass === "sm")
			(updatedStyle.width = `5.75rem`), (updatedStyle.height = `5rem`), (updatedStyle.fontSize = `1rem`);
		if (screenClass === "md")
			(updatedStyle.width = `8.5rem`), (updatedStyle.height = `8.5rem`), (updatedStyle.fontSize = `2.5rem`);
		if (screenClass === "lg")
			(updatedStyle.width = `9rem`), (updatedStyle.height = `9rem`), (updatedStyle.fontSize = `2.75rem`);
		if (screenClass === "xl")
			(updatedStyle.width = `10rem`), (updatedStyle.height = `10rem`), (updatedStyle.fontSize = `3rem`);

		return updatedStyle;
	}

	iconResize(screenClass, props) {
		var updatedStyle = props && props.style ? props.style : {};

		if (screenClass === "xs") updatedStyle.fontSize = `1rem`;
		if (screenClass === "sm") updatedStyle.fontSize = `1.25rem`;
		if (screenClass === "md") updatedStyle.fontSize = `1.50rem`;
		if (screenClass === "lg") updatedStyle.fontSize = `1.75rem`;
		if (screenClass === "xl") updatedStyle.fontSize = `2.0rem`;

		return updatedStyle;
	}

	labelResize(screenClass, props) {
		var updatedStyle = props && props.style ? props.style : {};

		if (screenClass === "xs") updatedStyle.fontSize = `1rem`;
		if (screenClass === "sm") updatedStyle.fontSize = `1.25rem`;
		if (screenClass === "md") updatedStyle.fontSize = `1.50rem`;
		if (screenClass === "lg") updatedStyle.fontSize = `1.75rem`;
		if (screenClass === "xl") updatedStyle.fontSize = `1rem`;

		return updatedStyle;
	}

	render() {
		const { theProject, projectNumber, openProject } = this.props;

		return (
			<ScreenClassRender style={this.wrapperResize.bind(this)}>

				<button
					onClick={() => {
						openProject(theProject);
					}}
					className="project_wrapper"
				>
					<ScreenClassRender style={this.iconResize.bind(this)}>
						<i
							style={{ padding: `.5rem`, margin: `.5rem` }}
							className="material-icons"
						>
							visibility
						</i>
					</ScreenClassRender>

					<ScreenClassRender style={this.labelResize.bind(this)}>
						<h4>{theProject.name}</h4>
					</ScreenClassRender>
				</button>

			</ScreenClassRender>
		);
	}
}
