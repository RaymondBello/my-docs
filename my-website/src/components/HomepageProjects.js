import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./HomepageProjects.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";


const ProjectList = [
  {
    title: "Ground Station Telemetry GUI",
    Image: require("@site/static/img/Telemetry_Demo1.gif").default,
    link: "https://github.com/RaymondBello/Telemetry-UI",
    description: (
      <>
        Ground Station UI to wirelessly monitor autonomous vehicles
        over a websocket connection.
      </>
    ),
  },
  {
    title: "Ray-gram",
    Image: require("@site/static/img/ray-gram.gif").default,
    link: "https://github.com/RaymondBello/ray-gram",
    description: (
      <>
        This is a web-based photo library app written in React. Created to showcase various
        artworks and fashion shoots. 
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
        This code is aimed at visualizing an interactive interface for the A*
        Path finding algorithm using PyGame.
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
        This a fixed-wing physics simulation designed in Unity. The goal of the
        project is to create a physics simulation environment to test and tune
        fixed-wing flight controllers.
      </>
    ),
  },

  {
    title: "Pinned ReactNative-App",
    Image: require("@site/static/img/PinnedDemo.gif").default,
    link: "https://github.com/RaymondBello/Pinned-react-app",
    description: (
      <>
        A social app, that lets users leave geo-pins anywhere along with content
        (images and/or text) which is viewable by other users only in that
        immediate vicinity.
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
          Visit
        </Link>
      </div>
      <br />
    </div>
  );
}

export default function HomepageProjects() {
  return (
    <section className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="text--center">Projects</h1>
        <div className="row">
          {ProjectList.map((props, idx) => (
            <Project key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
