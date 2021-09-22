const CreateDigit =({updateCalc})=>{
    const digits = [];
    for(let i=1;i<10;i++){
      digits.push(<button key={i} onClick={()=>updateCalc(i.toString())}>{i}</button>);
    }
    return digits;
}
export  default CreateDigit;