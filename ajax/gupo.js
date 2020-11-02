var button = document.querySelector("button");

function createImage(url) {
    var img = document.createElement('img');
    var body = document.querySelector('body');

    img.setAttribute('src', url);
    body.appendChild(img);
}

function removeCurrentImage() {
    var img = document.querySelector('img');
    img && img.parentElement.removeChild(img);
}
function getData() {
    var newXhR = new XMLHttpRequest();
    newXhR.open('GET', "https://dog.ceo/api/breeds/image/random");


    newXhR.onload = function () {
        removeCurrentImage();
        createImage((JSON.parse(newXhR.responseText).message));

    }
    newXhR.send();
}

button.addEventListener('click', getData);