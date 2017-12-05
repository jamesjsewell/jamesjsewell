import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Component } from "react";

import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class HomePageLayout extends React.PureComponent {
    constructor(props) {
        super(props);
        const layouts = this.generateLayout();

        this.state = { layouts };
        this.state["projects"] = [
            {
                name: "Refugee Requests",
                description: "Refugee shelter resource management app"
            },
            {
                name: "Snake Remake",
                description: "Webapp remake of the classic game snake"
            },
            {
                name: "Personal Site",
                description: "Previous personal website"
            },
            // {
            //     name: "Weather App",
            //     description: "Mauris semper vitae nisl ac sollicitudin. Nam luctus posuere nisl, ultrices malesuada justo varius id. Fusce molestie, nisi id venenatis condimentum, mauris nisl laoreet nibh, vel suscipit dolor nunc a enim. Curabitur quis accumsan lectus."
            // },
            {
                name: "Final TIY",
                description: "final project at TIY"
            }
        ];
    }

    generateLayout() {
        //generate the layout for all modules and return the array
        // const p = this.props;
        // return _.map(new Array(p.items), function(item, i) {
        //     const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
        //     return {
        //         x: i * 2 % 16,
        //         y: Math.floor(i / 6) * y,
        //         w: 2,
        //         h: y,
        //         i: i.toString()
        //     };
        // });

        const project1 = {
            lg: {
                i: "0",
                x: 0,
                y: 0,
                w: 3,
                h: 3
            },
            md: {
                i: "0",
                x: 0,
                y: 0,
                w: 2.5,
                h: 2.5
            },
            sm: {
                i: "0",
                x: 0,
                y: 0,
                w: 1.5,
                h: 1.5
            },
            xs: {
                i: "0",
                x: 0,
                y: 0,
                w: 2,
                h: 2
            },
            xxs: {
                i: "0",
                x: 0,
                y: 0,
                w: 2,
                h: 2
            }
        };

        const project2 = {
            lg: {
                i: "1",
                x: 3,
                y: 0,
                w: 3,
                h: 3
            },
            md: {
                i: "1",
                x: 2.5,
                y: 0,
                w: 2.5,
                h: 2.5
            },
            sm: {
                i: "1",
                x: 1.5,
                y: 0,
                w: 1.5,
                h: 1.5
            },
            xs: {
                i: "1",
                x: 2,
                y: 0,
                w: 2,
                h: 2
            },
            xxs: {
                i: "1",
                x: 0,
                y: 1,
                w: 2,
                h: 2
            }
        };

        const project3 = {
            lg: {
                i: "2",
                x: 6,
                y: 0,
                w: 3,
                h: 3
            },
            md: {
                i: "2",
                x: 5,
                y: 0,
                w: 2.5,
                h: 2.5
            },
            sm: {
                i: "2",
                x: 3,
                y: 0,
                w: 1.5,
                h: 1.5
            },
            xs: {
                i: "2",
                x: 0,
                y: 1,
                w: 2,
                h: 2
            },
            xxs: {
                i: "2",
                x: 0,
                y: 2,
                w: 2,
                h: 2
            }
        };

        const project4 = {
            lg: {
                i: "3",
                x: 9,
                y: 0,
                w: 3,
                h: 3
            },
            md: {
                i: "3",
                x: 7.5,
                y: 0,
                w: 2.5,
                h: 2.5
            },
            sm: {
                i: "3",
                x: 4.5,
                y: 0,
                w: 1.5,
                h: 1.5
            },
            xs: {
                i: "3",
                x: 2,
                y: 1,
                w: 2,
                h: 2
            },
            xxs: {
                i: "3",
                x: 0,
                y: 3,
                w: 2,
                h: 2
            }
        };

        var layouts = {
            lg: [project1.lg, project2.lg, project3.lg, project4.lg],
            md: [project1.md, project2.md, project3.md, project4.md],
            sm: [project1.sm, project2.sm, project3.sm, project4.sm],
            xs: [project1.xs, project2.xs, project3.xs, project4.xs],
            xxs: [project1.xxs, project2.xxs, project3.xxs, project4.xxs]
        };

        return layouts;
    }

    onLayoutChange(layout) {
        this.props.onLayoutChange(layout);
    }

    render() {
        return (
            <ResponsiveReactGridLayout
                useCSSTransforms={true}
                isDraggable={false}
                isResizable={false}
                className="layout"
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                layouts={this.state.layouts}
                rowHeight={100}
                className="projects_wrapper"
            >

                <div key="0">
                    <Project theProject={this.state.projects[0]} imgPath="images/refugee-requests.png" />
                </div>
                <div key="1">
                    <Project theProject={this.state.projects[1]} imgPath="images/snake.png"/>
                </div>
                <div key="2">
                    <Project theProject={this.state.projects[2]} imgPath="images/jamesjsewell.png" />
                </div>
                <div key="3">
                    <Project theProject={this.state.projects[3]} imgPath="images/gametally.png" />
                </div>

            </ResponsiveReactGridLayout>
        );
    }
}

class Project extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { theProject, imgPath } = this.props;

        return (
            <div className="project_wrapper">

                <div className="header">
                    <h4>{theProject.name}</h4>

                    <p>{theProject.description}</p>
                </div>

                <div className="content">
                    <img style={{width: `auto`, height: `auto`, maxWidth: `100%`, maxHeight: `100%`}} src={imgPath} />
                </div>

            </div>
        );
    }
}
