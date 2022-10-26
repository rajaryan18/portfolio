import React from 'react';
import './Card.css';

type CardProp = {
    elevation?: string,
    color?: string,
    size?: string,
    children?: React.ReactNode
}

export const Card = (props: CardProp) => {
    return (
        <div className={`card-container ${props.elevation} ${props.color} ${props.size}`}>
            {props.children}
        </div>
    );
};