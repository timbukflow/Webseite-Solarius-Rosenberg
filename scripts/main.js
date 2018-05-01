$(document).ready(function () {
    
    //Responsive Navigation
    $(".menu").click(function () {
        $(".menu").hide();
        $(".topnav .navresp").css("display", "block");
        $(".close").css("display", "block");
    });
    $(".close").click(function () {
        $(".menu").show();
        $(".topnav .navresp").hide();
        $(".close").hide();
    });
    
   //Sroll resizing Navigation
    $(document).on("scroll", function () {
    if ($(document).scrollTop() > 20) {
        $("#navcontainer").css("padding", "20px 5%"); 
    } else {
        $("#navcontainer").css("padding", "40px 5%"); }
    });

   //Video player noch auf die richtigen werte anpassen!!!!!
    $("#buttonLive").click(function(){
        $("#webcam1").css("display", "block");
        $("#webcam2").css("display", "none"); 
    });
    $("#buttonTl").click(function(){
        $("#webcam2").css("display", "block");
        $("#webcam1").css("display", "none");  
    });
    
});