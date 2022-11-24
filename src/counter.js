import { useState } from "react";
function Counter() {
    const [count,setcount] = useState(1)
    const [delta,setDelta] = useState(1)
    /* usestate is create a new list with 2 parametes
    first parameter - variable
    second parameter - function setcount which
    modify the condtion of the state 
    (1) - the first value of count
    NO SAVED WORDS EXCEPT usestate*/
    function increase(){
        setcount( function(oldcount){
            return oldcount + delta
        }

        )
        console.log(count)
    } 
    
    function nullify(){
      setcount(function(countZero){
        countZero = 1
        return countZero
      }
    )
  }

  function handleDelta(event){
    console.log(event);
    setDelta(Number(event.target.value))
  }



    return (
      <div>
        <h1>Counter</h1>
        <input type = "number" value = {delta} onChange = {handleDelta}/>
        <h2>Counter is at {count}</h2>
        <button onClick = {increase}>Click to add {delta} to counter</button>
        <p></p>
        <button onClick = {nullify}> Click here to restart</button>
        <p></p>
        <div id = "body"></div>
      </div>
    );
  }
  export default Counter;
  