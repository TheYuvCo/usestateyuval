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

    return (
      <div>
        <h1>Counter</h1>
        <p>Counter is at {count}</p>
        <button onClick = {increase}>Click to add {count} to counter</button>
      </div>
    );
  }
  export default Counter;
  