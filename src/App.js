import {Demo} from './documents/Demo'
import React from 'react'
import './App.css';

function App() {
  const [showCounter, setShowCounter] = React.useState(false)
  
  return (
    <div className="App">
      {showCounter && <Demo intialTime="10" endTime = "0"  />}
      <br />
      <button onClick={() => setShowCounter(!showCounter)}>SHOW</button>
    </div>
  );
}

export default App;
