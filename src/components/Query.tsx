import React, { useState } from 'react';
import './Query.css';
import { send } from '@emailjs/browser';

export const Query = () => {
    type Form = {
        email: string,
        message: string
    }
    const [ data, setData ] = useState<Form>({
        email: '',
        message: ''
    });

    const { email, message }: Form = data;

    var template = {
        from_name: email,
        message: message
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        send("service_digiio2", "template_q4csgut", template, "vXCGI1-XeJDnLYqtJ")
        .then(function(res) {
            console.log("Success");;
        }, function(err) {
            console.log("Error: ", err);
        });
        setData({
            email: '',
            message: ''
        })
    }

    return (
        <div className='query-container'>
            <div className="query-text">
                <h1>REACH OUT</h1>
            </div>
            <div className="query-vr"></div>
            <div className="query-form">
                <form className='query-form' onSubmit={onSubmitHandler}>
                    <input type="email" placeholder='EMAIL ID' value={email} name="email" onChange={onChangeHandler} required />
                    <input type="text" placeholder='Message' value={message} name="message" onChange={onChangeHandler} required />
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    );
};