import React, { useState } from 'react';

export default function ToggleSwitch() {
  const [isClicked, setClick] = useState(true);

  const handleClick = () => {
    setClick(isClicked => !isClicked);
  };

  return (
    <button>
      <div onClick={handleClick} className={isClicked ? 'toggle-off' : 'toggle-on'}></div>
      <div onClick={handleClick} className={isClicked ? 'circle-off' : 'circle-on'}></div>
      <div className='text'>{isClicked ? 'OFF' : 'ON'}</div>
    </button>

  );
}

// export default class ToggleSwitch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isOn: false };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     if (this.state.isOn === true) {
//       this.setState({ isOn: false });
//     } else {
//       this.setState({ isOn: true });
//     }
//   }

//   render() {
//     if (this.state.isOn === true) {
//       return (
//         <button>
//           <div onClick={this.handleClick} className='toggle-on'></div>
//           <div onClick={this.handleClick} className='circle-on'></div>
//           <div className='text'>On</div>
//         </button>
//       );
//     } else {
//       return (
//         <button>
//           <div onClick={this.handleClick} className='toggle-off'></div>
//           <div onClick={this.handleClick} className='circle-off'></div>
//           <div className='text'>Off</div>
//         </button>
//       );
//     }
//   }
// }
