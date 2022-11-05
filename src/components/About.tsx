import React, { useState } from 'react';
import './About.css';

export const About = () => {
    const about: string = "CSE Undergrad Student at Birla Institute of Technology, Mesra. I am an explorer who likes to learn by diving deep into the topic and hands on projects";
    const [rotate, setRotate] = useState<boolean>(false);
    const rotateDiv = (): void => {
        setRotate(!rotate);
    }
    return (
        <>
            {!rotate ? <div className={`about appear`}>
                <div className='about-container'>
                    <div className='about-h1'><h1>RAJ ARYAN</h1></div>
                    <div className='about-text'>
                        {about}
                    </div>
                    <div className="about-button" onClick={rotateDiv}>
                        MORE
                    </div>
                </div>
                <div className='about-image'>

                    </div>
            </div> :
            <div className={`more-info appear`}>
                <h1>EDUCATION</h1>
                <ul style={{ listStyle: 'none' }}>
                    <li className="more-info-heading">
                        <h3>Delhi Public School Bangalore North</h3>
                        <h5>CBSE</h5>
                        <ul>
                            <li>93% in 10th Boards</li>
                            <li>95% in 12th Boards</li>
                        </ul>
                        <h4>Achievements</h4>
                        <ul>
                            <li>Under-17 Cricket Team</li>
                            <li>Runners Up in Invictus</li>
                        </ul>
                    </li>
                    <li className="more-info-heading">
                        <h3>Birla Institute of Technology</h3>
                        <h5>Computer Science and Engineering</h5>
                        <h5>2021-2025</h5>
                    </li>
                </ul>
                <div className="about-button" onClick={rotateDiv}>
                    BACK
                </div>
            </div>}
        </>
    );
};