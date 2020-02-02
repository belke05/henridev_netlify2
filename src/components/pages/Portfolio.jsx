import React from "react";
import { useState } from "react";
import Particles from "react-particles-js";
import particlesOptions from "../../assets/data/particlesjs_portfolio.json";
import Toggler from "../sub-components/Toggler";
import WebProject from "../sub-components/WebProject";
import DataWebProject from "../sub-components/DataWebProject";
import DataProject from "../sub-components/DataProject";

export default function Portfolio() {
  const [projectsNames, setProjectNames] = useState([
    "maptee",
    "jab",
    "war_stars",
    "mapti"
  ]);
  const [show, setShow] = useState("web");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  function handleCheck(e) {
    const section = e.target.dataset.section;
    if (section === "dataweb") {
      setProjectNames(["uberheatmap", "MLReact", "ObjectDetector"]);
    }
    if (section === "web") {
      setProjectNames(["maptee", "jab", "war_stars", "mapti"]);
    }
    if (section === "data") {
      setProjectNames(["maptee", "jab", "war_stars", "mapti"]);
    }
    setShow(section);
  }

  function handleProjectChange(e) {
    if (!e.target.className) return;
    const arrow = e.target.className;
    if (arrow === "arrowback" && selectedProjectIndex === 0) {
      return setSelectedProjectIndex(projectsNames.length - 1);
    }
    if (
      arrow === "arrowforward" &&
      projectsNames.length - 1 === selectedProjectIndex
    ) {
      return setSelectedProjectIndex(0);
    }
    if (arrow === "arrowback" && selectedProjectIndex > 0) {
      setSelectedProjectIndex(selectedProjectIndex - 1);
    } else if (
      arrow === "arrowforward" &&
      selectedProjectIndex < projectsNames.length - 1
    ) {
      setSelectedProjectIndex(selectedProjectIndex + 1);
    }
  }

  return (
    <div className="portfolio-wrapper">
      <Particles className="particle_wrapper2" params={particlesOptions} />
      <div className="portfolio_grid_wrapper">
        <div className="portfolio_switch_container">
          <Toggler checkHandler={handleCheck} checked={show} />
        </div>
        {show === "web" && (
          <WebProject
            handleProjectChange={handleProjectChange}
            selectedProject={projectsNames[selectedProjectIndex]}
          />
        )}
        {show === "dataweb" && (
          <DataWebProject
            handleProjectChange={handleProjectChange}
            selectedProject={projectsNames[selectedProjectIndex]}
          />
        )}
        {show === "data" && <DataProject />}
      </div>
    </div>
  );
}
