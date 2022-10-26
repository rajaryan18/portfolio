import React from 'react';

export const Image = props => {
    return (
        <div className='image-div'>
            <img src={props.src} alt={props.alt} />
        </div>
    );
};