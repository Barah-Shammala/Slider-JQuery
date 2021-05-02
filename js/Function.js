

$(function(){


    $("#MyName").hide();
    $("h3").click(function(){
        $(".slide-text").slideToggle(1000, function(){
            $(".Thank-Mesg").fadeToggle(3000);
        });
    });
    // slide up and fadeOut
    // $("h3").dblclick(function(){
    //     $(".slide-text").slideUp(1000, function(){
    //         $(".Thank-Mesg").fadeOut(2000);
    //     });
    // });

});