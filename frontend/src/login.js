import React from 'react';
import BusinessLogo from './BusinessLogo.png'
import './login.css'

class Login extends React.Component{
    state={
        email:'',
        pwd:''
    }
    handleChange =(e) => {
        const {name,value}=e.target;
        this.setState({[name]:value})
    }
    handleSubmit =(e) =>{

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
                            <input type='username' name='esername'placeholder='username...' requiredonChange={this.handleChange} />
                            <input type='password' name ='pwd' placeholder='password...' required onChange={this.handleChange}/>
                            <button onSubmit>Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;