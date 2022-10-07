import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {questions} from './data'
import { Questions } from "./components/Questions";

function App() {
  const [data,setData] = useState(questions)
  return (
    <div className="container d-flex p-3 mt-5 align-items-center">
      <div className="row">
        <div className="col-md-6 p-3 "><h1>Questions And Answers About Login </h1></div>
        <div className="col-md-6 ">
          <Questions data={data}/>
        </div>
      </div>
    </div>
  );
}

export default App;
