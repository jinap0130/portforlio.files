
// ------------------------세로

let i = 0
$('.slide').eq(0).clone().appendTo('.slide-wrap')

function slide() {

    i++
    $('.slide-wrap').animate({ 'top': -100 * i + '%' }, 500)
    console.log(i)

    if (i === $('.slide').length - 1) {

        i=0

        $('.slide-wrap').animate({ 'top': 0 }, 0)




    }
}


setInterval(slide, 3000)


// ------------------------------------


$('.tab-menu li').click(function(e){

    e.preventDefault()

    let idx=$(this).index()
    $('.tab-menu li').removeClass('on')//
    $(this).addClass('on')
    

    $('.tab').removeClass('on')
    $('.tab').eq(idx).addClass('on') 
})



// -----------------------------------

$('.main-menu').mouseenter(function(){

    $(this).find('.sub-menu').stop().slideDown()
})
$('li.main-menu').mouseleave(function(){

    $(this).find('.sub-menu').stop().slideUp()
})


// --------------------------------------


$('li.pop-up').click(function(){

    $('.modal').fadeIn()
})
$('a.close').click(function(){

    $('.modal').fadeOut()
})








