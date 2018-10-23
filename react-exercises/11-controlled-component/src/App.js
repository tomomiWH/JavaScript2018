import React, { Component } from 'react';
import Forms from "./components/Forms/Forms";

/***
 *    1) Use defaultProps to set the intital state of the Application.
 *       defaultProps should have a property called casing and value of UpperCase or LowerCase to determine the state
 *       of userInput. For example, setting defaultProps to LowerCase results in the user's input to be lower case.
 *
 *
 *
 *   2) Import the Forms component from the component directory and then pass the event handlers handleSubmission and handleOnChange functions
 *      to the child component Forms. Use event.preventDefault  to prevent the form from submitting in the handleSubmission function.
 *      In handleOnChange use defaultProps to determine the casing that will be rendered to the screen.
 *
 *    **** Note prop -- is passing
 *
 * */

class App extends Component {
  state = {
    userInput: ''
  };

  handleSubmission = (event) => {
    console.log("testing");
    event.preventDefault()
    console.log(this.state.userInput)
  };

  handleOnChange = (event) => {
    console.log(event.target.value); //getting text to console, use "target"
    const {casing} = this.props;
    console.log(casing);
    this.setState({
      userInput: casing === 'uppercase' ? event.target.value.toUpperCase() : event.target.value.toLowerCase() 
    })
  };

  render() {
    return <div className="App">
    <Forms upperCasing = {this.state.userInput} handleOnChange = {this.handleOnChange} handleSubmission ={this.handleSubmission}/>
    
        {this.state.userInput}
      
    </div>;

  }
}

App.defaultProps = {casing:'uppercase'}; 

export default App;

