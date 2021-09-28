
import {useState,useEffect} from "react";
import CreateDigit from "./components/CreateDigits";
import Display from "./components/Display";
//initializing the calculation and result
//making structure of the ui
//initializing the operators
//initializing the digits
//on click displaying the text on the display with updateCalc function
//onclick clear,clearing the site
//on equal operator click its gets the result
//on del button click the last character of the string gets deleted

function App() {
  const [calc,setCalc] = useState("");
  const [result,setResult] =useState(""); 
  const ops = ['/','*','+','-'];
  useEffect(()=>{
    if(calc!==""){
      deleteLatest();
      calculate();
    }
  },[setCalc])

  const updateCalc = value=>{
    if((ops.includes(value)&&calc==="")||(ops.includes(value)&&ops.includes(calc.slice(-1)))){
      return;
    }
    setCalc(calc+value);
    if(!ops.includes(value)){
      setResult(eval(calc+value).toString())
    }
  }
  

  const calculate=()=>{
    setCalc(eval(calc).toString())
  }


  const deleteLatest=()=>{
    if(calc===''){
      return;
    }else{
      const value=calc.slice(0,-1);
      setCalc(value);
    }
  }

  const clearCalc=()=>{
    setCalc("");
    setResult("");

  }


  return (
    <div className="App">
      <div className="calculator">
          <Display result={result} calc={calc}/>       
          <CreateDigit updateCalc={updateCalc} operators={ops} calculate={calculate} deleteLatest={deleteLatest}/>
          <button className="clearButton" onClick={clearCalc}>Clear</button>
      </div>
    </div>
  );
}

export default App;
