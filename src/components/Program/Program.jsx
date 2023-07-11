import React from 'react';
import './Program.css';
import { programsData } from '../../data/programsData.js';

const Program = () => {
    return (
        <div className="program" id="program">
            <div className="program-header">
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='stroke-text'>to shape you</span>
            </div>

            <div className="program-categories">
                {programsData.map((Program) => (
                    <div className="category">
                        {Program.image}
                        <span>{Program.heading}</span>
                        <span>{Program.details}</span>
                    <div className="join-now"><span>Join Now</span></div>


                    </div>
                ))}
            </div>


        </div>
    );
}

export default Program;
