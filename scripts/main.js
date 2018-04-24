$(document).ready(function () {

    $(window).resize(function () {
    if ($(window).width() < 931) {
        $(".topnav .navresp").css("display", "none");
        $(".menu").show();
        $(".close").hide();
    } else {
        $(".topnav .navresp").css("display", "inline-block");
        $(".close").hide();
    }
    });

    //Responsive Navigation
    $(".menu").click(function () {
        $(".menu").hide();
        $(".topnav .navresp").css("display", "block");
        $(".close").show();
    });
    $(".close").click(function () {
        $(".menu").show();
        $(".topnav .navresp").css("display", "none");
        $(".close").hide();
    });
    
   //Sroll resizing Navigation
    $(document).on("scroll", function () {
    if ($(document).scrollTop() > 20) {
        $("#navcontainer").css("padding", "20px 5%"); 
    } else {
        $("#navcontainer").css("padding", "40px 5%"); }
    });
    
});