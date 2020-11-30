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
            * {" "} 
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

class TextField extends React.Component {

  static defaultProps = {
    locked: false,
    focussed: false,
    value: '',
    error: '',
    label: '',
    onChange: () => '',
  };

  constructor(props) {
    super(props);
    this.state = {
      focussed: (props.locked && props.focussed) || false,
      value: props.value || '',
      error: props.error || '',
      label: props.label || '',
    };
  }

  onChange = event => {
    const { id } = this.props;
    const value = event.target.value;
    this.setState({ value, error: '' });
    return this.props.onChange(id, value);
  }

  render() {
    const { focussed, value, error, label } = this.state;
    const { id, type, locked } = this.props;
    const fieldClassName = `field ${(locked ? focussed : focussed || value) && 'focussed'} ${locked && !focussed && 'locked'}`;
    return (
      <div className="textfield">
        <label>
          <input
          id={id}
          type="text"
          value={value}
          placeholder={label}
          onChange={this.onChange}
          onFocus={() => !locked && this.setState({ focussed: true })}
          onBlur={() => !locked && this.setState({ focussed: false })}
          />
        </label>
      </div>
    );
  }    
}

class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: null};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    {/* Send all the inputs to the server, where they are saved to an account*/}
  }

  render() {
    return (
      <button className="submit" onSubmit={this.handleSubmit}>
        Submit
      </button>
    );
  }
}

class Page extends React.Component {
  renderInstructions() {
    return <Instructions />;
  }
  renderGeneral(input) {
    return <General text={input}/>;
  }
  renderDescription(input) {
    return <Description text={input}/>;
  }
  renderTextField() {
    return <TextField label="Your answer"/>;
  }
  renderSubmit() {
    return <Submit />;
  }

  render() {
    return (
      <div>
        {this.renderInstructions()}
        {this.renderGeneral("Name")}
        {this.renderTextField()}
        <p>{"\n"}</p>
        {this.renderGeneral("Email Address")}
        {this.renderTextField()}
        <p>{"\n"}</p>
        {this.renderGeneral("Phone Number")}
        {this.renderTextField()}
        <p>{"\n"}</p>
        {this.renderGeneral("Home Address")}
        {this.renderTextField()}
        <p>{"\n"}</p>
        {this.renderGeneral("Field of Work")}
        {this.renderDescription("If applicable")}
        {this.renderTextField()}
        <p>{"\n"}</p>
        {this.renderGeneral("What subjects can you tutor for?")}
        {this.renderDescription("Ex: Calculus, Biology, Chemistry, U.S. History")}
        {this.renderTextField()}
        <p>{"\n"}</p>
        {this.renderGeneral("Are you able to drive to in-person sessions?")}
        {this.renderTextField()}
        <p>{"\n"}</p>
        {this.renderGeneral("Availability")}
        {this.renderDescription("Ex: Tuesday 2-6 p.m., Weekends 6-8 p.m.")}
        {this.renderTextField()}
        <p>{"\n"}</p>
        {this.renderGeneral("Venmo Username")}
        {this.renderTextField()}
        <p>{"\n"}</p>
        {this.renderSubmit()}
      </div>
    );
  }
}

export default Page;