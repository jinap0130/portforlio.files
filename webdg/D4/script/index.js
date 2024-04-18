

$('.slide:gt(0)').hide()

let slideIndex = 0

function fadeSllide() {

    slideIndex++

    console.log(slideIndex)

    if (slideIndex === 3) {
        slideIndex = 0
    }

    $('.slide').fadeOut()
    $('.slide').eq(slideIndex).fadeIn()

}


setInterval(fadeSllide, 3000)




// ----------------------------------------



$('li.main-menu').mouseenter(function () {

    $('.submenu-wrap').stop().fadeIn()

    $('main').addClass('on')
})


$('li.main-menu').mouseleave(function () {

    $('.submenu-wrap').stop().fadeOut()

    $('main').removeClass('on')
})