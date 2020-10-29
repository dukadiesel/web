var button = document.querySelector('button');
var container = document.querySelector('div');
var input = document.querySelector('input');

button.onclick = function () {
    var message = document.createElement('span');
    message.textContent = input.value;

    input.value = ' ';
    container.appendChild(message)
}
