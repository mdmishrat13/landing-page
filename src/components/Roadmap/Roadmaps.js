import React from 'react';
import Roadmap from './Roadmap';
import './roadmap.css'
import section from './../../images/section.png'

const Roadmaps = () => {
    const steps = [
        {
            "id":1,
            "step":"step 1"
        },
        {
            "id":2,
            "step":"step 2"
        },
        {
            "id":3,
            "step":"step 3"
        },
    ]
    return (
        <div className='roadmap'>
            <div className="roadmap-title">
                <h1>AIKUJI</h1>
                <p>Roadmap</p>
            </div>
            <div className="roadmap-cards">
            {steps.map(step=><Roadmap key={step.id} step= {step}></Roadmap>)}
            </div>
            <div className="roadmap-section">
          <img src={section} alt="" />
        </div>
        </div>
    );
};

export default Roadmaps;