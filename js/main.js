$(function () {

console.log('dziala');

var $navigation = $('.nav-list');

$('.hamburger-menu').on('click',function() {
    $navigation.toggleClass('is-active');
});


});
