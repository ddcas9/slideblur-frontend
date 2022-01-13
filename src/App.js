import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'/microscope-slides.png'} className="App-logo" alt="logo" />
        <p>
          Welcome to SlideBlur
        </p>
        SlideBlur is a simple way to generate image inputs for your Pathology CNNs
        <div className="upload-container">
          <input type='file'/>
        </div>
      <div className='attribution'><a href="https://www.flaticon.com/free-icons/microscope-slides" title="microscope slides icons">Microscope slides icons created by Konkapp - Flaticon</a></div>
      
      </header>
      
    </div>
  );
}

export default App;
