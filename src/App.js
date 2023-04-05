import "./App.scss";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoInfo from "./components/VideoInfo/VideoInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <VideoPlayer />
      <div className="bottom-section">
        <div className="bottom-section__content">
          <VideoInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
