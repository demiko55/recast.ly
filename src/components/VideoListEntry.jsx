var VideoListEntry = ({ video, updateVideo }) => {
  // <div className="video-list-entry media">
  //   <div className="media-left media-middle">
  //     <img className="media-object" src="https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg" alt="" />
  //   </div>
  //   <div className="media-body">
  //     <div className="video-list-entry-title">Video Title</div>
  //     <div className="video-list-entry-detail">Video Description</div>
  //   </div>
  // </div>
  const onClick = () => {
    //console.log(video);
    updateVideo(video);
  };

  return (
    <div className="video-list-entry media">
      <div className="media-left media-middle">
        <img
          className="media-object"
          src={video.snippet.thumbnails.default.url}
          alt=""
        />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title"
          id={video.etag} onClick = {onClick}>
          {video.snippet.title}
        </div>
        <div className="video-list-entry-detail">
          {video.snippet.description}
        </div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
