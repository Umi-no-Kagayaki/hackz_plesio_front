import './App.css';
import QuestionView from './components/QuestionView'
import ExecuteButton from './components/ExecuteButton';

const test = (props) => {
  console.log("test");
} 

function App() {
  return (
    <div>
      <ExecuteButton func={test} title='診断開始'/>
      <QuestionView/>
    </div>
  );
}

export default App;
