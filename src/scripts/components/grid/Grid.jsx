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

export default class Grid extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.state.width = props.width;
		this.state.height = props.height;
	}
	resizeColumnContent(screenClass, props) {
		var updatedStyle = props && props.style ? props.style : {};

		if (screenClass === "xs") updatedStyle.fontSize = `1.25rem`;
		if (screenClass === "sm") updatedStyle.fontSize = `1.50rem`;
		if (screenClass === "md") updatedStyle.fontSize = `1.75rem`;
		if (screenClass === "lg") updatedStyle.fontSize = `2.0rem`;
		if (screenClass === "xl") updatedStyle.fontSize = `2.5rem`;

		return updatedStyle;
	}

	populateRow(columns, content) {
		var columnsArray = [];
		const columnWidth = 12 / columns;
		for (var i = 0; i < columns; i++) {
			columnsArray.push(
				<Col
					xl={columnWidth}
					lg={columnWidth}
					md={columnWidth}
					sm={columnWidth}
					xs={columnWidth}
					style={{
						display: `flex`,
						alignItems: `stretch`,
						overflow: `hidden`
					}}
				>

					<ScreenClassRender
						style={this.resizeColumnContent.bind(this)}
					>
						<div
							className=""
							style={{
								color: `green`,
								height: `100%`,
								paddingTop: `100%`
							}}
						>

							{content[i]}
						</div>
					</ScreenClassRender>

				</Col>
			);
		}

		return columnsArray;
	}

	generateGrid(x, y, half) {
		if (!half) {
			var rowsArray = [];
			console.log(this.props.columnsContent);
			console.log(x, y);

			for (var i = 0; i < y; i++) {
				if (this.props.columnsContent[i]) {
					rowsArray.push(
						<Row align="end" grow={true}>

							{this.populateRow(x, this.props.columnsContent)}
						</Row>
					);
				} else {
					return rowsArray;
				}
			}

			return rowsArray;
		}
		else{
			var rowsArray = [];
			console.log(this.props.columnsContent);
			console.log(x, y);

			for (var i = 0; i < y*2; i++) {
				if (this.props.columnsContent[i]) {
					rowsArray.push(
						<Row align="end" grow={true}>

							{this.populateRow(x/2, this.props.columnsContent)}
						</Row>
					);
				} else {
					return rowsArray;
				}
			}

			return rowsArray;

		}
	}

	render() {
		const { width, height } = this.props;
		return (
			<div>
				<Visible xl lg md>
					<Container>
						{this.generateGrid(width, height)}
					</Container>
				</Visible>

				<Visible sm xs>
					<Container>
						{this.generateGrid(width, height, "half")}
					</Container>
				</Visible>

			</div>
		);
	}
}
