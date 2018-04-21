/* eslint-env browser */

//Menu by scroll big and small
var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
              if (prevScrollpos > currentScrollPos) {
                  document.getElementById("nav-container").style.padding = "40px 5% 40px 5%";
              } else {
                  document.getElementById("nav-container").style.padding = "20px 5% 20px 5%";
              }
              prevScrollpos = currentScrollPos;
            }
            
//Responsiv Menu    
function myFunction() {
    var x = document.getElementById("Topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
