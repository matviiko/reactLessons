import React from "react";
import classes from "./FinishedQuiz.module.css"

const FinishedQuiz = props => {
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                <li>
                    <strong>1.</strong>
                    How are you?
                    <i className={'fa fa-times ' + classes.error}/>
                </li>
                <li>
                    <strong>2.</strong>
                    How are you?
                    <i className={'fa fa-check ' + classes.success}/>
                </li>
            </ul>

            <p>True 4 of 10</p>

            <div>
                <button>Restart</button>
            </div>
        </div>
    )
}

export default FinishedQuiz
