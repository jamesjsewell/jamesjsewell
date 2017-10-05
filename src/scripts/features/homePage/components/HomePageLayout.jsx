import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import _ from "underscore";

export default class HomePageLayout extends Component {
	constructor(props) {
		super(props);
		this.state = { slides: [], slidesCreated: 0 };
	}

	restart() {
		this.setState({ slides: [], slidesCreated: 0, restart: true });
	}


	componentWillReceiveProps(nextProps) {}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.restart && !prevState.restart) {
			this.state.restart = false;
			var underneath = true;
			var generated = false;
			this.newSlides(false, generated);
			this.newSlides(underneath, generated);
		}
	}

	componentDidMount() {
		window.addEventListener("resize", this.restart.bind(this));
		var underneath = true;
		var generated = false;
		this.newSlides(false, generated);
		this.newSlides(underneath, generated);
	}

	newSlides(underneath, generated) {
		var slidesCreated = this.state.slidesCreated;

		var slideArray = this.state.slides;
		slideArray.push(
			<Slide
				slideNumber={this.state.slidesCreated}
				underneath={underneath ? true : false}
				removeSlide={this.removeSlide.bind(this)}
				newSlides={this.newSlides.bind(this)}
				restart={this.restart.bind(this)}
				generated={generated ? true : false}
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
				margin: `0px`,
				padding: `0px`
			}
		};
	}

	componentWillUpdate(nextProps, nextState) {
		if (!this.state.destinationStyleSet && nextState.destinationStyleSet) {
		}
	}

	handleResize() {
		
	}

	updateHeight() {
		if (this.refs.slider && this.refs.image) {
			var height = this.props.generated
				? this.refs.slider.clientHeight - 10
				: this.refs.slider.clientHeight - 10;

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
		
	}

	handleTransitionEnd() {
		if (!this.props.underneath) {
			var generated = true;
			var underneath = true;
			this.props.newSlides(false, generated);
			this.props.newSlides(underneath, generated);
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
