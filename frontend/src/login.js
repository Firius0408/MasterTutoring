import React from 'react';
import BusinessLogo from './BusinessLogo.png';
import './login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:''
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    
    handleSubmit = (e) => {

    }
    render(){
        return(
            <div>
                <div className ='div-login'>
                     <div>
                        <img src={BusinessLogo} alt=""/> 
                     </div>
                    <div>
                        <form onSubmit>
                            <input type='username' name='username' placeholder='username...' requiredonChange={this.handleChange} />
                            <input type='password' name ='password' placeholder='password...' requiredonChange={this.handleChange} />
                            <button onSubmit={this.handleSubmit}>Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;