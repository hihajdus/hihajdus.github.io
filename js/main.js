$(function () {

console.log('dziala');


$('.hamburger-menu').click(function(){

    //$('.nav-list').stop().slideToggle(300)
    $('.nav-list').show();
});


$('.closebtn').click(function(){

    $('.nav-list').toggle();
});

//


$('.nav-list > a').click(function(){

if (window.matchMedia("(max-width: 1023px)").matches) {

    $('.nav-list').toggle();

};

});


if (window.matchMedia("(min-width: 768px)").matches) {
    $('#products-2').addClass('dead');
    $('#arrow-1').click(function(){
        $('#products-1').addClass('dead');
        $('#products-2').removeClass('dead');
    });
};

if (window.matchMedia("(min-width: 768px)").matches) {
    
    $('#arrow-2').click(function(){
        $('#products-2').addClass('dead');
        $('#products-1').removeClass('dead');
    });
};



});
