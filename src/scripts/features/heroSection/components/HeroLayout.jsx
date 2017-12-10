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

const logoHeightResize = (screenClass, props) => {
	let height = 0;
	if (screenClass === "xs") height = 8.0;
	if (screenClass === "sm") height = 8.25;
	if (screenClass === "md") height = 8.5;
	if (screenClass === "lg") height = 8.75;
	if (screenClass === "xl") height = 14;

	var updatedStyle = props && props.style ? props.style : {};
	updatedStyle["height"] = `${height}rem`;
	return updatedStyle;
};

export default class HeroLayout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slides: [],
			slideImages: ["slide0", "slide1", "slide2", "slide3", "slide4"],
			allImagesLoaded: false,
			imagesLoaded: 0
		};
	}

	restart() {
		this.setState({ slides: [], allImagesLoaded: false, imagesLoaded: 0 });
		this.newSlides();
	}

	componentWillReceiveProps(nextProps) {}

	componentDidUpdate(prevProps, prevState) {}

	componentDidMount() {
		window.addEventListener("resize", this.restart.bind(this));
		this.newSlides();
	}

	onLoaded() {
		this.state.imagesLoaded = this.state.imagesLoaded + 1;

		if (this.state.imagesLoaded === this.state.slideImages.length) {
			this.setState({ allImagesLoaded: true });
		}
	}

	newSlides() {
		var slideArray = [];

		for (var i = 0; i < this.state.slideImages.length; i++) {
			slideArray.push(
				<Slide
					onLoaded={this.onLoaded.bind(this)}
					imagePath={this.state.slideImages[i]}
				/>
			);
		}

		this.setState({
			slides: slideArray
		});
	}

	render() {
		return (
			<div>


			</div>
		);
	}
}
//<h3 id="jamesjsewell">James Sewell</h3>
// {this.state.slides}
class Slide extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<img
				style={{
					width: `100%`,
					maxWidth: `100%`
				}}
				onLoad={() => {
					this.props.onLoaded();
				}}
				src={`images/${this.props.imagePath}.jpg`}
			/>
		);
	}
}
