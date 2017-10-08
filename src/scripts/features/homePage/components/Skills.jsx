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

export default class Skills extends Component {
	constructor(props) {
		super(props);
		this.state = {};
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
			skillElementsArray.push(<Skill theSkill={definedSkillsArray[i]} />);
		}

		return skillElementsArray;
	}

	render() {
		return (
			<div className="skills_wrapper">

				<Container>
					<Row>
						<Col xl={12}>

							<div style={{ padding: `.5rem`, width: `100%` }}>

								{this.generatedSkills()}

							</div>

						</Col>

					</Row>

				</Container>

			</div>
		);
	}
}

const skillWrapperStyle = (screenClass, props) => {
	var updatedStyle = props && props.style ? props.style : {};

	if (screenClass === "xs") updatedStyle.width = `2rem`;
	if (screenClass === "sm") updatedStyle.width = `4rem`;
	if (screenClass === "md") updatedStyle.width = `6rem`;
	if (screenClass === "lg") updatedStyle.width = `8rem`;
	if (screenClass === "xl")
		(updatedStyle.width = `10rem`), (updatedStyle.height = `10rem`);

	return updatedStyle;
};

class Skill extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillReceiveProps(nextProps) {}

	componentDidUpdate(prevProps, prevState) {}

	componentDidMount() {}

	render() {
		const { theSkill } = this.props;

		return (
			<ScreenClassRender style={skillWrapperStyle}>
				<div className="skill_wrapper">

					<h3>{theSkill.name === "javascript"? "JS" : theSkill.name}</h3>

					<button><i style={{padding: `.5rem`, margin: `.5rem`}} className="material-icons">visibility</i></button>

				</div>
			</ScreenClassRender>
		);
	}
}
