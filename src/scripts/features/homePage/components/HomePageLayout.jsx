import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Component } from "react";

import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

const columns = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };

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
        const yInit = 0, yOffset = 0, y = yInit + yOffset;

        const lg = {
            logo: { i: "logo", x: 0, y: y, w: 2, h: 1 },
            tagline: { i: "tagline", x: 2, y: y, w: 10, h: 1 },
            contact: { i: "contact", x: 0, y: y + 1, w: 2, h: 2.5 },
            aboutMe: { i: "about", x: 2, y: y + 1, w: 9, h: 2.5 },
            projectsHeader: { i: "projects", x: 0, y: y + 3.5, w: 12, h: 0.75 },
            project1: { i: "0", x: 0, y: y + 4, w: 3, h: 3 },
            project2: { i: "1", x: 3, y: y + 4, w: 3, h: 3 },
            project3: { i: "2", x: 6, y: y + 4, w: 3, h: 3 },
            project4: { i: "3", x: 9, y: y + 4, w: 3, h: 3 }
        };

        var proj = 10/4
        const md = {
            logo: { i: "logo", x: 0, y: y, w: 2, h: 1 },
            tagline: { i: "tagline", x: 2, y: y, w: 8, h: 1 },
            contact: { i: "contact", x: 0, y: y + 1, w: 2, h: 2.5 },
            aboutMe: { i: "about", x: 2, y: y + 1, w: 8, h: 2.5 },
            projectsHeader: { i: "projects", x: 0, y: y + 3.5, w: 12, h: 0.75 },
            project1: { i: "0", x: 0, y: y + 4, w: proj, h: proj },
            project2: { i: "1", x: proj, y: y + 4, w: proj, h: proj },
            project3: { i: "2", x: proj*2, y: y + 4, w: proj, h: proj },
            project4: { i: "3", x: proj*3, y: y + 4, w: proj, h: proj }
        };
        const sm = {
            logo: { i: "logo", x: 0, y: y, w: 2, h: 2 },
            aboutMe: { i: "about", x: 2, y: y, w: 8, h: 2 },
            contact: { i: "contact", x: 10, y: y, w: 2, h: 2 }
        };
        const xs = {
            logo: { i: "logo", x: 0, y: y, w: 2, h: 2 },
            aboutMe: { i: "about", x: 2, y: y, w: 8, h: 2 },
            contact: { i: "contact", x: 10, y: y, w: 2, h: 2 }
        };
        const xxs = {
            logo: { i: "logo", x: 0, y: y, w: 2, h: 2 },
            aboutMe: { i: "about", x: 2, y: y, w: 8, h: 2 },
            contact: { i: "contact", x: 10, y: y, w: 2, h: 2 }
        };

        var layouts = {
            lg: [
                lg.logo,
                lg.tagline,
                lg.contact,
                lg.aboutMe,
                lg.projectsHeader,
                lg.project1,
                lg.project2,
                lg.project3,
                lg.project4
            ],
            md: [
                md.logo,
                md.tagline,
                md.contact,
                md.aboutMe,
                md.projectsHeader,
                md.project1,
                md.project2,
                md.project3,
                md.project4
            ],
            sm: [sm.logo, sm.aboutMe, sm.contact],
            xs: [xs.logo, xs.aboutMe, xs.contact],
            xxs: [xxs.logo, xxs.aboutMe, xxs.contact]
        };

        return layouts;
    }

    onLayoutChange(layout) {
        this.props.onLayoutChange(layout);
    }

    render() {
        var debug = true;
        var debugStyle = { border: `.01rem dashed grey` };
        return (
            <ResponsiveReactGridLayout
                useCSSTransforms={true}
                isDraggable={false}
                isResizable={false}
                className="layout"
                breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                cols={columns}
                layouts={this.state.layouts}
                rowHeight={100}
                className="projects_wrapper"
                compactType={null}
            >

                <div key="logo" style={debug ? debugStyle : {}}>
                    <img
                        className="logo"
                        style={{
                            borderRadius: `.5rem`,
                            maxWidth: `100%`,
                            maxHeight: `100%`,
                            height: `auto`,
                            width: `auto`,
                            padding: `.5rem`
                        }}
                        src="images/jsNew-01-01.png"
                    />
                </div>

                <div
                    className="tagline"
                    key="tagline"
                    style={debug ? debugStyle : {}}
                >
                    James Joseph Sewell - Front end engineer, HTX
                </div>

                <div
                    className="contact"
                    key="contact"
                    style={debug ? debugStyle : {}}
                >
                    contact info
                </div>

                <div
                    className="about_text"
                    key="about"
                    style={debug ? debugStyle : {}}
                >
                    James was a hobbyist developer and wanted a more practical understanding of software development and web technologies. He attended The Iron Yard Houston in the spring of 2017. Along with daily instruction, he applied concepts learned in the form of daily exercises and projects. He gained experience using version control, even on team projects, and utilizes it frequently. He learned to use UNIX commands in the terminal, and bash scripting. He learned foundational concepts all the way up to developing his own web applications with cutting edge frameworks. He continues to adopt new technologies and develop personal projects.
                    {" "}
                </div>

                <div
                    key="projects"
                    className="projects_header"
                    style={debug ? debugStyle : {}}
                >
                    web applications engineered by James
                </div>

                <div key="0" style={debug ? debugStyle : {}}>
                    <Project
                        theProject={this.state.projects[0]}
                        imgPath="images/refugee-requests.png"
                    />
                </div>
                <div key="1" style={debug ? debugStyle : {}}>
                    <Project
                        theProject={this.state.projects[1]}
                        imgPath="images/snake.png"
                    />
                </div>
                <div key="2" style={debug ? debugStyle : {}}>
                    <Project
                        theProject={this.state.projects[2]}
                        imgPath="images/jamesjsewell.png"
                    />
                </div>
                <div key="3" style={debug ? debugStyle : {}}>
                    <Project
                        theProject={this.state.projects[3]}
                        imgPath="images/gametally.png"
                    />
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
                    <img
                        style={{
                            width: `auto`,
                            height: `auto`,
                            maxWidth: `100%`,
                            maxHeight: `100%`
                        }}
                        src={imgPath}
                    />
                </div>

                <button className="project_button">
                    more info
                </button>

            </div>
        );
    }
}
