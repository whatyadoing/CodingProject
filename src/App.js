

import IEEElogo from './IEEE_logo.jpeg';
import ahh from './mountains.jpeg';
import robot from './3d_animated.gif';
import microm from './micromouse.png';
import './App.css';



/* */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> IEEE Info Page</h1>
      <p className="body-text"> Learn about the history, achievements, and projects completed by the the UCLA Chapter of the IEEE.</p>
      <img src={robot} alt="Robotic Arm GIF" className="robot-gif" />
        <h2> History of the IEEE</h2>

        <img src={IEEElogo} alt="IEEE Logo" className="IEEE-logo" />

        <div>

        <h2> Accolades & Achievements </h2>

        
        <ul>
          <li> 1st Place - 2013 All America Micromouse Competition </li>
          <li> 1st Place - 2013 ViaCar Competition</li>
          <li> 1st Place - 2013 UCLA Natcar Competition</li>
          <li> 2022-2024 Regional Exemplary Student Branch Award </li>
        </ul>

        </div>

        <div>

        <h2> Completed or Concurrent Projects</h2>
        
          <h3> Micromouse </h3>
            <img src={microm} alt="Micromouse" className="micromouse-image" />
            <p className="body-text"> Students work together to design a micromouse, or an autonomous robot, that navigates through a maze. 
              They're given the opportunity to test their skills against other universities in the nation while having fun doing it.
              Throughout the school year, students work on developing the micromouse for the in-person competition at the end of the spring
              quarter during May. Students often walk away with a lot of knowledge and experience in PCB design, embedded firmware programming,
              and sensor integration to name a few, making them a much better fit for industry. 
            </p>

          <h3> Pocket Racers </h3>


          <h3> Digital Audio Visualizer</h3>
          
        </div>


        <a
          className="App-link"
          href="https://samueli.ucla.edu"
          target="_blank"
          rel="noopener noreferrer"
        >
          UCLA Samueli 
        </a>
      </header>
    </div>
  );
}

export default App;
