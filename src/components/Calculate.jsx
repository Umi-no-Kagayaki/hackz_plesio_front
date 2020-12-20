import React from 'react';

const Calculation = (props) => {
    // 0 ~ 5 番までの結果を取得 answer.slice()
    // trueの数を計算する カウント
    // 該当する性格のポイントを増やす
    let SelfAssertion = false;
    let EmotionalExpression = false;

    const SelfAssertionPoint = () => {
        let count = 0;
        console.log(props.answers)
        for (let i = 0; i < 5; i++) {
            if (props.answers[i]) {
                count++;
            }
        }
        
        return count;
    }

    const EmotionalExpressionPoint = () => {
        let count = 0;
        console.log(props.answers)
        for (let i = 5; i < 10; i++) {
            if (props.answers[i]){
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
        return <p>あなたは「楽天家タイプ」です。</p>
    }

    else if (SelfAssertion && !EmotionalExpression) {
        return <p>あなたは「経営者タイプ」です。</p>
    }

    else if (!SelfAssertion && EmotionalExpression) {
        return <p>あなたは「共感者タイプ」です。</p>
    }

    else {
        return <p>あなたは「研究者タイプ」です。</p>
    }
}

export default Calculation
