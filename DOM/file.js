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

// function prim (a) {
//     var neki = document.querySelector('ul');
//     neki.lastElementChild.textContent = a
// }

// prim("ludilo")

// var body = document.querySelector("body");
// var cars = ['bmw', 'vw', 'porsche'];

// function createSelect(target, data) {
//     var select = document.createElement('select');

//     for (var i = 0; i < data.length; i++) {
//         var option = document.createElement('option')
//         option.textContent = data[i]
//         select.appendChild(option)

//     }
//     target.appendChild(select)
// };
// createSelect(body, cars);

// var first = document.querySelector('body');

// function createDivs(where) {
//     for (var i = 0; i < 5; i++) {
//         var div = document.createElement('div')
//         where.appendChild(div)
//     }
// }
// createDivs(first);

// var divs = document.getElementsByTagName('div');
// var fir = divs[0]
// var last = divs[divs.length - 1];

// createSelect(fir, cars);
// createSelect(last, cars);


// var mozda = document.getElementsByTagName("input");

// function luda() {
//     for (var i = 0; i < mozda.length; i++) {
//         if (mozda[i].hasAttribute('required') && !mozda[i].value) {
//             mozda[i].setAttribute('class', 'boja')
//         }
//     }
// }
// luda();

