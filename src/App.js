<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useState } from 'react'

>>>>>>> ea56aa1d7dbdf0a13da3058f033e43c6e678d8f7
import './App.css';
import QuestionView from './components/QuestionView'
import ExecuteButton from './components/ExecuteButton';

// let phase = 1;

const yes = () => {
  console.log("yes");
}
const no = () => {
  console.log("no");
}


function App() {

<<<<<<< HEAD
  const [phase, setPhase] = useState(1)

  const test = () => {
    setPhase(phase + 1);
    console.log(phase)
  }

  return (
    <div>
      { phase === 1 
        ? <ExecuteButton func={test} title='診断開始' />
        : null
      }
      { phase === 2
     ?<ExecuteButton func={yes} title='Yes' />
    :null
    }
    {phase === 2
       ?<ExecuteButton func={no} title='No' />
       :null
       }
    
    

=======
  const [answers, setAnswers] = useState([null, null, null, null, null, null, null, null, null, null]) // 回答結果を保存するstate

  return (
    <div>
      <ExecuteButton func={test} title='診断開始'/>
      <QuestionView setAnswers={setAnswers} answers={answers}/>
>>>>>>> ea56aa1d7dbdf0a13da3058f033e43c6e678d8f7
    </div>
  );
}


export default App;
