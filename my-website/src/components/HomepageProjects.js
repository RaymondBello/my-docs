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
        This 4-layer UAV flight controller is a specialized design made to stabilize both quadcopter and fixed-wing vehicles. 
        With its active stabilization abilities, this controller ensures a smooth, secure flying experience. 
        From navigating challenging terrains to maintaining a steady altitude, this controller is a crucial component of any well-rounded UAV.
      </>
    ),
  },
  {
    title: "Ground Station Telemetry GUI",
    Image: require("@site/static/img/Telemetry_Demo1.gif").default,
    link: "https://github.com/RaymondBello/Telemetry-UI",
    description: (
      <>
        This Ground Station GUI offers a wireless means of overseeing the behavior of autonomous vehicles through a secure WebSocket connection. 
        This interface allows remote monitoring of various data points, including speed, location, and operational status, enabling operators to remotely make changes and adjustments when necessary. 
        By providing real-time visibility into autonomous vehicle operations, the Ground Station UI offers enhanced control, convenience, and overall safety.
      </>
    ),
  },
  {
    title: "gram",
    Image: require("@site/static/img/ray-gram.gif").default,
    link: "https://github.com/RaymondBello/ray-gram",
    description: (
      <>
       This React-based photo library app is a convenient platform that allows artists and photographers to showcase their diverse projects and fashion shoots. 
       Through a user-friendly interface, users can easily browse and organize their photo collections, while leveraging various tools and customizable features to highlight their creative work.
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
        individual assets for 3D printing or for use within any other graphic
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
        The purpose of this application is to provide a dynamic and engaging platform for users to explore the A* Pathfinding algorithm's functionality. 
      With Python as its programming language, users can easily interact with and manipulate the algorithm to best suit their needs.
      </>
    ),
  },
  {
    title: "Flight Planner Website",
    Image: require("@site/static/img/mission_planner.png").default,
    link: "https://github.com/RaymondBello/Glider-Autopilot/tree/main/Ground%20Control%20Software/Python%20Telemetry%20Dashboard/web",
    description: (
      <>
        I created a user-friendly website that enables the seamless organization and oversight of navigation points for an unmanned fixed-wing aircraft.
      This platform aids in the efficient planning and management of the plane's flight path.
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
        Designed a control system for an RC car that allows the car to self
        optimize lap times by utilizing onboard IMU sensors to maximize traction
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
        I created an online cockpit display panel for pilots with primary flight instruments. 
        Featuring advanced programming techniques using scalable vector graphics (SVG) and javascript, it can synchronize telemetry data to create a highly responsive and efficient display interface.
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
