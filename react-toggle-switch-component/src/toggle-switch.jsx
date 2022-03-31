import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isOn === true) {
      this.setState({ isOn: false });
    } else {
      this.setState({ isOn: true });
    }
  }

  render() {
    if (this.state.isOn === true) {
      return (
        <button>
          <div onClick={this.handleClick} className='toggle-on'></div>
          <div onClick={this.handleClick} className='circle-on'></div>
        </button>
      );
    } else {
      return (
        <button>
          <div onClick={this.handleClick} className='toggle-off'></div>
          <div onClick={this.handleClick} className='circle-off'></div>
        </button>
      );
    }
  }
}
