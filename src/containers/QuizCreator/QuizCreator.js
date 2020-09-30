import React, {Component} from "react";
import classes from "./QuizCreator.module.css"
import Button from "../../components/UI/Button/Button";
import {createControl} from "../../form/formFramework";
import Input from "../../components/UI/Input/Input";
import Select from "../../components/UI/Select/Select";

    function createOptionControl (number) {
        return createControl({
            label: `Answer ${number}` ,
            errorMessage: `Please enter answer1 ${number}`
        }, {required: true})
    }

    function createFormControl() {
        return {
            question: createControl({
                label: 'Enter question',
                errorMessage: 'Please enter question'
            }, {required: true}),
            option1: createOptionControl(1),
            option2: createOptionControl(2),
            option3: createOptionControl(3),
            option4: createOptionControl(4)
        }
    }

export default class QuizCreator extends Component {

    state = {
        quiz: [],
        rightAnswerId: 1,
        formControls: createFormControl()
    }

    submitHandler = event => {
        event.preventDefault()
    }

    addQuestionHandler = () => {

    }

    createQuizHandler = () => {

    }

    changeHandler = (value, controlName) => {

    }

    renderControls() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]

            return (
                <React.Fragment key={controlName + index}>
                    <Input
                    key={index  }
                    label={control.label}
                    value={control.value}
                    valid={control.valid}
                    shouldValidate={!!control.validation}
                    touched={control.touched}
                    errorMessage={control.errorMessage}
                    onChange={event => this.changeHandler(event.target.value, controlName)}
                    />

                    {index ===0 ? <hr/> : null }
                </React.Fragment>
            )
        })
    }

    selectChangeHandler = event => {
        this.setState({
            rightAnswerId: +event.target.value
        })
    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Create Quiz</h1>

                    <form onSubmit={this.submitHandler}>

                        {this.renderControls()}


                        <Select
                        label={'Please enter order answer'}
                        value={this.state.rightAnswerId}
                        onChange={this.selectChangeHandler}
                        options={[
                            {text: 1, value: 1},
                            {text: 2, value: 2},
                            {text: 3, value: 3},
                            {text: 4, value: 4}
                        ]}
                        />

                        <Button
                        type="primary"
                        onClick={this.addQuestionHandler}
                        >Add Question</Button>

                        <Button
                        type="success"
                        onClick={this.createQuizHandler}
                        >Create New Quiz</Button>

                    </form>
                </div>
            </div>
        )
    }
}
