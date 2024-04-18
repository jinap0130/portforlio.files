$('li.main-menu').mouseenter(function () {

    $(this).find('.sub-menu').stop().slideDown()
$('.slide-container').addClass('on');

})
$('li.main-menu').mouseleave(function () {

    $(this).find('.sub-menu').stop().slideUp()
    $('.slide-container').removeClass('on');

})



$('.tab-menu li').click(function (e) {
    e.preventDefault()

    $('.tab-menu li').removeClass('on')
    $(this).addClass('on')

    let index = $(this).index()

    $('.tab').removeClass('on')
    $('.tab').eq(index).addClass('on')

})




// -------------------


let i = 0
$('.slide').eq(0).clone().appendTo('.slide-wrap')
function horSlide() {
    i++


    console.log(i)
    $('.slide-wrap').animate({'marginLeft':-100*i+'%'},500)
    if(i===3){
        i=0
        $('.slide-wrap').animate({'marginLeft':0},0)
    }



}

setInterval(horSlide, 2500)

// --------------------


$('li.popup').click(function(){

    $('.modal').fadeIn()
})

$('a.close').click(function(){

    $('.modal').fadeOut()
})


