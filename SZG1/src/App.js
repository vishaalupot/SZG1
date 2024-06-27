import logo from './logo.svg';
import './App.css';
import videoIntro from './Assets/intro.mp4'

function App() {
  return (
    <div className="App">
        <video
        src={videoIntro}
        autoPlay
        controls
        onLoadedData={() => console.log('Video loaded')}
        onError={(e) => console.error('Video error:', e)}
      ></video>
    </div>
  );
}

export default App;
