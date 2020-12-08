import React from 'react';
import { Redirect } from 'react-router-dom';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            phoneNumber: 0,
            email: '',
        };
    }

    componentDidMount() {
        const apiURL = 'http://localhost:4000/user/cookie';
        fetch(apiURL, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include'
        })
        .then(response => response.json())
        .then(data => {
            const apiURL = 'http://localhost:4000/user/' + data.userName;
            fetch(apiURL, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    id: data._id,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    phoneNumber: data.phoneNumber,
                    email: data.email,
                });
            })
            .catch(err => console.error('Error:', err));
        })
        .catch(err => console.error('Error:', err));
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        const { email, confirmEmail } = this.state;
        if (confirmEmail && email !== confirmEmail) {
            alert('Emails do not match');
            return;
        }
        const apiURL = "http://localhost:4000/user/update/" + this.state.id;
        fetch(apiURL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(data => console.log('Success', data))
        .catch(err => console.error('Error:', err));
        event.preventDefault();
    }

    render() {
        return(
          <div>
            {this.props.loggedIn ? 
                <form onSubmit={this.handleSubmit}>
                <input type='text' name='firstName' placeholder='First Name' value={this.state.firstName} onChange={this.handleChange} />
                <input type='text' name='lastName' placeholder='Last Name' value={this.state.lastName} onChange={this.handleChange} />
                <input type='text' name='phoneNumber' placeholder='Phone Number' value={this.state.phoneNumber} onChange={this.handleChange} />
                <input type='email' name='email' placeholder='Email' value={this.state.email} onChange={this.handleChange} />
                <input type='email' name='confirmEmail' placeholder='Confirm Email' value={this.state.confirmEmail} onChange={this.handleChange} />
                <input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleChange} />
                <input type='submit' value='Edit Profile' />
            </form>
            :
            <Redirect push to="/" />
            }
          </div>
    )   
    }
}

export default Profile;