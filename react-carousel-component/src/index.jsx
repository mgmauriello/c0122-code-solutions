import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const images = [
  {
    id: 1,
    url: '../dist/images/001.png'
  },
  {
    id: 2,
    url: '../dist/images/002.png'
  },
  {
    id: 3,
    url: '../dist/images/003.png'
  },
  {
    id: 4,
    url: '../dist/images/004.png'
  },
  {
    id: 5,
    url: '../dist/images/005.png'
  }
];

ReactDOM.render(
  <Carousel images={images} />,
  document.querySelector('#root')
);
