import React, {Component} from 'react';
import './App.css';
import Car from "./Car/Car";

class App extends Component {

  render() {

    return (
        <div className="App">
            <h1>{this.props.title}</h1>

          <Car />
        </div>
    );
  }

}

  export default App;
