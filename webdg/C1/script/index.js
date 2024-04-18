
$('li.main-menu').mouseenter(function(){
    
   $(this).find('.sub-menu').stop().slideDown()


})

$('li.main-menu').mouseleave(function(){

    $('.sub-menu').stop().slideUp()
})



$('.tab-menu li').click(function(){

    $('.tab-menu li a').removeClass('on')
    $(this).find('a').addClass('on')

    let index=$(this).index()
    
    $('.tab').removeClass('on')
    $('.tab').eq(index).addClass('on')

})


