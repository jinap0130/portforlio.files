let i = 0

$('.slide').eq(0).clone().appendTo('.slide-wrap')

function hSlide() {
    i++
    // console.log(i)
    $('.slide-wrap').animate({ 'marginLeft': -100 * i + '%' }, 500)
    if (i === 4) {
        i = 0

        $('.slide-wrap').animate({ 'marginLeft': 0 }, 0)
    }
}
setInterval(hSlide, 4000)

//.animat({'방향':'정도'},바뀌는 시간)

let t = 0
$('.vslide').eq(0).clone().appendTo('.v-wrap')

function vSlide() {

    t++
    $('.v-wrap').animate({ marginTop: -35 * t + 'px' }, 600)
    console.log(t)
    console.log(t * 35)


    if (t === 2) {
        t = 0
        $('.v-wrap').animate({ marginTop: 0 }, 0)
    }
}
setInterval(vSlide, 5000)
