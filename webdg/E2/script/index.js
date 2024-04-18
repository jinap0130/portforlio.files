



// --------------------세로


let i = 0

$('.slide').eq(0).clone().appendTo('.slide-wrap')

function slide() {


    i++
    console.log(i)

    $('.slide-wrap').animate({ 'top': -100 * i + '%' }, 500)

    if (i === $('.slide').length - 1) {
        i = 0

        $('.slide-wrap').animate({ 'top': 0 }, 0)
    }
}

setInterval(slide, 3000)



// --------------------------------

$('.main-menu').mouseenter(function(){

    $(this).find('.sub-menu').stop().slideDown()
})

$('.main-menu').mouseleave(function(){

    $(this).find('.sub-menu').stop().slideUp()
})


// --------------------------------


$('li.pop-up').click(function(){

    $('.modal-wrap').fadeIn()
})
$('a.close').click(function(){

    $('.modal-wrap').fadeOut()
})