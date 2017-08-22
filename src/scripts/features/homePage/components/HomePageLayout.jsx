import React, { Component, PropTypes } from "react";

export default class HomePageLayout extends Component {
	render() {
		return (
			<div className="home_page_wrapper">

				<div className="home_page_header">

					<div id="slider1">
						<img src="images/james-at-demo-day.jpg" />

						<div id="slider2">
							<img src="images/theironyard-64.jpg" />

							<div id="slider3">
								<img src="images/theironyard-66.jpg" />
							</div>
						</div>

					</div>

				</div>

			</div>
		);
	}
}
