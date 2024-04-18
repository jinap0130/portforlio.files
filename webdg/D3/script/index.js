



$('.slide:gt(0)').hide()

let slideIndex = 0

function fadeSlide() {


    slideIndex++
    console.log(slideIndex)

    if (slideIndex === 3) {
        slideIndex = 0


    }

    $('.slide').fadeOut()
    $('.slide').eq(slideIndex).fadeIn()
}


setInterval(fadeSlide, 3000)


// --------------------------------------------


// -------------------


$('.tab-menu li').click(function (e) {
    e.preventDefault()

    $('.tab-menu li').removeClass('on')
    $(this).addClass('on')

    let index = $(this).index()

    $('.tab').removeClass('on')
    $('.tab').eq(index).addClass('on')

})











// ----------------------------


$('.main-menu').mouseenter(function () {

    $('.submenu-wrap').stop().fadeIn()
    $('main').addClass('on')

})
$('.main-menu').mouseleave(function () {

    $('.submenu-wrap').stop().fadeOut()
    $('main').removeClass('on')

})