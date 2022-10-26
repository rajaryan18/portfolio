import React from 'react';
import './Backdrop.css';
import { createPortal } from 'react-dom';

type BackdropProps = {
    transparent?: string,
    onClick?: React.MouseEventHandler<HTMLInputElement>
}

export const Backdrop = ({ transparent, onClick }: BackdropProps) => {
    const container = document.getElementById('backdrop')!
    // const root = createPortal();

    return createPortal(
        <div className={`backdrop ${transparent && 'transparent'}`} onClick={onClick}></div>, container
    );
};