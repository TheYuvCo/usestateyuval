import { useState, useEffect } from "react";
function Counter(props) {

    const {delta, max, getReset, needToReset} = props
    const [count,setcount] = useState(1)

    useEffect(()=>{
      if(needToReset){
        setcount(1)
        getReset(false)
      }
    },[needToReset, getReset])

    /* useEffect in list - prop \ character which when it's changes I will tirn on the function inside the
    useEffect */

    /* usestate is create a new list with 2 parametes
    first parameter - variable
    second parameter - function setcount which
    modify the condtion of the state 
    (1) - the first value of countSSS
    NO SAVED WORDS EXCEPT usestate*/
    function increase(){
        setcount( function(oldcount){
              if (oldcount + delta < max) {
              return (oldcount + delta);}
              return 1;
        }
        )
    } 
    
    function nullify(){
        getReset(true)
        setcount(1)
  }

    return (
      <div>
        <h1>Counter</h1>
        <h2>Counter is at {count}</h2>
        <h3>Maximum is {max}</h3>
        <button onClick = {increase}>Click to add {delta} to counter</button>
        <p></p>
        <button onClick = {nullify}> Click here to restart</button>
        <p></p>
        <div id = "body"></div>
      </div>
    );
  }
  export default Counter;
  