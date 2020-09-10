import React from "react";
import classes from "./FinishedQuiz.module.css"

const FinishedQuiz = props => {
    const successCount = Object.keys(props.result).reduce((total, key) => {
        if (props.result[key] === 'success') {
            total++;
        }

        return total;
    }, 0)

    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.result[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.result[quizItem.id]]
                    ]

                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>. &nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    )
                })}

            </ul>

            <p>True {successCount} of {props.quiz.length}</p>

            <div>
                <button>Restart</button>
            </div>
        </div>
    )
}

export default FinishedQuiz
