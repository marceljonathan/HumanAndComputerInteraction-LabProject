sliderInt = 1;
sliderNext = 2;

$(function(){

    var image_index = 1;
    var max_image = 6;

    $("#right_arrow").click(function(){
        image_index++;

        if(image_index > max_image){
            image_index = 1;
        }

        let translation = (image_index - 1) * -100;

        $(".slider img").css({
            "transform":"translateX(" + translation + "%)",
            "transition":"1s"
        });
    });

    $("#left_arrow").click(function(){
        image_index--;

        if(image_index < 1){
            image_index = max_image;
        }

        let translation = (image_index - 1) * -100;

        $(".slider img").css({
            "transform":"translateX(" + translation + "%)",
            "transition":"1s"
        });
    });

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 350) {
          $(".navbar").css({
            "background" : "#0f0f1d",
            // "transition":"250ms ease"
          });

        //   $(".navbar ul li:hover .sub-menu ul li").css({
        //     "background" : "rgba(128, 128, 243, 0.5)",
        //     "transition":"250ms ease-in"
        //   });

        //   $(".active").css({
        //     "background" : "rgba(128, 128, 243, 0.2)",
        //     "transition":"250ms ease"
        //   });
        }else{
            $(".navbar").css("background" , "linear-gradient(rgb(15, 15, 29, 0.9), rgb(255, 255, 255,0))");
            
            // $(".navbar ul li:hover .sub-menu ul li").css({
            //     "background" : "rgba(15, 15, 29, 0.9)",
            //   });
    
            // $(".active").css({
            //     "background" : "rgba(15, 15, 29, 0.7)",
            // });
        }
    })
});