import React from "react";
import portFolioInfo from "../../assets/data/portfolio.json";
import uberheatsmap_mockup from "../../assets/images/uberheatmaps_mockup.png";
import uber_logo from "../../assets/images/uber_logo.png";
import ML_logo from "../../assets/images/ML_react_logo.png";
import ObjectDetectorLogo from "../../assets/images/ObjectDetection_logo.png";
import MLReact_mockup from "../../assets/images/ML_react_mockup.png";

export default function DataWebProject({
  handleProjectChange,
  selectedProject
}) {
  console.log(selectedProject);
  const logoRefs = {
    uberheatmap: uber_logo,
    MLReact: ML_logo,
    ObjectDetector: ObjectDetectorLogo
  };
  const mockupRefs = {
    uberheatmap: uberheatsmap_mockup,
    MLReact: MLReact_mockup,
    ObjectDetector: MLReact_mockup
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
