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

const modalWrapperStyle = (screenClass, props) => {
	var updatedStyle = props && props.style ? props.style : {};

	if (screenClass === "xs")
		(updatedStyle.height = `100vh`), (updatedStyle.width = `100vw`)
	if (screenClass === "sm")
		(updatedStyle.height = `100vh`), (updatedStyle.width = `100vw`)
	if (screenClass === "md")
		(updatedStyle.height = `100vh`), (updatedStyle.width = `100vw`)
	if (screenClass === "lg")
		(updatedStyle.height = `100vh`), (updatedStyle.width = `100vw`)
	if (screenClass === "xl")
		(updatedStyle.height = `100vh`), (updatedStyle.width = `100vw`)

	return updatedStyle;
};

export default class Modal extends Component {
	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(nextProps) {}

	componentDidUpdate(prevProps, prevState) {}

	componentDidMount() {}

	render() {
		const { modalContent, closeModal } = this.props;
		return (
			<ScreenClassRender style={modalWrapperStyle}>
				<div className="modal_wrapper">

					<button
		
						onClick={() => {
							closeModal();
						}}
						className="close_modal"
					>
						<i className="material-icons">close</i>
					</button>

					{modalContent}
				</div>
			</ScreenClassRender>
		);
	}
}
