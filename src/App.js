import React, { useState } from 'react';
import './App.css';
import ExecuteButton from './components/ExecuteButton';

// let phase = 1;

const yes = () => {
  console.log("yes");
}
const no = () => {
  console.log("no");
}


function App() {

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
    
    

    </div>
  );
}


export default App;
