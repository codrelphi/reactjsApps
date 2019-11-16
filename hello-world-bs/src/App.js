import React from 'react';
import './App.css';

class App extends React.Component {

  render() {
    return (<div className="container">
              <div className="row">
                <div className="col"></div>
                <div className="col">
                  <h2>Hello World, <span className="text-primary font-italic">Charles</span>.</h2>
                  <input type="text" placeholder="Enter a name..." className="form-control"></input>
                </div>
                <div className="col"></div>
              </div>
            </div>)
  }

}

export default App;
