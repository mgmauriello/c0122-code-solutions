import React from 'react';

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

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const clickedID = event.target.id;
    if (this.state.currentView === clickedID) {
      this.setState({
        currentView: null
      });
    } else {
      this.setState({
        currentView: clickedID
      });
    }
  }

  render() {
    const listedTopics = topics.map(topic =>
      <li key={topic.id}>
        <h3 onClick={this.handleClick} id={topic.id} className="tab">
          {topic.tab}
        </h3>
        <p className={this.state.currentView === topic.id ? 'content' : 'content hidden'}>
          {topic.content}
        </p>
      </li>
    );
    return (
      <ul>
        {listedTopics}
      </ul>
    );
  }
}

export default Accordion;
