import './App.css';
import Counter from './counter';
import { useState } from 'react';


function App() {

  const [delta,setDelta] = useState(1)
  const max = 200;


  function handleDelta(event){
    console.log(event);
    setDelta(Number(event.target.value))
  }


  return (
    <div className="App">
      <input type = "number" value = {delta} onChange = {handleDelta}/>
      <Counter  max = {max} delta = {delta}/>
      <Counter  max = {max} delta = {delta}/>
    </div>
  );
}
export default App;
