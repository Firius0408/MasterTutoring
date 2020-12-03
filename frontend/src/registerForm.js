import React from 'react';
import './registerForm.css';

import {render} from "react-dom"; // For CSS

// RegistrationForm contains the subdata and functions to handle changes and submit
class RegistrationForm extends React.Component {
    constructor(props){
        super(props);

        // State holds all the form values
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            email: '',
            confirmEmail: '',
            userName: '',
            password: ''
        };
    }

    // Handle Events for each state value: name, email, phone, etc
    handleFirstNameChange = (event) => {
        this.setState({firstName: event.target.value});
    }

    handleLastNameChange = (event) => {
        this.setState({lastName: event.target.value});
    }

    handlePhoneNumberChange = (event) => {
        this.setState({phoneNumber: event.target.value});
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    handleConfirmEmailChange = (event) => {
        this.setState({confirmEmail: event.target.value})
    }

    handleUserNameChange = (event) => {
        this.setState({userName: event.target.value})
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    // Takes care of submit
    handleSubmit = (event) => {
        // Fill in to handle submit 
        event.preventDefault();
    }

    // Display values
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                        First Name
                        <input type="text" placeholder='Your Answer' value={this.state.firstName} onChange={this.handleFirstNameChange} />
                </label>

                <label>
                    Last Name
                    <input type="text" placeholder='Your Answer' value={this.state.lastName} onChange={this.handleLastNameChange} />
                </label>

                <label>
                    Phone Number
                    <input type="text" placeholder='Your Answer' value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange} />
                </label>

                <label>
                    Email
                    <input type="text" placeholder='Your Answer' value={this.state.email} onChange={this.handleEmailChange} />
                </label>
                
                <label>
                    Confirm Email
                    <input type="text" placeholder='Your Answer' value={this.state.confirmEmail} onChange={this.handleConfirmEmailChange} />
                </label>

                <label>
                    Username
                    <input type="text" placeholder='Your Answer' value={this.state.userName} onChange={this.handleUserNameChange} />
                </label>

                <label>
                    Password
                    <input type="text" placeholder='Your Answer' value={this.state.password} onChange={this.handlePasswordChange} />
                </label>

                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default RegistrationForm;
