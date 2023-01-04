import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';

var App = () => {
  const { useState, useEffect } = React;
  var [videos, setVideos] = useState([]);
  var [video, setVideo] = useState(exampleVideoData[0]);

  let timeout = null;
  const searchHandler = (e) => {
    let query = e.target.value;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      searchYouTube(query, (videos)=>{
        setVideos(videos);
      });
    }, 500);
  };


  var updateVideo = function (onVideo) {
    //video = onVideo;
    setVideo(onVideo);
  };



  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search searchHandler = {(e)=>searchHandler(e)} />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={video} />
        </div>
        <div className="col-md-5">
          <VideoList videos={videos} updateVideo={updateVideo} />
        </div>
      </div>
    </div>
  );


};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
