import React from 'react';
import BusinessLogo from './BusinessLogo.png';
import './login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:'',
            password:''
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
        .then(data => console.log('Success:', data))
        .catch(err => console.error('Error:', err));
        e.preventDefault();
    }

    render(){
        return(
            <div>
                <div className ='div-login'>
                     <div>
                        <img src={BusinessLogo} alt=""/> 
                     </div>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <input type='username' name='userName' placeholder='username...' onChange={this.handleChange} />
                            <input type='password' name ='password' placeholder='password...' onChange={this.handleChange} />
                            <button>Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;