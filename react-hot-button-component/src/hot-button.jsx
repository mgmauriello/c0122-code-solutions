import React, { useState } from 'react';

// export default class HotButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       clickCount: 0
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState({ clickCount: this.state.clickCount + 1 });
//   }

//   render() {
//     if (this.state.clickCount <= 3) {
//       return <button className='cold' onClick={this.handleClick}>Hot Button!</button>;
//     } else if (this.state.clickCount <= 6) {
//       return <button className='cool' onClick={this.handleClick}>Hot Button!</button>;
//     } else if (this.state.clickCount <= 9) {
//       return <button className='tepid' onClick={this.handleClick}>Hot Button!</button>;
//     } else if (this.state.clickCount <= 12) {
//       return <button className='warm' onClick={this.handleClick}>Hot Button!</button>;
//     } else if (this.state.clickCount <= 15) {
//       return <button className='hot' onClick={this.handleClick}>Hot Button!</button>;
//     } else if (this.state.clickCount <= 18 || this.state.clickCount > 18) {
//       return <button className='nuclear' onClick={this.handleClick}>Hot Button!</button>;
//     } else {
//       return <button className='cold' onClick={this.handleClick}>Hot Button!</button>;
//     }
//   }
// }

export default function HotButton() {

  const [count, setCount] = useState(0);

  if (count <= 3) {
    return <button className='cold' onClick={() => setCount(count + 1)}>Hot Button!</button>;
  } else if (count <= 6) {
    return <button className='cool' onClick={() => setCount(count + 1)}>Hot Button!</button>;
  } else if (count <= 9) {
    return <button className='tepid' onClick={() => setCount(count + 1)}>Hot Button!</button>;
  } else if (count <= 12) {
    return <button className='warm' onClick={() => setCount(count + 1)}>Hot Button!</button>;
  } else if (count <= 15) {
    return <button className='hot' onClick={() => setCount(count + 1)}>Hot Button!</button>;
  } else if (count <= 18 || count > 18) {
    return <button className='nuclear' onClick={() => setCount(count + 1)}>Hot Button!</button>;
  } else {
    return <button className='cold' onClick={() => setCount(count + 1)}>Hot Button!</button>;
  }
}
