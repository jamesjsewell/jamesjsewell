import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";

export default class HomePageLayout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slider1Style_top: "0px"
		};
	}
	componentDidMount() {
		setInterval(() => {
			this.animateSlider();
		}, 10);
	}

	animateSlider() {
		if (this.refs.slider1) {
			var slider1Height = this.refs.slider1.clientHeight,
				slider2Height = this.refs.slider2.clientHeight,
				slider3Height = this.refs.slider3.clientHeight;

			var destinationHeight =
				slider1Height + slider2Height + slider3Height;

			if (destinationHeight != this.props.scrollDistance) {
				this.props.actions.setScrollDistance(destinationHeight);
			}
		}
	}
	render() {
		var slider1Style = {
			WebkitTransition: "10s linear all",
			msTransition: "50s linear all",
			msTransform: `translate(0px, ${this.props.scrollDistance})`,
			WebkitTransform: `translate(0px, ${this.props.scrollDistance})`,
			transform: `translate(0px, ${this.props.scrollDistance})`
		};

		return (
			<div className="home_page_wrapper">

				<div className="home_page_header">

					<div style={slider1Style} ref={"slider1"} id="slider1">
						<img src="images/james-at-demo-day.jpg" />

						<div id="slider2">
							<img
								ref={"slider2"}
								src="images/theironyard-64.jpg"
							/>

							<div id="slider3">
								<img
									ref={"slider3"}
									src="images/theironyard-66.jpg"
								/>
							</div>
						</div>

					</div>

				</div>

			</div>
		);
	}
}
