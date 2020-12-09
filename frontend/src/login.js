import React from 'react';
import './login.css';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:'',
            password:'',
            success: false,
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    
    handleSubmit = (e) => {
        const apiURL = "http://localhost:4000/user/login";
        fetch(apiURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(this.state)
        })
        .then(response => response.json())
        .then(data => {
            if (data === 'Failed') {
                alert('Incorrect');
            }
            else {
                console.log('Success:', data);
                this.setState({success: true});
                this.props.setLoggedIn(true);
            }
        })
        .catch(err => console.error('Error:', err));
        e.preventDefault();
    }

    render(){
        return(
            <div className = "login">
                <form className = "login-form" onSubmit={this.handleSubmit}>
                    <input type='username' id="loginUserStyle" name='userName' placeholder='Username' onChange={this.handleChange} />
                    <input type='password' id="loginPasswordStyle" name ='password' placeholder='Password' onChange={this.handleChange} />
                     
                    <input type="submit" id="submitStyle" value="Log In" />
                    {this.state.success && <Redirect to="/" />}
                </form>

                <br></br>
            </div>

            


            
        )
    }
}

export default Login;