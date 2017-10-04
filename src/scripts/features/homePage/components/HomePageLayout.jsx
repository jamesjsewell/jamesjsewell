import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import _ from "underscore";

export default class HomePageLayout extends Component {
	constructor(props) {
		super(props);
		this.state = { slides: [], slidesCreated: 0 };
	}

	restart() {
		this.state.slides = [];
		this.state.slidesCreated = 0;
		this.newSlides();
		this.newSlides(true);
	}
	componentWillReceiveProps(nextProps) {}

	componentDidMount() {
		this.newSlides();
		this.newSlides(true);
	}

	newSlides(underneath) {
		var slidesCreated = this.state.slidesCreated;

		var slideArray = this.state.slides;
		slideArray.push(
			<Slide
				slideNumber={this.state.slidesCreated}
				underneath={underneath ? true : false}
				removeSlide={this.removeSlide.bind(this)}
				newSlides={this.newSlides.bind(this)}
				restart={this.restart.bind(this)}
			/>
		);

		this.state.slidesCreated = this.state.slidesCreated + 1;

		this.setState({
			slides: slideArray
		});
	}

	removeSlide(indexOfSlide) {
		var slideArray = this.state.slides;
		slideArray[indexOfSlide] = null;

		this.setState({ slides: slideArray });
	}

	render() {
		return (
			<div className="home_page_wrapper">
				<div className="home_page_header">
					{this.state.slides}
				</div>
			</div>
		);
	}
}

class Slide extends Component {
	constructor(props) {
		super(props);
		this.state = {
			destinationStyleSet: false,
			imgLoaded: false,
			height: null,
			speed: 4,
			top: 0,
			destination: 0,
			style: {
				
				
				verticalAlign: `top`,
				lineHeight: `0px`,
				position: `absolute`,
				margin: `5px`,
				padding: `5px`
			}
		};
	}

	componentWillUpdate(nextProps, nextState) {}

	handleResize() {
		this.props.restart();
	}

	updateHeight() {
		if (this.refs.slider && this.refs.image) {
			var height = this.refs.slider.clientHeight;
			var imgHeight = this.refs.image.clientHeight;
			

			if (this.props.underneath) {
				if (height > 0 && !this.state.imgLoaded) {
					this.state.imgLoaded = true;
					this.state.destination = height;
					this.setState({
						style: _.extend({}, this.state.style, {
							top: height * 2
						})
					});
				} else if (height > 0 && this.state.imgLoaded) {
					this.setDestinationStyle();
				}
			} else {
				if (height > 0 && !this.state.imgLoaded) {
					this.state.imgLoaded = true;
					this.state.destination = height;
					this.setState({
						style: _.extend({}, this.state.style, {
							top: height
						})
					});
				} else {
					this.state.destination = height;

					this.setDestinationStyle();
				}
			}
		}
	}

	setDestinationStyle() {
		var speed = this.state.speed * 2;
		var destination = this.state.destination * 2;

		if (this.props.underneath) {
			destination = this.state.destination * 4;
			speed = this.state.speed * 4;
		}

		this.setState({
			style: _.extend({}, this.state.style, {
				transition: `transform ${speed}s linear`,
				WebkitTransition: `transform ${speed}s linear`,
				msTransition: `transform ${speed}s linear`,
				msTransform: `translate(0px, -${destination}px )`,
				WebkitTransform: `translate(0px, -${destination}px )`,
				transform: `translate(0px, -${destination}px )`
			})
		});
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.imgLoaded && !prevState.destinationStyleSet) {
			this.setDestinationStyle();
			this.state.destinationStyleSet = true;
		}
	}

	componentDidMount() {
		window.addEventListener("resize", this.handleResize.bind(this));
	}

	handleTransitionEnd() {
		if (!this.props.underneath) {
			this.props.newSlides();
			this.props.newSlides(true);
		}
		this.props.removeSlide(this.props.slideNumber);
	}

	render() {

		return (
			<div
				ref={"slider"}
				style={this.state.style}
				onTransitionEnd={() => {
					this.handleTransitionEnd();
				}}
			>
				<img
					ref={"image"}
					onLoad={() => {
						this.updateHeight();
					}}
					src="images/james-at-demo-day.jpg"
				/>

			</div>
		);
	}
}
