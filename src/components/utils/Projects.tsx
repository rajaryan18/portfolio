import React from 'react';
import './Projects.css';

type ProjectProp = {
    image?: string,
    name: string,
    techs: Array<string>,
    desc?: string,
    link: string
}

export const Projects = (props: ProjectProp) => {
    return (
        <div className='project-container'>
            <img src={props.image} alt={props.name} />
            <div className='project-h1'>
                <h1>{props.name}</h1>
                <p><a href={props.link} target="_blank">View</a></p>
            </div>
            <div className='project-desc'>
                {props.desc}
            </div>
            <div className='project-skill'>
                {props.techs.map((tech: string): React.ReactNode => {
                    return <section>{tech}</section>;
                })}
            </div>
        </div>
    );
};