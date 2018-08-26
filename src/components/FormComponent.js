import React from 'react';
import { FormContext } from '../formContext';

export const FormComponent = () => {
    return (
        <FormContext.Consumer>
            {data => (
                <form onSubmit={data.handleSubmit}>
                    <input
                        name="name"
                        placeholder="What is your name?"
                        className="name"
                        value={data.state.name}
                        onChange={data.handleChange}
                        required
                    />

                    <input
                        name="email"
                        placeholder="What is your email?"
                        className="email"
                        value={data.state.email}
                        onChange={data.handleChange}
                        type="email"
                        required
                    />
                    <textarea
                        rows="4"
                        cols="50"
                        name="subject"
                        value={data.state.subject}
                        placeholder="Please enter your message"
                        className="message"
                        onChange={data.handleChange}
                        required
                    />
                    <input name="submit" className="btn" type="submit" value="Send" onClick={data.handleValidation} />
                    {!data.valid && <div className="error">All fields are mandatory!</div>}
                </form> 
            )}
        </FormContext.Consumer>
    );
}

