import React, { useState, useEffect } from 'react';
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
    const [show, setShow] = useState<Boolean>(true);
    const closeModal = (): void => {
        setShow(false);
    };

    const codeforces = new Map([
        ['pupil', 'green'],
        ['newbie', 'gray'],
        ['specialist', 'light blue'],
        ['expert', 'dark blue'],
        ['candidate master', 'purple'],
        ['master', 'yellow']
    ]);

    const [header, setHeader] = useState<string>("Codeforces");
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

    useEffect(() => {
        const getCodeforces = async (): Promise<void> => {
            // https://codeforces.com/api/user.info?handles
            await fetch("https://codeforces.com/api/user.info?handles=rajaryan18")
            .then((response) => response.json())
            .then((data) => {
                const projObj: ProjectObject[] = [{
                    image: data.result[0].titlePhoto,
                    name: "RajAryan18",
                    link: "https://codeforces.com/profile/RajAryan18",
                    techs: [data.result[0].rating, data.result[0].rank],
                    desc: ""
                }]
                setProject(projObj);
            })
            .catch((err) => console.log(err));
            console.log(project);
        }

        header === "Codeforces" && getCodeforces();
    }, [header]);

    const setSkill = (skill: string): void => {
        setCounter(0);
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
        }
        // openModal();
        setShow(true);
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
                            {header !== "Codeforces" && <div className='left-button' onClick={leftClick}><AiOutlineArrowLeft /></div>}
                            <div className='projects-div'>
                                {header !== "Codeforces" && counter >= 0 && <Projects image={project[counter].image} name={project[counter].name} desc={project[counter].desc} link={project[counter].link} techs={project[counter].techs} />}
                                {header === "Codeforces" && project.length > 0 &&
                                    <div className='codeforces'>
                                        <img src={project[0].image} alt={project[0].name} height="inherit" width="inherit" />
                                        <div className='codeforces-details' style={{ color: codeforces.get(project[0].techs[1]) }}>
                                            <h1>{project[0].name}</h1>
                                            <p><b>Rating:</b> {project[0].techs[0]}</p>
                                            <p><b>Rank:</b> {project[0].techs[1].toUpperCase()}</p>
                                        </div>
                                    </div>
                                }
                            </div>
                            {header !== "Codeforces" && <div className='right-button' onClick={rightClick}><AiOutlineArrowRight /></div>}
                        </div>
                    </div>
                }
            </div>
        </>
    );
}