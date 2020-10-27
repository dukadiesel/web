// function addClass() {
//     var color = document.getElementsByTagName('ul')[1];
//     var items = color.querySelectorAll('li');

//     for (var i = 0; i < items.length; i++){
//         items[i].className = "backround-green";
//     }
// }
// addClass();

// function trav() {
//     var klasa = document.getElementsByTagName('ul')[1];

//     klasa.getElementsByTagName('li')[2].className = "active";

// }
// // trav();

// function nova() {
//     var first = document.querySelector(".active");
//     first.className = "";

//     var a = first.parentElement;
//     var b = a.previousElementSibling;

//     b.firstElementChild.className = "active";

// }
// nova();


// function access() {
//     var taj = document.querySelectorAll("nav ul li");

//     for (var i = 0; i < taj.length; i++) {
//         alert(taj[i].textContent)
//     }
// }
// access();

function prim (a) {
    var neki = document.querySelector('ul');
    neki.lastElementChild.textContent = a
}

prim("ludilo")