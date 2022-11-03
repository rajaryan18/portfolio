import React, { useState } from 'react';
import './Main.css';
import projects from './utils/Projects.json';
import { Projects } from './utils/Projects';
import { AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineClose } from 'react-icons/ai';

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
    const [counter, setCounter] = useState<number>(0);

    const leftClick = (): void => {
        let count: number = (counter-1)%project.length;
        if(count == -1) count = project.length-1;
        setCounter(count);
    };

    const rightClick = (): void => {
        let count: number = (counter+1)%project.length;
        setCounter(count);
    };

    const setSkill = (skill: string): void => {
        if(skill === "web") {
            setProject(projects.web);
            setHeaderModal("Web Development");
        } else if(skill === "robotics") {
            setProject(projects.robotics);
            setHeaderModal("Robotics");
        } else if(skill === "ml") {
            setProject(projects.ml);
            setHeaderModal("Machine Learning");
        } else if(skill === "misc") {
            setProject(projects.Misc);
            setHeaderModal("Miscelleneous");
        } else if(skill === "blockchain") {
            setProject(projects.blockchain);
            setHeaderModal("Blockchain Development");
        } else {
            setHeaderModal("Codeforces");
            // get codeforces
            
        }
        openModal();
    }

    return (
        <>
            <div className={`main-container ${show ? 'main-container-after' : 'main-rotate-clock'}`}>
                {/* <div className='main-img'><img src="https://github.com/rajaryan18/portfolio/blob/main/src/images/blue-removebg-preview.png?raw=true" alt="blue" /></div> */}
                <div className={`${show ? 'main-content-after' : 'main-content'}`}>
                    <div className={`${show ? 'main-skills-after' : 'main-skills'}`}>
                        <div className={`main-skill ${show ? 'main-skill-after' : 'main-rotate-anticlock'}`} onClick={() => setSkill("web")}>Web Development</div>
                        <div className={`main-skill ${show ? 'main-skill-after' : 'main-rotate-anticlock'}`} onClick={() => setSkill("robotics")}>Robotics</div>
                    </div>
                    <div className={`${show ? 'main-skills-after' : 'main-skills middle'}`}>
                        <div className={`main-skill ${show ? 'main-skill-after' : 'main-rotate-anticlock'}`} onClick={() => setSkill("ml")}>Machine Learning</div>
                        <div className={`main-skill ${show ? 'main-skill-after' : 'main-rotate-anticlock'}`} onClick={() => setSkill("cp")}>Competitive Programming</div>
                    </div>
                    <div className={`${show ? 'main-skills-after' : 'main-skills'}`}>
                        <div className={`main-skill ${show ? 'main-skill-after' : 'main-rotate-anticlock'}`} onClick={() => setSkill("blockchain")}>BlockChain</div>
                        <div className={`main-skill ${show ? 'main-skill-after' : 'main-rotate-anticlock'}`} onClick={() => setSkill("misc")}>Miscellaneous</div>
                    </div>
                </div>
                {!show && <div className='main-head main-rotate-anticlock'><h1>SKILLS</h1></div>}
                {show &&
                    <div className='skill-detail'>
                        <h1>
                            {header}
                            <section onClick={closeModal}><AiOutlineClose /></section>
                        </h1>
                        <div className='main-projects'>
                            <div className='left-button' onClick={leftClick}><AiOutlineArrowLeft /></div>
                            <div className='projects-div'>
                                {counter >= 0 && <Projects image={project[counter].image} name={project[counter].name} desc={project[counter].desc} link={project[counter].link} techs={project[counter].techs} />}
                            </div>
                            <div className='right-button' onClick={rightClick}><AiOutlineArrowRight /></div>
                        </div>
                    </div>
                }
            </div>
        </>
    );
}