$('.main-menu').mouseenter(function(){

    $(this).find('.sub-menu').stop().fadeIn()



})
$('.main-menu').mouseleave(function(){

    $(this).find('.sub-menu').stop().fadeOut()



})



// -------------------------------------------------

$('.tab-menu li').click(function(){

    $('.tab-menu li a').removeClass('on')
    $(this).find('a').addClass('on')

    let index=$(this).index()
    
    $('.tab').removeClass('on')
    $('.tab').eq(index).addClass('on')

})


$('li.pop-up').click(function(){

    $('.modal').fadeIn()

})


$('a.close').click(function(){

    $('.modal').fadeOut()

})


