import React from "react";
import "./team.css";
import avatar1 from "./../../images/avatar1.png";

const TeamCard = ({ person }) => {
  return (
    <div>
      <div className="team-card">
        </div>
      <div className="team-card2">
        </div>
        
        <div className="main-identity">
          <img className="avatar" src={avatar1} alt="" />
          <h2>RUDY</h2>
        </div>
        <div className="card-content">
          <p>
            Rudy is the Founder of AIKUJI and also a creative / branding
            specialist. He oversees the management and creative direction of
            AIKUJI, as well as collaborations and partnerships in the Web2
            space. He focuses on the development of merchandise and manga
            associated with AIKUJI.
          </p>
          <h2>Founder</h2>
        </div>
        {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default TeamCard;
