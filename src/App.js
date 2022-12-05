import './App.css';
import Counter from './counter';
import { useState } from 'react';


function App() {

  const [delta,setDelta] = useState(1)
  const max = 200;
  const [maxValue, setMax] = useState(1); 
  const [reset, setReset] = useState(false)


  function handleDelta(event){
    console.log(event);
    setDelta(Number(event.target.value))
  }

  /*false to true or opossite */
  function getRest(data){
    console.log(data)
    setReset(data)
  }

  function BiggerMax(data){
    if(data > maxValue){
      setMax(data)
    }

    else{
      if (maxValue > max){
      setMax(1)
      }
    }
  }

  return (
    <div className="App">
      add 
      <input type = "number" value = {delta} onChange = {handleDelta}/>
      to counters
      <div>max number: {max} </div>
      <div>current max number: {maxValue}</div>
      <Counter  max = {max} delta = {delta} getReset = {getRest} needToReset = {reset}  BiggerMax = {BiggerMax} />
      <Counter  max = {max} delta = {delta} getReset = {getRest} needToReset = {reset}  BiggerMax = {BiggerMax}/>
    </div>
  );
}
export default App;
