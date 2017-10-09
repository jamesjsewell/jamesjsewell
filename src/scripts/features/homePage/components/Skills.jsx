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

export default class Skills extends Component {
	constructor(props) {
		super(props);
		this.state = { modalOpen: false, modalContent: null };
	}

	componentWillReceiveProps(nextProps) {}

	componentDidUpdate(prevProps, prevState) {}

	componentDidMount() {}

	generatedSkills() {
		var definedSkillsArray = [
			{
				name: "javascript",
				description: "I am an avid javascript developer and I am exploring ReactJs as a front-end framework. I graduated from The Iron Yard - Houston earlier this year where I spent well in excess of 400 clock hours learning about and practicing front-end development with javascript"
			},
			{
				name: "CSS",
				description: "Mauris semper vitae nisl ac sollicitudin. Nam luctus posuere nisl, ultrices malesuada justo varius id. Fusce molestie, nisi id venenatis condimentum, mauris nisl laoreet nibh, vel suscipit dolor nunc a enim. Curabitur quis accumsan lectus."
			},
			{
				name: "HTML5",
				description: "Mauris semper vitae nisl ac sollicitudin. Nam luctus posuere nisl, ultrices malesuada justo varius id. Fusce molestie, nisi id venenatis condimentum, mauris nisl laoreet nibh, vel suscipit dolor nunc a enim. Curabitur quis accumsan lectus."
			}
		];

		var skillElementsArray = [];

		for (var i = 0; i < definedSkillsArray.length; i++) {
			console.log(definedSkillsArray[i]);
			skillElementsArray.push(
				<Skill
					key={i}
					skillNumber={i}
					openSkill={this.handleOpenModal.bind(this)}
					theSkill={definedSkillsArray[i]}
				/>
			);
		}

		return skillElementsArray;
	}

	handleCloseModal() {
		if (this.state.modalOpen) {
			this.setState({ modalOpen: false });
		}
	}

	handleOpenModal(theSkill) {
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
									<h3>{theSkill.name}</h3>
								</ScreenClassRender>

								<ScreenClassRender style={bodyTextStyle}>
									<p>{theSkill.description}</p>
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
			<div className="skills_wrapper">

				<Container>
					<Row>
						<Col xl={12}>

							<h3>Technical Skills</h3>

							<div style={{ padding: `.5rem`, width: `100%` }}>

								{this.generatedSkills()}

							</div>

							{this.state.modalOpen
								? <Modal
										modalContent={this.state.modalContent}
										closeModal={this.handleCloseModal.bind(
											this
										)}
									/>
								: null}

						</Col>

					</Row>

				</Container>

			</div>
		);
	}
}

class Skill extends Component {
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
			(updatedStyle.width = `7rem`), (updatedStyle.height = `7rem`), (updatedStyle.fontSize = `1.75rem`);
		if (screenClass === "sm")
			(updatedStyle.width = `8rem`), (updatedStyle.height = `8rem`), (updatedStyle.fontSize = `2rem`);
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

	render() {
		const { theSkill, skillNumber, openSkill } = this.props;

		return (
			<ScreenClassRender style={this.wrapperResize.bind(this)}>

				<button
					onClick={() => {
						openSkill(theSkill);
					}}
					className="skill_wrapper"
				>
					<ScreenClassRender style={this.iconResize.bind(this)}>
						<i
							style={{ padding: `.5rem`, margin: `.5rem` }}
							className="material-icons"
						>
							visibility
						</i>
					</ScreenClassRender>
					{theSkill.name === "javascript" ? "JS" : theSkill.name}

				</button>

			</ScreenClassRender>
		);
	}
}
