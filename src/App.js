
import React, { useState } from 'react';
import './App.css';
import QuestionView from './components/QuestionView'
import ExecuteButton from './components/ExecuteButton';



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
        ? <ExecuteButton func={test} title='診断開始' class='start' />
        : null
      }
    
      { phase === 2
       ? <div>
           <QuestionView setAnswers={setAnswers} answers={answers}/>
           <ExecuteButton func={test} title='終了'　/>
         </div>
       : null
       

    </div>
  );
}


export default App;