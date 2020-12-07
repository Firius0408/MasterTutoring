import React from 'react';
import ReactDOM from 'react-dom';
import './tutorform.css';
import { Redirect } from 'react-router-dom';

class Instructions extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">
          Become a Tutor
        </h1>
        <p className="introduction">
          Fill out the form below to finalize your account as a Tutor. If a student matches with you,
          your account will receive a notification and you will have an opportunity to set up a
          tutoring session. 
        </p>
        
        <div>
        <br></br>
          <p className="required1">
            {"\n"} * {" "} 
          </p>
          <p className="required2">
            Required Fields
          </p>
          <p>
            {"\n"}
          </p>
        </div>
      </div>
    );
  }
}

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: null,};
  }
  
  render() {
    return (
      <div>
        <p className="general2">
           * {""}
        </p>
        <p className="general1">
          {this.props.text} {" "} 
        </p>
        
      </div>
    );
  }
}

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: null,};
  }
  
  render() {
    return (
      <div>
        <p className="description">
          {this.props.text}
        </p>
      </div>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:'',
      lastName:'',
      email:'',
      confirmEmail:'',
      phone:'',
      subjects:'',
      canDrive: false,
      availability:'',
      success: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    const { email, confirmEmail } = this.state;
    if (email !== confirmEmail) {
        alert('Emails do not match');
        return;
    }
    const apiURL = "http://localhost:4000/tutor/add";
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
  
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <General text = 'First Name' />
          <input type = 'text' name = 'firstName' onChange={this.handleChange} />
          <General text = 'Last Name' />
          <input type = 'text' name = 'lastName' onChange={this.handleChange} />
          <General text = 'Email' />
          <input type = 'email' name = 'email' onChange={this.handleChange} />
          <General text = 'Confirm Email' />
          <input type = 'email' name = 'confirmEmail' onChange={this.handleChange} />
          <General text = 'Phone Number' />
          <input type='tel' name ='phone' onChange={this.handleChange} pattern="[0-9]{10}"/>
          <General text = 'What subjects can you tutor for?' />
          {/*<Description text = 'Ex: Calculus, Biology, Chemistry, U.S. History' />*/}
          <select name = 'subjects' value = {this.state.subjects} onChange={this.handleChange}>
            <option value='Math'>Math</option>
            <option value='Science'>Science</option>
            <option value='History'>History</option>
          </select>
          <General text = 'Are you able to drive to in-person sessions?' />
          <select name='canDrive' value={this.state.canDrive} onChange={this.handleChange}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <General text = 'Availability' />
          <Description text = 'Ex: Tuesday 2-6 p.m., Weekends 6-8 p.m.' />
          <input type = 'text' name = 'availability' onChange={this.handleChange} />
          <input type = 'submit' value='Submit' />
          {this.state.success ? <Redirect to="/" /> : <br></br>}
        </form>
      </div>
    )
  }
}

class TutorPage extends React.Component {
  render() {
    return (
      <div>
        <Instructions />
        <Form />
      </div>
    );
  }
}

export default TutorPage;