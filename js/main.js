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

//

$('#arrow-1').click(function(){

if (window.matchMedia("(min-width: 768px)").matches) {

    $('#products-1').slideToggle(600);
    $('#products-2').show();

};

});

$('#arrow-2').click(function(){

if (window.matchMedia("(min-width: 768px)").matches) {

    $('#products-2').slideToggle(600);
    $('#products-1').show();

};

});



});
