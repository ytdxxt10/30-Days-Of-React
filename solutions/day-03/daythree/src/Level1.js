import React from 'react';
import front_tech from './images/frontend_technologies.png';

class Level1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>level1</h1>
        <img src={front_tech}></img>
      </div>
    );
  }
}

export default Level1;
