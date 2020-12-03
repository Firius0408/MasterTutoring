import React from 'react';
import './registerForm.css';

import {render} from "react-dom"; // For CSS

const styles = {
    myInput: {
        color : 'red'
        // width: 100%,
        // height: 56px,
        // border-radius: 4px;
        // position: relative;
        // background-color: rgba(0, 0, 0, 0.05);
        // transition: 0.3s all;
    }
}

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

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    // Takes care of submit
    handleSubmit = (event) => {
        // Fill in to handle submit 
        console.log(this.state.firstName);
        console.log(this.state.lastName);
        console.log(this.state.phoneNumber);
        console.log(this.state.email);
        console.log(this.state.confirmEmail);
        console.log(this.state.password);
        event.preventDefault();
    }

    // Display values
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name:
                    <input 
                        type="text" 
                        // className={styles.myInput} 
                        value={this.state.firstName} 
                        onChange={this.handleFirstNameChange} />
                </label>

                <label>
                    Last Name:
                    <input type="text" value={this.state.lastName} onChange={this.handleLastNameChange} />
                </label>

                <label>
                    Phone Number:
                    <input type="text" value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange} />
                </label>

                <label>
                    Email:
                    <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
                </label>
                
                <label>
                    Confirm Email:
                    <input type="text" value={this.state.confirmEmail} onChange={this.handleConfirmEmailChange} />
                </label>

                <label>
                    Password:
                    <input type="text" value={this.state.password} onChange={this.handlePasswordChange} />
                </label>

                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default RegistrationForm;
