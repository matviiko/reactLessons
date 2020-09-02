import React, {Component} from 'react';
import './App.css';
import Car from "./Car/Car";

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            cars: [
                {name: 'Ford', year: 2012},
                {name: 'Mazda', year: 1991},
                {name: 'Opel', year: 2014},
            ]
        }
    }

  render() {

    return (
        <div className="App">
            <h1>{this.props.title}</h1>

          <Car name={this.state.cars[0].name} year={this.state.cars[0].year} />
          <Car name={this.state.cars[1].name} year={this.state.cars[1].year} />
          <Car name={this.state.cars[2].name} year={this.state.cars[2].year} />
        </div>
    );
  }

}

  export default App;
