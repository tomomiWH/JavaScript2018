import React, { Component } from 'react';

/***
 *  As a user, I should be able to click on the button to hide the text.
 *  Clicking the button a second try unhides the text.
 *
 */

class App extends Component {
  state = {
    showText: true
  };

  toggleVisibility = () => {
    console.log("clicked");
    this.setState({
      showText: !this.state.showText  //!this will go back and forth true/false, state controlls
    })
  };

  render() {
    console.log(this.state)
    return (
      <div>
        <div>
          { this.state.showText ? <h1>Now you see me!</h1> : null}  
        </div>
        <button onClick={this.toggleVisibility}>Click To Hide Text</button>
      </div>
    );
  }
}

export default App;
