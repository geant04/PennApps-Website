import './App.css';
import React from 'react';
import Navbar from './Navbar'
import Timer from './Timer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <div className="backgroundcolor">
        <img id="ttl" src="https://github.com/pennapps/frontend-challenge/blob/main/assets/banner.png?raw=true" alt="PennApps XXIII"/>
        <div className="cover">
          <div className='timerbox'>
            <Timer/>        
            <div id="space"></div>
          </div>
        </div>
        <Navbar/>
        <div id="apply" className="apply-page">
          <br></br>
          <p className="headerText">Apply bro,</p>
          <p className="headerText">We be hiring.</p>
          <p>Filler text. Filler text. Lorem ipsum something i dont really know. i'm not much of a web developer. Anyways, did you know that we're
              hiring? or something along those lines, please hire me! I am a good worker! look at how hard i'm working for this front-end stuff! i think
              i'm worthy of a position. personally, you should choose me.
          </p>
          <Button variant="success" href="https://pennclubs.com/club/pennapps">APPLY</Button>{' '}
          <br id></br>
          <br id></br>
        </div>
        <div id="about-us">
          <p></p>

        </div>
        <div className="footer">
          <img className="logo" src="https://github.com/pennapps/frontend-challenge/blob/main/assets/penn-logo.png?raw=true" alt="penn-logo"/>
        </div>
      </div>

    </div>
  );
}

export default App;
