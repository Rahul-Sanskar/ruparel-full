$(document).ready(function(){
    $(".button span").click(function(){
        $(".overlay1").fadeToggle(200);
       $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});
$('.overlay1').on('click', function(){
    $(".overlay1").fadeToggle(200);   
    $(".button span").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});
