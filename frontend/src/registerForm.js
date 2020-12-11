import React from 'react';
import './registerForm.css';
import { Redirect } from 'react-router-dom';

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
            password: '',
            success: false,
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
        const { email, confirmEmail } = this.state;
        if (email !== confirmEmail) {
            alert('Emails do not match');
            event.preventDefault();
            return;
        }
        const apiURL = 'http://localhost:4000/user/add';
        fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            this.setState({success: true});
        })
        .catch(err => console.error('Error:', err));
        event.preventDefault();
    }

    // Display values
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className = 'div-instructions'>
                    Create an Account
                </div>

                <div className = 'div-required'>Required Fields</div>
                <br></br>
                
                <label>
                    First Name
                    <input type="text" value={this.state.firstName} onChange={this.handleFirstNameChange} />
                </label>

                <label>
                    Last Name
                    <input type="text" value={this.state.lastName} onChange={this.handleLastNameChange} />
                </label>

                <label>
                    Phone Number
                    <input type="tel" value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange} pattern="[0-9]{10}"/>
                </label>

                <label>
                    Email
                    <input type="email" value={this.state.email} onChange={this.handleEmailChange} />
                </label>
                
                <label>
                    Confirm Email
                    <input type="email" value={this.state.confirmEmail} onChange={this.handleConfirmEmailChange} />
                </label>

                <label>
                    Username
                    <input type="username" value={this.state.userName} onChange={this.handleUserNameChange} />
                </label>

                <label>
                    Password
                    <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                </label>

                <br></br><br></br>
                
                <input type="submit" id="submitButton" value="Sign-Up" />
                {this.state.success && <Redirect to="/" />}
            </form>
        )
    }
}

export default RegistrationForm;
