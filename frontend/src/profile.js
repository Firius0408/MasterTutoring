import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
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
            .then(data => this.setState(data))
            .catch(err => console.error('Error:', err));
        })
        .catch(err => console.error('Error:', err));
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {

    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange} />
                <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange} />
                <input type='text' name='phoneNumber' value={this.state.phoneNumber} onChange={this.handleChange} />
                <input type='email' name='email' value={this.state.email} onChange={this.handleChange} />
                <input type='username' name='userName' value={this.state.userName} onChange={this.handleChange} />
                <input type='password' name='password' placeholder='password' value={this.state.password} onChange={this.handleChange} />
                <input type='submit' value='Edit Profile' />
            </form>
    )   
    }
}

export default Profile;