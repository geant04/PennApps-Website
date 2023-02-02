import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Button from './Button'

function App() {
  return (
    <div className="App">
      <h id="ttl">PennApps XXIII</h>
      <Timer/>
      <button>PennApps</button>
      <button>About</button>
      <Button as="a" href="https://pennclubs.com/club/pennapps">Apply</Button>
      <NavBar/>
    </div>
  );
}

function Timer(){
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "04 February 2023 20:53:00 EST";
  const getTime = () => {
      const time = Date.parse(deadline) - Date.now();

      setDays( Math.max(0, Math.floor(time / (1000 * 60 * 60 * 24))) );
      setHours( Math.max(0, Math.floor((time / (1000 * 60 * 60)) % 24)) );
      setMinutes( Math.max(0, Math.floor((time / 1000 / 60) % 60))) ;
      setSeconds( Math.max(0, Math.floor((time / 1000) % 60)) );
  }

  const divStyle = {
    fontSize: '245%',
    margin: '10px',
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div classname = "timer" style={divStyle}>
      <p>{days}:{hours}:{minutes}:{seconds}</p>
    </div>
  )
}

function NavBar(){

}



export default App;
