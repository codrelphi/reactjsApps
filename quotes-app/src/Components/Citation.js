import React, { Component } from 'react';

class Citation extends Component {

  render() {
    return (
          <p>
            {"<<"} {this.props.details.citation} {">>"}
            <span className="text-danger">- {this.props.details.auteur}</span>
          </p>
    );
  }
}

export default Citation;
