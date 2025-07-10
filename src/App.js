

import IEEElogo from './IEEE_logo.jpeg';
import robot from './3d_animated.gif';
import microm from './micromouse.png';
import pocket from './pocketracers.png';
import dav from './dav.gif';
import './App.css';
import {useState} from 'react';


/* function: adds a button that allows you to scroll to the "About Us" section */
function AboutButton () {
  function ScrollAbout() {
    window.scrollTo({
      top: document.body.scrollHeight / 8 * 7,
      behavior: 'smooth'
    });
  }

  return (
    <button onClick={ScrollAbout} style={{ padding: '10px 10px', fontSize: '12px', fontFamily: 'inherit'}}> Meet us!</button>
  );
}



/* Like Button */

function LikeButton() {
  const [likes, setLikes] = useState(false);

  function likers() {
    setLikes(!likes);
      }
  

  return ( /*if the page is liked, the "Thank you" message will be displayed */
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={likers} style={{ padding: '10px 10px', fontSize: '12px', fontFamily: 'inherit'}}> Support Us! </button>

      {likes && <p>Thank you! We appreciate it! </p>}
      {!likes && <p>Help Support Us!</p>}
    </div>

  )

}


/* */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> IEEE Info Page</h1>

        <AboutButton />
      
      <p className="body-text"> Learn about the history, achievements, and projects completed by the UCLA Chapter of the IEEE.</p>
      <img src={robot} alt="Robotic Arm GIF" className="robot-gif" />
        
        
        <h2> History of the IEEE</h2>

        <img src={IEEElogo} alt="IEEE Logo" className="IEEE-logo" />

        <div>

        <h2> Accolades & Recognition </h2>

        
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
            <img src={pocket} alt="PocketRacer" className="pocketracer-image" />
            <p className="body-text"> Students work together to build an autonomous car that uses computer vision and machine learning to navigate a track on its own. 
They start by driving the car manually to collect training data, then train a neural network that enables the car to drive itself.
Throughout the school year, students develop the car’s hardware and software, applying what they learn to optimize performance for the final demonstration at the end of spring quarter.
Students often walk away with valuable hands-on experience in Raspberry Pi development, computer vision with OpenCV, data preprocessing, and building and training convolutional neural networks, making them well-prepared for careers in embedded systems and machine learning.
            </p>

          <h3> Digital Audio Visualizer</h3>
            <img src={dav} alt="dav" className="digitalaudiovisualizer-image" />
            <p className="body-text"> Students work together to design, build, and test digital logic systems while gaining hands-on experience with real hardware.
They choose between two exciting tracks: one focused on creating a digital audio visualizer that displays frequency levels on a VGA screen, and another focused on designing and verifying a digital game that interacts with external peripherals.
Throughout the school year, students develop a strong foundation in sequential logic, communication protocols, and graphics controllers, culminating in a capstone project that showcases their work.
Students often walk away with practical experience in digital design, verification techniques, and industry-standard practices, making them strong candidates for roles in hardware design and verification engineering.
            </p>


        <a
          className="App-link"
          href="https://www.ieeebruins.com/projects "
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about these projects! 
        </a>

        </div>

        <div>

        <h2> About Us </h2>

          <h3> Ariana </h3>
          
            <p className ="body-text">Aerospace Engineering major</p>

          <h3> Andrew </h3>

            <p className ="body-text">Mechanical Engineering major</p>


          <h3> Edwin </h3>

            <p className ="body-text">Electrical Engineering major</p>

        <LikeButton />






        </div>
        
      </header>
    </div>
  );
}

export default App;
