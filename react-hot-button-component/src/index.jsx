import React from 'react';
import ReactDOM from 'react-dom';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }

  render() {
    if (this.state.clickCount <= 3) {
      return <button className='cold' onClick={this.handleClick}>Hot Button!</button>;
    } else if (this.state.clickCount <= 6) {
      return <button className='cool' onClick={this.handleClick}>Hot Button!</button>;
    } else if (this.state.clickCount <= 9) {
      return <button className='tepid' onClick={this.handleClick}>Hot Button!</button>;
    } else if (this.state.clickCount <= 12) {
      return <button className='warm' onClick={this.handleClick}>Hot Button!</button>;
    } else if (this.state.clickCount <= 15) {
      return <button className='hot' onClick={this.handleClick}>Hot Button!</button>;
    } else if (this.state.clickCount <= 18 || this.state.clickCount > 18) {
      return <button className='nuclear' onClick={this.handleClick}>Hot Button!</button>;
    } else {
      return <button className='cold' onClick={this.handleClick}>Hot Button!</button>;
    }
  }
}

ReactDOM.render(
  <HotButton />,
  document.querySelector('#root')
);
