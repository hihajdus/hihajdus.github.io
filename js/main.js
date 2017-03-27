$(function () {

console.log('dziala');


$('.hamburger-menu').click(function(){

    //$('.nav-list').stop().slideToggle(300)
    $('.nav-list').show();
});


$('.nav-list > a').click(function(){

    $('.nav-list').toggle();
})

$('.closebtn').click(function(){

    $('.nav-list').toggle();
})

//change te cards od products






});
