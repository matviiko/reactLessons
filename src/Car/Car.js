import React from "react";
import './Car.css'

export default (props) => {
    return (
        <div className="Car">
            <h3>Car name: {props.name}</h3>
            <p>Year :<strong>{props.year}</strong></p>
            <button onClick={props.onChangeTitle}>Click</button>
        </div>
    )
}