 /*jslint devel: true */
 /*jslint browser */

console.log("Welcome to My Portfolio Site!");

function menuToggle() {
    var x = document.getElementById("myNavtoggle");
    if (x.className === "navtoggle") {
        x.className += " responsive";
    } else {
        x.className = "navtoggle";
    }
}