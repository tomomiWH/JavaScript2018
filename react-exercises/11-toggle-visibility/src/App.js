import React, { Component } from 'react';

class App extends Component {
  state = {
    showText: true
  };

  toggleVisibility = () => {};

  render() {
    return (
      <div>
        <div>
          <h1>Now you see me!</h1>
        </div>
        <button>Click To Hide Text</button>
      </div>
    );
  }
}

export default App;
