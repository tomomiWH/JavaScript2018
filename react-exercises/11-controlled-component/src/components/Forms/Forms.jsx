import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Forms extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <form onSubmit={this.props.handleSubmission}>
          <textarea value={this.props.upperCasing} onChange={this.props.handleOnChange} type="text" />
          <button type="submit">Click Me</button>
        </form>
      </div>
    );
  }
}

export default Forms;
