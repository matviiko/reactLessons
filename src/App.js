import React, {Component} from 'react';
import './App.css';
import Car from "./Car/Car";

class App extends Component {

  render() {
      console.log('Render')

    return (
        <div className="App">
          <Car />
        </div>
    );
  }

}

  export default App;
