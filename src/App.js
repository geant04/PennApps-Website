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
          <p className="headerText">Beleaf it or not,</p>
          <p className="headerText">applications are open!</p>
          <p>Hosted at the nation's first university, PennApps is the original college hackathon. Come join us to learn something new,
            build an app, or start a company. Let's continue to make history together.
          </p>
          <Button variant="success" href="https://pennclubs.com/club/pennapps">APPLY</Button>{' '}
          <br id></br>
          <br id></br>
        </div>
        <div id="about-us" className="about-us">
          <h1>About</h1>
          <br></br>
          <br></br>
          <h2>The College Hackathon</h2>
          <br></br>

          <p>In the context of a hackathon, the word "hack" is used to describe how multiple technologies can be
            used together in a new and innovative way. Teams of up to four people spend the weekend working on innovative
            software and hardware solutions to real-world problems. These projects range in platform and
            application, including elements of web development, mobile applications, drones, and more. However,
            many times the most important aspect of a hackathon is the community it generates and skills that inexperienced
            hackers walk away with.
          </p>
          <h2>The PennApps Difference</h2>
          <p>Founded in the fall of 2009, PennApps was the nation's first student-run college hackathon. Since then, it 
            has spurred a revolution in the way engineering students develop and showcase their skills, spawning
            an entire "league" of hackathons across the nation. In the past years, over a thousand students from the U.S. and
            other countries like Switzerland, Canada, England, and Singapore have converged in Philadelphia for the
            spring and fall editions of the event for a weekend of creation and discovery. Both beginners and experts alike
            work together, learn and compete to become better engineers and work on awesome projects.
            This year, PennApps is expanding its focus on learning by emphasizing the collaboration of new and epxerienced hackers, and
            providing more learning opportunities and workshops throughout the weekend.
          </p>
          <br></br>
          <br></br>

          <h1>Apply</h1>
          <br></br>
          <br></br>

          <h2>The Application Process</h2>
          <br></br>

          <p>Thousands of qualified candidates apply to participate in PennApps every year, however our space can only support a limited number of
            participants and as much as we'd like to take everyone, it just isn't possible. We think that the fairest way to decide who we invite 
            is by asking everyone to tell us a little bit about themselves, so that we can invite people who have demonstrated interest and skill. 
          </p>
          <p>We don't expect everyone to have been to a hackathon before, in fact, we love first-time hackers having been there ourselves when we 
            first started! We're just trying to bring those who most want to really build something awesome and learn something new, and while we can't 
            invite everyone, we're striving to continue building a community of diverse and amazing hackers at PennApps. Just show us what you've made, 
            tell us about why you want to be at PennApps, and we'll do our best to get you here! Applications are currently open.
          </p>
        </div>
        <div className="footer">
          <img className="logo" src="https://github.com/pennapps/frontend-challenge/blob/main/assets/penn-logo.png?raw=true" alt="penn-logo"/>
        </div>
      </div>

    </div>
  );
}

export default App;
