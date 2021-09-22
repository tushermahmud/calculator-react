const Operators =({updateCalc,deleteLatest})=>(
    <div className="operators">
        <button onClick={()=>updateCalc('/')}>/</button>
        <button onClick={()=>updateCalc('*')}>*</button>
        <button onClick={()=>updateCalc('+')}>+</button>
        <button onClick={()=>updateCalc('-')}>-</button>
        <button onClick={deleteLatest}>DEL</button>
    </div>
)
    

export  default Operators;