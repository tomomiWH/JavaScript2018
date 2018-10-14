import React, { Component } from 'react';
import Forms from './components/Forms/Forms';

/***
 *  1) Pass handleSubmission and handleOnChange functions to the child component forms
 *     Use event.preventDefault  to prevent the form from submitting in the handleSubmission function.
 *     In handleOnchange use that to set the state as well as the casing of the userInput
 *
 *
 *
 *  2) Use DefaultProps to set the intital state of the Application.
 *     DefaultProps should have a property called casing and value of UpperCasing or LowerCasing to determine the state
 *     of userInput. For example, setting default Props to lowerCase results in the user's output to be all in lowercasing
 *
 */

class App extends Component {
  state = {
    userInput: ''
  };

  handleSubmission = () => {};

  handleOnChange = () => {};

  render() {
    return (
      <div className="App">
        {this.state.userInput}
        <Forms
          handleSubmission={this.handleSubmission}
          handleOnChange={this.handleOnChange}
        />
      </div>
    );
  }
}

App.defaultProps = {};

export default App;
