import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";

var transitionSpeed = 30;
var nextTransitionSpeed = 30;
var scrollDistance = 0;
var nextScrollDistance = 0;
var destinationHeight = 0;
var nextDestinationHeight = 0;
var lastSliderHeight = 0;
var animationDone = false;
var animationEnding = false;
var sliderStackArray = [];
var generatedFirstStack = false;

export default class HomePageLayout extends Component {
	componentWillReceiveProps(nextProps) {
		scrollDistance = nextProps.scrollDistance;
		nextScrollDistance = nextProps.nextScrollDistance;
	}

	componentDidMount() {
		if (!sliderStackArray[0] && generatedFirstStack === false) {
			this.generateSliderStacks(0);
			generatedFirstStack = true;
		}
	}

	generateSliderStacks(whatStack) {
		if (whatStack === 0) {
			sliderStackArray[0] = (
				<SliderStack
					newStack={this.generateSliderStacks.bind(this)}
					setScrollDistance={this.props.actions.setScrollDistance}
					removeStack={this.removeStack.bind(this)}
				/>
			);
		}
		if (whatStack === 1) {
			sliderStackArray[1] = (
				<SliderStack
					isNextStack={true}
					newStack={this.generateSliderStacks.bind(this)}
					removeStack={this.removeStack.bind(this)}
					setScrollDistance={this.props.actions.setScrollDistance}
				/>
			);
		}
		this.setState({});
	}

	removeStack() {
		sliderStackArray[0] = null;
		this.setState({});
	}

	render() {
		return (
			<div className="home_page_wrapper">

				<div className="home_page_header">
					{sliderStackArray ? sliderStackArray[0] : null}
					{sliderStackArray ? sliderStackArray[1] : null}
				</div>

			</div>
		);
	}
}

class SliderStack extends Component {
	handleAnimLoop() {
		if (
			animationDone === false &&
			animationEnding === false &&
			!this.props.isNextStack
		) {
			this.props.setScrollDistance(
				scrollDistance + lastSliderHeight,
				"first"
			);
			animationEnding = true;
			transitionSpeed = transitionSpeed / 3;
			this.props.newStack(1);
			return;
		}
		if (animationEnding === true && !this.props.isNextStack) {
			this.props.removeStack();
		}
	}

	calculateTotalHeight() {
		if (this.refs.slider1) {
			var slider1Height = this.refs.slider1.clientHeight,
				slider2Height = this.refs.slider2.clientHeight,
				slider3Height = this.refs.slider3.clientHeight,
				slider4Height = this.refs.slider4.clientHeight;

			if (!animationEnding && !this.props.isNextStack) {
				lastSliderHeight = slider4Height;

				destinationHeight =
					slider1Height + slider2Height + slider3Height;
			} else {
				nextDestinationHeight =
					slider1Height + slider2Height + slider3Height;
			}
		}

	}

	handleResize() {
		this.calculateTotalHeight();
	}

	componentDidMount() {
		window.addEventListener("resize", this.handleResize.bind(this));

		if (this.props.isNextStack) {
			var slider = this.refs.slider1;
			var sliderHeight = this.refs.slider1.clientHeight;
			slider.style["top"] = sliderHeight-12 + "px";
		}

		setInterval(() => {
			this.animateSlider();
		}, 10);
	}

	animateSlider() {
		if (destinationHeight != scrollDistance && animationEnding === false) {
			this.props.setScrollDistance(destinationHeight, "first");
		}
		if (nextDestinationHeight != nextScrollDistance) {
			this.props.setScrollDistance(nextDestinationHeight, "next");
		}

	}

	render() {
		var isNextStack = this.props.isNextStack;
		var slider1Style = {
			transition: `transform ${isNextStack ? nextTransitionSpeed : transitionSpeed}s linear`,
			WebkitTransition: `transform ${isNextStack ? nextTransitionSpeed : transitionSpeed}s linear`,
			msTransition: `transform ${isNextStack ? nextTransitionSpeed : transitionSpeed}s linear`,
			msTransform: `translate(0px, -${isNextStack ? nextScrollDistance : scrollDistance}px )`,
			WebkitTransform: `translate(0px, -${isNextStack ? nextScrollDistance : scrollDistance}px )`,
			transform: `translate(0px, -${isNextStack ? nextScrollDistance : scrollDistance}px )`
		};

		return (
			<div
				style={slider1Style}
				ref={"slider1"}
				id="slider1"
				onTransitionEnd={() => {
					if (!this.props.isNextStack) {
						this.handleAnimLoop();
					}
				}}
			>
				<img
					onLoad={this.calculateTotalHeight.bind(this)}
					src="images/james-at-demo-day.jpg"
				/>

				<div ref={"slider2"} id="slider2">
					<img
						onLoad={this.calculateTotalHeight.bind(this)}
						src="images/theironyard-64.jpg"
					/>

					<div ref={"slider3"} id="slider3">
						<img
							onLoad={this.calculateTotalHeight.bind(this)}
							src="images/theironyard-66.jpg"
						/>

						<div ref={"slider4"} id="slider4">
							<img src="images/theironyard-74.jpg" />
						</div>
					</div>
				</div>

			</div>
		);
	}
}
