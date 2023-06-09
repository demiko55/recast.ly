import { API_KEY, YOUTUBE_API_KEY } from '../config/config.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});


var searchYouTube = (query, callback) => {// TODO
  var server = "https://app-hrsei-api.herokuapp.com/api/recastly/videos";
  $.ajax({
    url: server,
    type: 'GET',
    data: {
      key: YOUTUBE_API_KEY,
      q: query
    },
    contentType: 'application/json',
    success: function (data) {
      callback(data);
    },
    error: function (error) {
      console.error('chatterbox: Failed to fetch messages', error);
    }
  });
};

export default searchYouTube;
