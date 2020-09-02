import React from "react";
import './Car.css'

class Car extends React.Component {
    render() {
        return (

            <div className="Car">
                <h3>Car name: {this.props.name}</h3>
                <p>Year :<strong>{this.props.year}</strong></p>
                <button onClick={this.props.onChangeTitle}>Click</button>
            </div>
        )
    }
}

export default Car