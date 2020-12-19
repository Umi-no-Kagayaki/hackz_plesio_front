import React, { useState } from 'react'

import './App.css';
import QuestionView from './components/QuestionView'
import ExecuteButton from './components/ExecuteButton';

const test = (props) => {
  console.log("test");
} 

function App() {

  const [answers, setAnswers] = useState([null, null, null, null, null, null, null, null, null, null]) // 回答結果を保存するstate

  return (
    <div>
      <ExecuteButton func={test} title='診断開始'/>
      <QuestionView setAnswers={setAnswers} answers={answers}/>
    </div>
  );
}

export default App;
