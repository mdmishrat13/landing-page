import React from "react";
import Roadmap from "./Roadmap";
import "./roadmap.css";
import section from "./../../images/section.png";
import sectionStyle from "./../../images/teamTitle.png";

const Roadmaps = () => {
  const steps = [
    {
      id: 1,
      step: "step 1",
    },
    {
      id: 2,
      step: "step 2",
    },
    {
      id: 3,
      step: "step 3",
    },
  ];
  return (
    <div className="roadmap">
      
      <div className="roadmap-cards">
        {/* {steps.map(step=><Roadmap key={step.id} step= {step}></Roadmap>)} */}
        <div className="roadmap-card">
          <h1>AIKUJI TIME :</h1>
          <p>
            This period we look to plan and collaborate using strategic
            partnerships with distinguished personalities across many avenues
            including trusted individuals within the NFT community, celebrities,
            artists, influencers and other NFT projects.
          </p>
          <h1>AIKUJI TIME :</h1>
          <p>
            This period we look to plan and collaborate using strategic
            partnerships with{" "}
          </p>
          <h1>AIKUJI TIME :</h1>
          <p>
            This period we look to plan and collaborate using strategic
            partnerships with This period we look to plan and collaborate using
            strategic partnerships with{" "}
          </p>
        </div>

        <div className="team-title">
        <img src={sectionStyle} alt="" />
        <div className="texts">
          <h1> THE AIKUJI</h1>
          <h2>TEAM</h2>
        </div>
      </div>

        <div className="roadmap-card">
          <h1>AIKUJI TIME :</h1>
          <p>
            This period we look to plan and collaborate using strategic
            partnerships with distinguished personalities across many avenues
            including trusted individuals within the NFT community, celebrities,
            artists, influencers and other NFT projects.
          </p>
          <h1>AIKUJI TIME :</h1>
          <p>
            This period we look to plan and collaborate using strategic
            partnerships with{" "}
          </p>
          <h1>AIKUJI TIME :</h1>
          <p>
            This period we look to plan and collaborate using strategic
            partnerships with This period we look to plan and collaborate using
            strategic partnerships with{" "}
          </p>
        </div>
        <div className="roadmap-card">
          <h1>AIKUJI TIME :</h1>
          <p>
            This period we look to plan and collaborate using strategic
            partnerships with distinguished personalities across many avenues
            including trusted individuals within the NFT community, celebrities,
            artists, influencers and other NFT projects.
          </p>
          <h1>AIKUJI TIME :</h1>
          <p>
            This period we look to plan and collaborate using strategic
            partnerships with{" "}
          </p>
          <h1>AIKUJI TIME :</h1>
          <p>
            This period we look to plan and collaborate using strategic
            partnerships with This period we look to plan and collaborate using
            strategic partnerships with{" "}
          </p>
        </div>
      </div>
      <div className="roadmap-section">
        <img src={section} alt="" />
      </div>
    </div>
  );
};

export default Roadmaps;
