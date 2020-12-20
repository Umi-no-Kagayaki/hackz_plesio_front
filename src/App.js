
import React, { useState } from 'react';

import './App.css';
import QuestionView from './components/QuestionView'
import ExecuteButton from './components/ExecuteButton';
import Calculate from './components/Calculate.jsx'

function App() {


  const [phase, setPhase] = useState(1)
  const [answers, setAnswers] = useState([null, null, null, null, null, null, null, null, null, null]) // 回答結果を保存するstate


  const test = () => {
    setPhase(phase + 1);
    console.log(phase)
  }

  return (
    <div>
      { phase === 1 
        ? <ExecuteButton func={test} title='診断開始' />
        : phase === 2
        ? <QuestionView setAnswers={setAnswers} answers={answers}/>
        :null
      }
      
      

      { phase === 2
        ? <ExecuteButton func = {test} title = '回答終了'/>
        : phase === 3
        ? <Calculate answers = {answers}/>
        : null
      }
    </div>
  );
}


export default App;
