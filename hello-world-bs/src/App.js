import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    name: "John Doe"
  }

  handleName(e){
    this.setState({name: e.target.value});
  }
  render() {
    return (<div className="container">
              <div className="row">
                <div className="col"></div>
                <div className="col-6">
                  <h2>Hello World, <span className="text-primary font-italic">{this.state.name}</span>.</h2>
                  <input
                    type="text"
                    placeholder="Enter a name..."
                    maxlength="20"
                    className="form-control"
                    onChange={e => this.handleName(e)}>
                  </input>
                </div>
                <div className="col"></div>
              </div>
            </div>);
  }

}

export default App;
