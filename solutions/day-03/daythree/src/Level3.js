import React from 'react';
import person from './images/asabeneh.jpg';

class Level3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          background: '#f1f1f1',
        }}
      >
        <div
          style={{
            background: '#fff',
            margin: '20px',
          }}
        >
          <img src={person}></img>
          <h3> ASABENEH YETAYEH</h3>
          <p>Senior Developer,Finland</p>
          <h3>SKILLS</h3>
          <ul>
            <li>html</li>
            <li>CSS</li>
          </ul>
          <span>Joined on Aug 30,2020</span>
        </div>
      </div>
    );
  }
}

export default Level3;
