import { useState, useEffect } from 'react';

function Timer(){
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    const deadline = "05 February 2023 17:35:00 EST";
    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();
  
        setDays( Math.max(0, Math.floor(time / (1000 * 60 * 60 * 24))) );
        setHours( Math.max(0, Math.floor((time / (1000 * 60 * 60)) % 24)) );
        setMinutes( Math.max(0, Math.floor((time / 1000 / 60) % 60))) ;
        setSeconds( Math.max(0, Math.floor((time / 1000) % 60)) );
    }
  
    useEffect(() => {
      const interval = setInterval(() => getTime(deadline), 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="t">
            <div className="box">
                <p>{days}</p>
                <span className="text">DAYS</span>
            </div>
            <div className="box">
                <p>{hours}</p>
                <span className="text">HOURS</span>
            </div>
            <div className="box">
                <p>{minutes}</p>
                <span className="text">MINUTES</span>
            </div>
            <div className="box">
                <p>{seconds}</p>
                <span className="text">SECONDS</span>
            </div>
      </div>
    )
  }

  export default Timer;