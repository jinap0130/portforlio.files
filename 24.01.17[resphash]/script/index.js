let i=0

$('.slide').eq(0).clone().appendTo('.slide-wrap')

function hSlide(){
    i++
    console.log(i)
    $('.slide-wrap').animate({'marginLeft':-100*i+'%'},500)
    if (i === 3)
    {
        i=0

        $('.slide-wrap').animate({'marginLeft':0},0)
    }
}
setInterval(hSlide, 2000)

//.animat({'방향':'정도'},바뀌는 시간)