import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      error: ''
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
      this.setState({ error: 'A password is required.' });
    } else if (this.state.password.length < 8) {
      this.setState({ error: 'Your password is too short.' });
    } else {
      this.setState({ error: '' });
    }
  }

  render() {
    let iconErr = '';
    let iconSuccess = '';
    if (this.state.value === '' || this.state.password.length < 8) {
      iconErr = 'fas ms-2 fa-times error-icon';
    } else {
      iconSuccess = 'fas ms-2 fa-check success-icon';
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='password'>Password</label>
        <input id='password' onChange={this.handleChange} type="password" name='password'
          value={this.state.password}></input>
        <i className={`${iconErr}`}></i>
        <i className={`${iconSuccess}`}></i>
        <p className='error-text'>{this.state.error}</p>
      </form>
    );
  }
}

export default ValidatedInput;
