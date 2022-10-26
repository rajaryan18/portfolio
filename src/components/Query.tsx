import React, { useState } from 'react';
import './Query.css';

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

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
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