var key = "AIzaSyAGq4WyoJKI8xcHqA4UDiT0fHQoMJrZZVs";
var search = document.querySelector('.search');
var videos = document.querySelector('main .wrapper');
var iframe = document.querySelector('iframe');

function goPlay(video) {
  iframe.setAttribute('src', 'https://www.youtube.com/embed/' + video);
  iframe.classList.add('visible')
  iframe.setAttribute('style', 'display:block')
}

function createVideo(video) {
  var container = document.createElement('div');
  var videoContainer = document.createElement('div');
  var videoPlace = document.createElement('img');
  var textContainer = document.createElement('div')
  var videoTitle = document.createElement('h3');
  videoTitle.addEventListener('click', function() {
    goPlay(video.id.videoId)
  });
  var videoDesc = document.createElement('p')
  //ubaci sta gde ide
  videoPlace.addEventListener('click', function() {
    goPlay(video.id.videoId)
  });
  videoPlace.setAttribute('src', video.snippet.thumbnails.medium.url)
  //
  container.setAttribute('class', 'container')
  videoContainer.setAttribute('class', 'videooo')
  textContainer.setAttribute('class', 'texttt')
  // ubacivati
  videoTitle.textContent = video.snippet.title
  videoDesc.textContent = video.snippet.description
  //
  videoContainer.appendChild(videoPlace)
  textContainer.appendChild(videoTitle)
  textContainer.appendChild(videoDesc)
  //
  container.appendChild(videoContainer)
  container.appendChild(textContainer)
  //
  videos.appendChild(container)
}

function listVideos(data) {
  videos.innerHTML = '';
  for (var i = 0; i < data.length; i++) {
    createVideo(data[i])
  }
}

function onSearch(event) {
  if (event.keyCode === 13) {
    getVideo()
  }
};

function getVideo() {
  var req = new XMLHttpRequest();
  var baseUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=";

  req.open('GET', baseUrl + search.value + "&type=video&maxResults=50&key=" + key)
  req.onload = function() {
    listVideos(JSON.parse(req.responseText).items)
  }
  req.send();
}

search.addEventListener('keypress', onSearch)