// function welcomeMesage() {
//     console.log("Hello world")
// };
// welcomeMesage();

// function win() {
//     console.log(window.navigator)
//     console.log(window.navigator.appCodeName);
//     console.log(window.navigator.appVersion);
//     console.log(window.navigator.vendor);
// };
// win();

// function isOnline() {
//     if (window.navigator.onLine) {
//         console.log("Online")
//     } else {
//         console.log("Offline")
//     }
// };
// isOnline();

// function sirina() {
//     console.log(window.screen.width)
//     console.log(window.screen.height)
//     console.log(window.screen.availHeight)
// }
// sirina();

// function lokacija() {
//     // window.location.href = "http://www.google.rs"
//     console.log(window.location)
//     console.log(window.location.href)
//     console.log(window.location.pathname)
//     console.log(window.location.protocol)
//     console.log(window.location.search)
//     // window.location.reload()
// }
// lokacija();

// function skladiste(catName) {
//     window.localStorage.setItem("cat", catName)
// }
// skladiste("Tom");


// function dobij() {
//     if (!localStorage.length) {
//         console.log("there is no data")
//     } else {
//         console.log(window.localStorage.getItem("cat"))
//     }
// }
// dobij();

// function obrisi() {
//     localStorage.removeItem("cat")
// }
// obrisi();
// dobij();

function poruka() {
    alert('Hello!!!')
}
poruka();

function quest() {
    prompt('Pita Stefan jel imas 18 godina?')
}

var a = prompt('Pita Stefan jel imas 18 godina?')

function yes() {
    if (confirm("We will submit this answer now ---> " + a)) {
        alert('Hvala!!!!')
    }
}
yes();

