import React, { useState } from 'react';
import Questions from './Questions.json';

const QuestionView = () => {
    const [answers, setAnswers] = useState([null, null, null, null, null, null, null, null, null, null]) // 回答結果を保存するstate

    const handleYes = (index) => {
        console.log("Yes", index)
        const newAnswers = [...answers.slice(0, index), true, ...answers.slice(index+1)]
        setAnswers(newAnswers)
    }

    const handleNo = (index) => {
        console.log("No", index)
        const newAnswers = [...answers.slice(0, index), false, ...answers.slice(index+1)]
        setAnswers(newAnswers)
    }

    const Calculation = (props) => {
        // 0 ~ 5 番までの結果を取得 answer.slice()
        // trueの数を計算する カウント
        // 該当する性格のポイントを増やす
        let SelfAssertion = false;
        let EmotionalExpression = false;

        const SelfAssertionPoint = (props) => {
            let count = 0;

            for (let i = 0; i < 5; i++) {
                if (props.slice(0,4)[i]) {
                    count++;
                }
            }
            
            return count;
        }

        const EmotionalExpressionPoint = (props) => {
            let count = 0;

            for (let i = 5; i < 10; i++) {
                if (props.slice(5,9)[i]){
                    count++;
                }
            }

            return count;
        }

        if (SelfAssertionPoint > 3) {
            SelfAssertion = true;
        }

        if (EmotionalExpression > 3) {
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
            {answers.map(v => <p>{v}</p>)}
            {Questions.problems.map((question, index) => (
                <div>
                    <p>{question.title}</p>
                    <button onClick={() => handleYes(index)}>yes</button>
                    <button onClick={() => handleNo(index)}>no</button>
                </div>
            ))}
            <button　>回答を終了</button>
        </div>
    )

    // if (count < 5) {
    //     SelfAssertion++;
    // }

    // else  {
    //     EmotionalExpression++;
    // }

    // count++;
}

export default QuestionView