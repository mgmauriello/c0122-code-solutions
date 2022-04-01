import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      error: '',
      icon: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.password === '') {
      this.setState({ icon: 'fas fa-times error-icon ms-2' });
      this.setState({ error: 'A password is required.' });
    } else if (this.state.password.length < 8) {
      this.setState({ icon: 'fas fa-times error-icon ms-2' });
      this.setState({ error: 'Your password is too short.' });
    } else {
      this.setState({ icon: 'fas fa-check success-icon ms-2' });
      this.setState({ error: '' });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='password'>Password</label>
        <input id='password' onChange={this.handleChange} type="password" name='password'
          value={this.state.password}></input>
        <i className={this.state.icon}></i>
        <p className='error-text'>{this.state.error}</p>
      </form>
    );
  }
}

export default ValidatedInput;
