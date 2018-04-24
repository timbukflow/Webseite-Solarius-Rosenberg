$(document).ready(function () {
    
    //Responsive Navigation
    $(".menu").click(function () {
        $(".menu").css("display", "none");
        $(".topnav .navresp").css("display", "block");
        $(".close").css("display", "block");
    });
    $(".close").click(function () {
        $(".menu").css("display", "block");
        $(".topnav .navresp").css("display", "none");
        $(".close").css("display", "none");
    });
    
   
    
});

 //Sroll resizing Navigation
    $(document).on("scroll", function () {
    if ($(document).scrollTop() > 20) {
        $("#navcontainer").css("padding", "20px 5%"); 
    } else{
        $("#navcontainer").css("padding","40px 5%");
    }
    });