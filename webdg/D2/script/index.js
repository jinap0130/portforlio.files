


let i = 0

$('.slide').eq(0).clone().appendTo('.slide-wrap')

function horSlide() {

    i++

    console.log(i)

    $('.slide-wrap').animate({ 'marginLeft': -100 * i + '%' }, 500)

    if (i === 3) {

        i = 0

        $('.slide-wrap').animate({ 'marginLeft': 0 }, 0)
    }
}


setInterval(horSlide, 2500)




// ---------------------------------------



$('.main-menu').mouseenter(function () {

    $(this).find('.sub-menu').stop().slideDown()
})


$('.main-menu').mouseleave(function () {

    $(this).find('.sub-menu').stop().slideUp()
})




// -----------------------------



$('.pop-up').click(function () {

    $('.modal').fadeIn()
})
$('a.close').click(function () {

    $('.modal').fadeOut()
})