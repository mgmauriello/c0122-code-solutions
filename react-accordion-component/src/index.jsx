import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const topics = [
  {
    id: '001',
    tab: 'Hisoka Morow',
    content: ` Hisoka is a Transmuter endowed with a powerful, sinister aura
      that disquieted Wing and Gon even after the latter learned Nen.`

  },
  {
    id: '002',
    tab: 'Killua Zoldyck',
    content: ` As a Transmuter, Killua's most efficient in changing the
      properties and shape of his aura. Just like Gon's, Killua's talent
      is said to be absolutely astounding, found only in one out of ten million people.`
  },
  {
    id: '003',
    tab: 'Chrollo Lucilfer',
    content: ` Chrollo is a Specialist. His talent for Nen is judged prodigious
      not only for his age but even by the standards of masters in the discipline.`
  }
];

ReactDOM.render(
  <Accordion topics={topics}/>,
  document.querySelector('#root')
);
