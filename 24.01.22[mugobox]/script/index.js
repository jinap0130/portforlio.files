$('.character ul li a').click(function(){
    $('.character ul li a').removeClass('on')
    $(this).addClass('on')

    let href = $(this).attr("href")
    // alert(href) --중간확인

    $('article').removeClass('on')
    $(href).addClass('on')
})


// '': 안 붙은 값들은 변수( 고정되지 않은 값)