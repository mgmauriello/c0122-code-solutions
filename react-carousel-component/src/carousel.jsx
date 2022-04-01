import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentView: 1 };
    this.arrowLeft = this.arrowLeft.bind(this);
    this.arrowRight = this.arrowRight.bind(this);
    this.imageId = this.imageId.bind(this);
  }

  arrowLeft() {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.arrowRight(), 3000);
    if (this.state.currentView <= 1) {
      this.setState({ currentView: this.props.images.length });
    } else {
      this.setState(previousState => ({
        currentView: previousState.currentView - 1
      }));
    }
  }

  arrowRight() {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.arrowRight(), 3000);
    if (this.state.currentView >= this.props.images.length) {
      this.setState({ currentView: 1 });
    } else {
      this.setState(previousState => ({
        currentView: previousState.currentView + 1
      }));
    }
  }

  imageId(event) {
    clearInterval(this.timer);
    this.timer = setInterval(() => this.arrowRight(), 3000);
    const id = parseInt(event.target.id);
    this.setState({ currentView: id });
  }

  componentDidMount() {
    this.timer = setInterval(() => this.arrowRight(), 3000);
  }

  render() {
    const images = this.props.images;
    return (
      <div className='container center'>
        <div className='row position'>
          <div className='column-fourth'>
            <i className='prev-img fas fa-angle-left fa-3x' onClick={this.arrowLeft}></i>
          </div>
          <div className='column-half'>
            {images.map(image => {
              return (
                this.state.currentView === image.id && (
                  <img key={image.id} src={image.url}/>
                )
              );
            })}
            {images.map(image => {
              return (
                this.state.currentView === image.id
                  ? (<i key={image.id} id={image.id} onClick={this.imageId} className='fas fa-circle'></i>)
                  : (<i key={image.id} id={image.id} onClick={this.imageId} className='far fa-circle'></i>)
              );
            })}
          </div>
          <div className='column-fourth center'>
            <i className='next-img fas fa-angle-right fa-3x' onClick={this.arrowRight}></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
