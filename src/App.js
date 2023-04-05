import "./App.scss";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import NextVideos from "./components/NextVideos/NextVideos";

function App() {
  return (
    <div className="App">
      <Header />
      <VideoPlayer />
      <div className="bottom-section">
        <div className="bottom-section__content">
          <div className="bottom-section__sub-container">
            <VideoInfo />
          </div>
          <div className="bottom-section__sub-container">
            <NextVideos />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
