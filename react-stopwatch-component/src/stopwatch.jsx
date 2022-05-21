import React, { useState } from 'react';

export default function Stopwatch() {
  const [isElapsedSeconds, setElapsedSeconds] = useState(0);
  const [isActiveInterval, setActiveInterval] = useState();
  const [isClicked, setClick] = useState(false);

  const handleIconClick = () => {
    if (!isClicked) {
      setClick(true);
      setActiveInterval(setInterval(() => tick(), 1000));
    } else {
      setClick(false);
      clearInterval(isActiveInterval);
    }
  };

  const tick = () => {
    setElapsedSeconds(prevCount => prevCount + 1);
  };

  const reset = () => {
    if (!isClicked && isElapsedSeconds > 0) {
      setElapsedSeconds(0);
    }
  };

  return (
      <div>
        <button>
          <div onClick={reset} className='face'></div>
          <div className='time'>{tick}</div>
        </button>
        <i onClick={handleIconClick} className={isClicked
          ? 'fas fa-pause'
          : 'fas fa-play'}>
        </i>
      </div>
  );
}

// export default class Stopwatch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isPaused: true,
//       timer: 0
//     };
//     this.handleIconClick = this.handleIconClick.bind(this);
//     this.setTimer = this.setTimer.bind(this);

//   }

//   handleIconClick() {
//     if (this.state.isPaused === true) {
//       this.timerID = setInterval(() =>
//         this.setState({
//           isPaused: false,
//           timer: this.state.timer + 1
//         }), 1000);
//     } else if (this.state.isPaused === false) {
//       this.setState({ isPaused: true });
//       clearInterval(this.timerID);
//     }
//   }

//   setTimer() {
//     if (this.state.isPaused === true) {
//       this.setState({
//         timer: 0
//       });
//     }
//   }

//   render() {
//     let className;
//     if (this.state.isPaused === true) {
//       className = 'fas fa-play';
//     } else {
//       className = 'fas fa-pause';
//     }
//     return (
//       <div>
//         <button>
//           <div onClick={this.handleWatchClick} className='face'></div>
//           <div className='time'>{this.state.timer}</div>
//         </button>
//         <i onClick={this.handleIconClick} className={className}></i>
//       </div>
//     );
//   }
// }
