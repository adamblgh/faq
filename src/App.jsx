import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {questions} from './data'
import { Questions } from "./components/Questions";

function App() {
  const [data,setData] = useState(questions)
  return (
    <div className="container border mt-5 w-75">
      <div className="row">
        <div className="col-md-6 p-3 border"><h1>Questions And Answers About Login </h1></div>
        <div className="col-md-6 border">
          <Questions data={data}/>
        </div>
      </div>
    </div>
  );
}

export default App;
