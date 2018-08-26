import React, { Component } from 'react';
import { FormContext } from '../formContext';
import { FormComponent } from '../components/FormComponent';

export class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            valid: true,
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value})
    }

    handleSubmit = () => {
        alert('Form submited!');
        this.setState({ name: '', email: '', subject: ''});
    }

    validate = () => {
        const { name, email, subject } = this.state;
        const valid = name.length !== 0 && email.length !== 0 && subject.length !== 0;
        this.setState({ valid });
    }

    render() {
        return (
            <FormContext.Provider
                value={{
                    state: this.state,
                    handleChange:
                    this.handleChange,
                    handleSubmit: this.handleSubmit,
                    valid: this.state.valid,
                    handleValidation: this.validate,
                }}
            >
               <FormComponent />
            </FormContext.Provider>
          );
    }
}