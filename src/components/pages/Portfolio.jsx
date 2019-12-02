import React from "react";
import { useState } from "react";
import Particles from "react-particles-js";
import particlesOptions from "../../assets/particlesjs_portfolio.json";
import projectInfo from "../../assets/projectInfo.js";
import Switch from "../sub-components/Switch";
import Gist from "react-gist";

export default function Portfolio() {
  const projectsNames = ["maptee", "jab", "war_stars", "uberheatmap"];
  const [webPortfolio, setWebPortfolio] = useState(true);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  function handleCheck(e) {
    console.log(e.target);
    setWebPortfolio(!webPortfolio);
  }

  function handleProjectChange(e) {
    if (!e.target.className) return;
    const arrow = e.target.className;
    if (arrow === "arrowback" && selectedProjectIndex === 0) {
      return setSelectedProjectIndex(2);
    }
    if (arrow === "arrowforward" && selectedProjectIndex === 3) {
      return setSelectedProjectIndex(0);
    }
    if (arrow === "arrowback" && selectedProjectIndex > 0) {
      setSelectedProjectIndex(selectedProjectIndex - 1);
    } else if (arrow === "arrowforward" && selectedProjectIndex < 3) {
      setSelectedProjectIndex(selectedProjectIndex + 1);
    }
  }

  return (
    <div className="portfolio-wrapper">
      <Particles className="particle_wrapper2" params={particlesOptions} />
      <div className="portfolio_grid_wrapper">
        <div className="portfolio_switch_container">
          <span className="portfolio_switch_label">Data</span>
          <Switch checkHandler={handleCheck} checked={webPortfolio} />
          <span className="portfolio_switch_label">Web</span>
        </div>
        {webPortfolio && (
          <div className="web-wrapper grid_item web_wrapper_grid">
            <div className="arrowback" onClick={handleProjectChange}></div>
            <div className="grid_project project_screens">
              <div className="grid_project project_logo">
                <a
                  href={projectInfo[projectsNames[selectedProjectIndex]].url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="project_img_wrapper"
                    style={{
                      backgroundImage: `url(${
                        projectInfo[projectsNames[selectedProjectIndex]].icon
                      })`
                    }}
                  ></div>
                </a>
              </div>
              <a
                href={projectInfo[projectsNames[selectedProjectIndex]].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="mockupscreen"
                  src={projectInfo[projectsNames[selectedProjectIndex]].mockup}
                  alt="mockup-screen"
                />
              </a>
              <a
                href={projectInfo[projectsNames[selectedProjectIndex]].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                live site
              </a>
              <a
                href={projectInfo[projectsNames[selectedProjectIndex]].gitcode}
                target="_blank"
                rel="noopener noreferrer"
              >
                git repo
              </a>
              {/* {projectInfo[selectedProject].infoElement} */}
            </div>
            <div className="grid_project project_logo">
              <a
                href={projectInfo[projectsNames[selectedProjectIndex]].url}
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </div>
            <div className="arrowforward" onClick={handleProjectChange}></div>
          </div>
        )}
        {!webPortfolio && (
          <div className="data-wrapper">
            <Gist id={`5a675c3161d8e4e69551270439b4bea5`}></Gist>
            <script src="https://gist.github.com/belke05/5a675c3161d8e4e69551270439b4bea5.js"></script>
            <Gist id={`ba632ecdb12a63e39977d88e30c43ce7`}></Gist>
            <script src="https://gist.github.com/belke05/ba632ecdb12a63e39977d88e30c43ce7.js"></script>
          </div>
        )}
      </div>
    </div>
  );
}
