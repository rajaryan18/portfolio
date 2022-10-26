import React from 'react';
import './About.css';

export const About = () => {
    const about: string = "CSE Undergrad Student at Birla Institute of Technology, Mesra. I am an explorer who likes to learn by diving deep into the topic and hands on projects";
    
    return (
        <div className='about'>
            <div className='about-h1'><h1>RAJ ARYAN</h1></div>
            <div className='about-container'>
                <div className='about-text'>
                    {about}
                </div>
                <div className='about-image'>

                </div>
            </div>
        </div>
    );
};