$('li.main-menu').mouseenter(function () {
    //$(this).find('.sub-menu').slideDown()
    $('.sub-menu').stop().slideDown()
    $('header .inner').addClass('on')


})


$('li.main-menu').mouseleave(function () {

    $('.sub-menu').stop().slideUp()

    //$('.sub-menu').slideDown()
    $('header .inner').removeClass('on')

})







// // 주소를 가지고 있는 값이 a요소 이거 때문에 이벤트를 a로 지정한다
// $('.tab-menu li a').click(function(){
//     // a에 지정되어 있는 주소값을 읽어라

//     $('.tab-menu li a').removeClass('on')
//     $(this).addClass('on')
//     let href= $(this).attr('href')
//     // alert(href)

//     console.log(href)
//     // absolute layout으로 겹쳐있는 모든 요소를 지워라
//     $('.tab').removeClass('on')
//     // 읽어들인 위치값만 보여라
//     $(href).addClass('on')

// })

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
