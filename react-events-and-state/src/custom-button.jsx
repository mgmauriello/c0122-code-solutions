import React, { useState } from 'react';

// export default class CustomButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isClicked: false };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState({ isClicked: true });
//   }

//   render() {
//     if (this.state.isClicked === false) {
//       return (
//         <button onClick={this.handleClick}>Click Me!!</button>
//       );
//     } else {
//       return (
//         <button>Thanks!</button>
//       );
//     }
//   }
// }

export default function CustomButton() {
  const [clicked, setClick] = useState(false);

  if (clicked) {
    return <button onClick={() => setClick()}>Click Me!!</button>;
  } else {
    return <button>Thanks!</button>;
  }
}
