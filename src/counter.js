import { useState } from "react";
function Counter() {
    const [count,setcount] = useState(1)
    /* usestate is create a new list with 2 parametes
    first parameter - variable
    second parameter - function setcount which
    modify the condtion of the state 
    (1) - the first value of count
    NO SAVED WORDS EXCEPT usestate*/
    function increase(){
        setcount( function(oldcount){
            return oldcount + 1
        }

        )
        console.log(count)
    } 
    
    function nullify(){
      setcount(function(countZero){
        countZero = 0
        return countZero
      }
  )
    }

    return (
      <div>
        <h1>Counter</h1>
        <h2>Counter is at {count}</h2>
        <button onClick = {increase}>Click to add 1 to counter</button>
        <p></p>
        <button onClick = {nullify}> Click hete to restart</button>
        <p></p>
        <div id = "body"></div>
      </div>
    );
  }
  export default Counter;
  