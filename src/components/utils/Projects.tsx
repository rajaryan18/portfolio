import React from 'react';
import './Projects.css';

type ProjectProp = {
    image?: string,
    name: string,
    techs: Array<string>,
    desc: string,
    link: string
}

export const Projects = (props: ProjectProp) => {
    return (
        <div className='project-container'>
            <img src={props.image} alt={props.name} />
            <h1>{props.name}</h1>
            <div className='project-desc'>
                {props.desc}
            </div>
            <div className='project-skill'>
                {props.techs.map((tech: string): React.ReactNode => {
                    return <section>{tech}</section>;
                })}
            </div>
            <p>{props.link}</p>
        </div>
    );
};