import React from 'react';

class Level2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          background: 'skyblue',
        }}
      >
        <h1>SUBSCRIBE</h1>
        <p> sign up with your email address to receive news and updates</p>
        <div>
          <input placeholder="First name" />
          <input placeholder="Last name " /> <input placeholder="Email" />
        </div>
        <button>Subscribe</button>
      </div>
    );
  }
}

export default Level2;
