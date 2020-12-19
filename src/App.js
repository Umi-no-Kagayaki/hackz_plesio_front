import './App.css';
import ExecuteButton from './components/ExecuteButton';

const test = (props) => {
  console.log("test");
} 

function App() {
  return (
    <div>
      <ExecuteButton func={test} title='診断開始'/>
    </div>
  );
}

export default App;
