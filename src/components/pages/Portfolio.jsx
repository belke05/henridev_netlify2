import React from "react";
import { useState } from "react";
import Particles from "react-particles-js";
import particlesOptions from "../../assets/particlesjs_portfolio.json";
import projectInfo from "../../assets/projectInfo.js";
import UberHeatmap from "../../assets/images/uberheatmaps_mockup.png";
import Switch from "../sub-components/Switch";
import Toggler from "../sub-components/Toggler";
import Gist from "react-gist";

export default function Portfolio() {
  const projectsNames = ["maptee", "jab", "war_stars", "uberheatmap"];
  const [show, setShow] = useState("web");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  function handleCheck(e) {
    const section = e.target.dataset.section;
    setShow(section);
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
          <Toggler checkHandler={handleCheck} checked={show} />
        </div>
        {show === "web" && (
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
        {show === "data" && (
          <div className="data-wrapper">
            <Gist id={`08c4c461c7bcb386cb83ef40ccefa485`}></Gist>
            <script src="https://gist.github.com/belke05/08c4c461c7bcb386cb83ef40ccefa485.js"></script>
            <Gist id={`ba632ecdb12a63e39977d88e30c43ce7`}></Gist>
            <script src="https://gist.github.com/belke05/ba632ecdb12a63e39977d88e30c43ce7.js"></script>
          </div>
        )}
        {show === "dataweb" && (
          <div>
            <a
              href="https://uberheatmaps.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img class="mockupscreen" src={UberHeatmap} alt="mockup-screen" />
            </a>
            <a
              href="https://react-ml.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              link 2
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
