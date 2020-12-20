import React from 'react';
import Questions from './Questions.json';

const QuestionView = (props) => {

    const handleYes = (index) => {
        console.log("Yes", index)
        const newAnswers = [...props.answers.slice(0, index), true, ...props.answers.slice(index+1)]
        props.setAnswers(newAnswers)
        console.log(props.answers)
    }

    const handleNo = (index) => {
        console.log("No", index)
        const newAnswers = [...props.answers.slice(0, index), false, ...props.answers.slice(index+1)]
        props.setAnswers(newAnswers)
    }

    return (
        <div>
            <p>{Questions.count}</p>
            {props.answers.map(v => <p>{v}</p>)}
            {Questions.problems.map((question, index) => (
                <div key={question.title}>
                    <p class = "question">{question.title}</p>
                    <br></br>
                    <button class = "yes" onClick={() => handleYes(index)}>yes</button>
                    <button class = "no" onClick={() => handleNo(index)}>no</button>
                </div>
            ))}
        </div>
    )
}

export default QuestionView