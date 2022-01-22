import React from "react";
import clsx from "clsx";
import styles from "./svg.module.css";

const SVGList = [
  {
    title: "Top",
    Svg: require("./_imgs/hermes_top.svg").default,
  },
  {
    title: "Bottom",
    Svg: require("./_imgs/hermes_bottom.svg").default,
  },
];

function SVGimage({ title, Svg }) {
    return (
      <div className={clsx("col col--6")}>
        <div className="text--center">
          <Svg className={styles.featureSvg} alt={title} />
          <div className="text--center padding-horiz--md">
            <h3>{title}</h3>
          </div>
        </div>
      </div>
    );
}

export default function SVGimages() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {SVGList.map((props, idx) => (
            <SVGimage key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
