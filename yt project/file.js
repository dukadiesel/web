var key = "AIzaSyAGq4WyoJKI8xcHqA4UDiT0fHQoMJrZZVs";
var search = document.querySelector('.search');

function onSearch(event) {
    if (event.keyCode === 13) {
        getVideo()
    }
};

function getVideo() {
    var req = new XMLHttpRequest();
    var baseUrl = "https://www.googleapis.com/youtube/v3/search?q=";

    req.open('GET', baseUrl + search.value + "&key=" + key)
    req.onload = function () {
        console.log(JSON.parse(req.responseText))
    }
    req.send();
}

search.addEventListener('keypress', onSearch)