import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs';
import './Footer.css';

export const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-info">
                <h1>Raj Aryan</h1>
                <h5>EMAIL-ID: 18raj06@gmail.com</h5>
                <h5>PHONE: +91-7259027418</h5>
            </div>
            <div className='footer-icons'>
                <a href="https://github.com/rajaryan18" target="_blank" style={{ color: 'white' }}><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/thatrajaryan/" target="_blank" style={{ color: 'white' }}><AiFillLinkedin /></a>
                <a href="https://www.instagram.com/thatrajaryan/" target="_blank" style={{ color: 'white' }}><BsInstagram /></a>
            </div>
        </div>
    );
};