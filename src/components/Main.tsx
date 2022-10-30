import React, { useState } from 'react';
import './Main.css';
import { Modal } from './utils/Modal';
import projects from './utils/Projects.json';
import { Projects } from './utils/Projects';

type ProjectObject = {
    image: string,
    name: string,
    techs: Array<string>,
    link: string,
    desc: string
}

export const Main = () => {
    const [show, setShow] = useState<Boolean>(false);
    const openModal = (): void => {
        setShow(true);
    };
    const closeModal = (): void => {
        setShow(false);
    };

    const [header, setHeader] = useState<string>("");
    const setHeaderModal = (head: string): void => {
        setHeader(head);
    };

    const [project, setProject] = useState<Array<ProjectObject>>([]);

    const setSkill = (skill: string): void => {
        if(skill === "web") setProject(projects.web);
        else if(skill === "robotics") setProject(projects.robotics);
        else if(skill === "ml") setProject(projects.ml);
        else if(skill === "misc") setProject(projects.Misc);
        else if(skill === "blockchain") setProject(projects.blockchain);
        else {
            // get codeforces
            
        }
    }

    return (
        <>
            {show && 
                <Modal show={show} onCancel={closeModal} header={header}>
                    
                </Modal>
            }  
            <div className='main-container'>
                {/* <div className='main-img'><img src="https://github.com/rajaryan18/portfolio/blob/main/src/images/blue-removebg-preview.png?raw=true" alt="blue" /></div> */}
                <div className='main-content'>
                    <div className='main-skills'>
                        <div className='main-skill' onClick={() => setSkill("web")}>Web Development</div>
                        <div className='main-skill' onClick={() => setSkill("robotics")}>Robotics</div>
                    </div>
                    <div className='main-skills middle'>
                        <div className='main-skill' onClick={() => setSkill("ml")}>Machine Learning</div>
                        <div className='main-skill' onClick={() => setSkill("cp")}>Competitive Programming</div>
                    </div>
                    <div className='main-skills'>
                        <div className='main-skill' onClick={() => setSkill("blockchain")}>BlockChain</div>
                        <div className='main-skill' onClick={() => setSkill("misc")}>Miscellaneous</div>
                    </div>
                </div>
                <div className='main-head'><h1>SKILLS</h1></div>
            </div>
        </>
    );
}