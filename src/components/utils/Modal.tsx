import React from 'react';
import { Backdrop } from './Backdrop';
import { createPortal } from 'react-dom';
import './Modal.css';
import { AiOutlineClose } from 'react-icons/ai'

type ModalProp = {
    children?: React.ReactNode,
    onCancel: React.MouseEventHandler<HTMLInputElement>,
    show: Boolean,
    header: string
};

const ModalOverlay = (props: ModalProp): JSX.Element => {
    const content: React.ReactNode = (
        <div className='modal-container'>
            <div className='modal-header'>
                <h1>{props.header}</h1>
                <section onClick={props.onCancel}><AiOutlineClose /></section>
            </div>
        </div>
    )
    return createPortal(content, document.getElementById("modal")!);
};

export const Modal = (props: ModalProp) => {
    return (
        <>
            {props.show && <Backdrop onClick={props.onCancel} />}
            <div className='modal-page'>
                <ModalOverlay {...props} />
            </div>
        </>
    );
}