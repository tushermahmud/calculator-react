import React,{Fragment} from "react";
const CreateDigit =({updateCalc,calculate,deleteLatest,operators})=>{
    const digits = [];
    for(let i=1;i<10;i++){
      digits.push(<button key={i} onClick={()=>updateCalc(i.toString())}>{i}</button>);
    }
    return (
      <Fragment>
                <div className="operators">
                  {operators.map(operator=>(
                    <button onClick={()=>updateCalc(operator)}>{operator}</button>
                  ))}
                  <button onClick={deleteLatest}>DEL</button>
                </div>
                <div className="digits">
                  {digits}
                  <button onClick={()=>updateCalc('0')}>0</button>
                  <button onClick={()=>updateCalc('.')}>.</button>
                  <button onClick={calculate}>=</button>
                </div>
      </Fragment>
    );
    
}
export  default CreateDigit;