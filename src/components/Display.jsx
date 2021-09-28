const Display = ({result,calc}) =>(
    <div className="display">
          {result?<span> </span> :''}{ calc||'0'}
    </div>
)
export default Display;