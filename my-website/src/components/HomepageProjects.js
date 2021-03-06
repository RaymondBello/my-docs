import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./HomepageProjects.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";


const ProjectList = [
  {
    title: "HermesFC",
    Image: require("@site/static/img/hermes.gif").default,
    link: "/docs/Hermes-rev1/overview",
    description: (
      <>
        4-layer UAV flight controller designed to actively stabilize quadcopter
        and fixed-wing vehicles.
      </>
    ),
  },
  {
    title: "Ground Station Telemetry GUI",
    Image: require("@site/static/img/Telemetry_Demo1.gif").default,
    link: "https://github.com/RaymondBello/Telemetry-UI",
    description: (
      <>
        Ground Station UI to wirelessly monitor autonomous vehicles over a
        websocket connection.
      </>
    ),
  },
  {
    title: "Ray-gram",
    Image: require("@site/static/img/ray-gram.gif").default,
    link: "https://github.com/RaymondBello/ray-gram",
    description: (
      <>
        This is a web-based photo library app written in React. Created to
        showcase various artworks and fashion shoots.
      </>
    ),
  },
  {
    title: "Planet Maker",
    Image: require("@site/static/img/earth.gif").default,
    link: "https://github.com/RaymondBello/Procedural-Geometry-Planet-Maker",
    description: (
      <>
        Planet Maker is a simple unity-based tool, aimed at using Procedural
        Geometry to create a variety of 3D planets which can be exported as
        individual assets for 3D-printing or for use within any other graphic
        rendering game engine.
      </>
    ),
  },
  {
    title: "A* Path Finding Algorithm Visualization",
    Image: require("@site/static/img/a-star.gif").default,
    link: "https://github.com/RaymondBello/A-Star-Algorithm-Visualization",
    description: (
      <>
        Aimed at creating an interactive interface for the A* Path finding
        algorithm using Python.
      </>
    ),
  },
  {
    title: "Flight Planner Website",
    Image: require("@site/static/img/mission_planner.png").default,
    link: "https://github.com/RaymondBello/Glider-Autopilot/tree/main/Ground%20Control%20Software/Python%20Telemetry%20Dashboard/web",
    description: (
      <>
        Designed a simple website to plan/manage waypoints for an autonomous R/C
        fixed-wing plane.
      </>
    ),
  },
  {
    title: "Aircraft Physics Simulation",
    Image: require("@site/static/img/TakeOff_Demo.gif").default,
    link: "https://github.com/RaymondBello/Glider-Autopilot/tree/main/Flight%20Simulation/Unity%20Aircraft%20Simulation",
    description: (
      <>
        This a fixed-wing physics simulation written in Unity. The goal of the
        project is to create a physics simulation environment to test and tune
        fixed-wing flight controller gain parameters.
      </>
    ),
  },
  {
    title: "Baku Autonomous Racer",
    Image: require("@site/static/img/track.png").default,
    link: "",
    description: (
      <>
        Designed a control system for a rc car that allows the car to self
        optimize lap-times by utilizing onboard IMU sensors to maximize traction
        while finding the shortest local path.
      </>
    ),
  },
  {
    title: "Web-based Flight Instruments",
    Image: require("@site/static/img/pfd.png").default,
    link: "https://github.com/RaymondBello/Glider-Autopilot/tree/main/Ground%20Control%20Software/Python%20Telemetry%20Dashboard/web",
    description: (
      <>
        Designed a web-based primary flight instrument cluster which uses SVG
        images and javascript to map the indicators onto an incoming telemetry
        stream.
      </>
    ),
  },
];

function Project({ Image, title, description, link }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={Image} alt={title} className={styles.featureImg} />
        {/* <img src={Image} alt={title}  /> */}
      </div>

      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="button button--secondary button--lg" to={link}>
          see more...
        </Link>
      </div>
      <br />
    </div>
  );
}

export default function HomepageProjects() {
  return (
    <section className={styles.heroBanner}>
      <div className="container">
        <br />
        <h1 className="text--center">Projects</h1>
        <br /> 

        <div className="row">
          {ProjectList.map((props, idx) => (
            <Project key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
