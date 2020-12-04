import React from 'react';
import ReactDOM from 'react-dom';
import './tutorform.css';

class Instructions extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">
          Become a Tutor
        </h1>
        <p className="introduction">
          Fill out the form below to finalize your account as a Tutor. If a Student matches with you,
          your account will receive a notification and you will have an opportunity to set up a
          tutoring session. All tutors must be at least 18 years old and have a Venmo.
        </p>
        <div>
          <p className="required1">
            {"\n"} * {" "} 
          </p>
          <p className="required2">
            Required
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
        <p className="general1">
          {this.props.text} {" "} 
        </p>
        <p className="general2">
           * {""}
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
      phoneNumber:'',
      subject:'',
      driver:'',
      availability:''
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => { }
  
  render(){
    return(
      <div>
        <form onSubmit>
          <General text = 'First Name' />
          <input type = 'text' name = 'firstName' onChange={this.handleChange} />
          <General text = 'Last Name' />
          <input type = 'text' name = 'lastName' onChange={this.handleChange} />
          <General text = 'Email' />
          <input type = 'email' name = 'email' onChange={this.handleChange} />
          <General text = 'Confirm Email' />
          <input type = 'email' name = 'confirmEmail' onChange={this.handleChange} />
          <General text = 'Phone Number' />
          <input type='text' name ='phoneNumber' onChange={this.handleChange} />
          <General text = 'What subjects can you tutor for?' />
          <Description text = 'Ex: Calculus, Biology, Chemistry, U.S. History' />
          <input type = 'text' name = 'subject' onChange={this.handleChange} />
          <General text = 'Are you able to drive to in-person sessions?' />
          <input type = 'text' name = 'driver' onChange={this.handleChange} />
          <General text = 'Availability' />
          <Description text = 'Ex: Tuesday 2-6 p.m., Weekends 6-8 p.m.' />
          <input type = 'text' name = 'availability' onChange={this.handleChange} />
          <button onSubmit={this.handleSubmit}>Submit</button>
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