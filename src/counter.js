import { useState } from "react";
function Counter(props) {

    const {delta, max} = props
    const [count,setcount] = useState(1)


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
      setcount(function(countToOne){
        countToOne = 1
        return countToOne
      }
    )
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
  