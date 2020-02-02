import React from "react";
import portFolioInfo from "../../assets/data/portfolio.json";
import maptee_logo from "../../assets/images/maptee_logo.png";
import jab_logo from "../../assets/images/jab_logo.png";
import war_stars_logo from "../../assets/images/war_stars_logo.png";
import jab_mockup from "../../assets/images/jab_mockup.png";
import maptee_mockup from "../../assets/images/maptee_mockup.png";
import mapti_mockup from "../../assets/images/mapti_mockup.png";
import mapti_logo from "../../assets/images/mapti_logo.png";
import war_stars_mockup from "../../assets/images/warstars_mockup.png";

export default function WebProject({ handleProjectChange, selectedProject }) {
  console.log(selectedProject);
  const logoRefs = {
    maptee: maptee_logo,
    jab: jab_logo,
    war_stars: war_stars_logo,
    mapti: mapti_logo
  };
  const mockupRefs = {
    jab: jab_mockup,
    maptee: maptee_mockup,
    war_stars: war_stars_mockup,
    mapti: mapti_mockup
  };

  return (
    <div className="web-wrapper grid_item web_wrapper_grid">
      <div className="arrowback" onClick={handleProjectChange}></div>
      <div className="grid_project project_screens">
        <div className="grid_project project_logo">
          <a
            href={portFolioInfo[selectedProject].url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="project_img_wrapper"
              style={{
                backgroundImage: `url(${logoRefs[selectedProject]})`
              }}
            ></div>
          </a>
        </div>
        <a
          href={portFolioInfo[selectedProject].url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="mockupscreen"
            src={mockupRefs[selectedProject]}
            alt="mockup-screen"
          />
        </a>
        <a
          href={portFolioInfo[selectedProject].url}
          target="_blank"
          rel="noopener noreferrer"
        >
          live site
        </a>
        <a
          href={portFolioInfo[selectedProject].gitcode}
          target="_blank"
          rel="noopener noreferrer"
        >
          git repo
        </a>
        {/* {projectInfo[selectedProject].infoElement} */}
      </div>
      <div className="grid_project project_logo">
        <a
          href={portFolioInfo[selectedProject].url}
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
      <div className="arrowforward" onClick={handleProjectChange}></div>
    </div>
  );
}
