$(document).ready(function(){
    $(".menu").click(function(){
        $(".menu").css("display", "none");
        $(".topnav .navresp").css("display", "block");
        $(".close").css("display", "block");
    });
    $(".close").click(function(){
        $(".menu").css("display", "block");
        $(".topnav .navresp").css("display", "none");
        $(".close").css("display", "none");
    });
});

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