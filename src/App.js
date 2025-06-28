import ahh from './mountains.jpeg';
import robot from './3d_animated.gif';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> This is a test!</h1>
      <img src={robot} alt="Robotic Arm GIF" className="robot-gif" />
        
        <p>
          Hello World!
        </p>
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
