import './App.css';
import Counter from './counter';
import { useState } from 'react';


function App() {

  const [delta,setDelta] = useState(1)
  const max = 200;
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

  return (
    <div className="App">
      <input type = "number" value = {delta} onChange = {handleDelta}/>
      <Counter  max = {max} delta = {delta} getReset = {getRest} needToReset = {reset}/>
      <Counter  max = {max} delta = {delta} getReset = {getRest} needToReset = {reset}/>
    </div>
  );
}
export default App;
