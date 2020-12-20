import React, { useState } from 'react';
import Questions from './Questions.json';
import ExecuteButton from './ExecuteButton.jsx';

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

    const Calculation = (answers) => {
        // 0 ~ 5 番までの結果を取得 answer.slice()
        // trueの数を計算する カウント
        // 該当する性格のポイントを増やす
        let SelfAssertion = false;
        let EmotionalExpression = false;

        const SelfAssertionPoint = () => {
            let count = 0;

            for (let i = 0; i < 5; i++) {
                if (props.answers.slice(0,4)[i]) {
                    count++;
                }
            }
            
            return count;
        }

        const EmotionalExpressionPoint = () => {
            let count = 0;

            for (let i = 5; i < 10; i++) {
                if (props.answers.slice(5,9)[i]){
                    count++;
                }
            }

            return count;
        }
　　　　　
        if (SelfAssertionPoint() > 3) {
            SelfAssertion = true;
        }
       
        if (EmotionalExpressionPoint() > 3) {
            EmotionalExpression = true;
        }
        
        if (SelfAssertion && EmotionalExpression) {
            return "あなたは「楽天家タイプ」です。"
        }

        if (SelfAssertion && !EmotionalExpression) {
            return "あなたは「経営者タイプ」です。"
        }

        if (!SelfAssertion && EmotionalExpression) {
            return "あなたは「共感者タイプ」です。"
        }

        else {
            return "あなたは「研究者タイプ」です。"
        }
    
    }

    return (
        <div>
            <p>{Questions.count}</p>
            {props.answers.map(v => <p>{v}</p>)}
            {Questions.problems.map((question, index) => (
                <div>
                    <h2>{question.title}</h2>
                    <button onClick={() => handleYes(index)}>yes</button>
                    <button onClick={() => handleNo(index)}>no</button>
                </div>
            ))}
        </div>
    )
}

export default QuestionView