//f.foreach()각각 callBack!!! $function>>> .foreach(function(){})너무 번거로워서 > .foreach(()=>{}) , .toArray()html상에 있는걸 읽어드림
gsap.utils.toArray('.item').forEach((item) => {
    let color = item.getAttribute('data-bgColor')
    //https://www.w3schools.com/tags/att_data-.asp
    //자바에서 값은 지정하는 방법
    //- a href="#주소번지", index, data-변수명
    console.log(color);
    //스크롤에 따라 섹션에 지정한 색으로 변경하기
    ScrollTrigger.create({
        trigger: item,
        start: "top 50%",
        end: "bottom 5%",
        onEnter: () => gsap.to("body", {
            backgroundColor: color,
            duration: 1.5
        }),
        onEnterBack: () => gsap.to("body", {
            backgroundColor: color,
            duration: 1.5
        })
    })

})

// nav 클릭 위치 찾아가기

let links = gsap.utils.toArray('nav ul li a')
// 순수 자바는 가져오면 [배열]로 인식하고 가지고 옴 
console.log(links);
//함수는 (소괄호){중괄호}로 이루어짐 . 근데 (인자값)인자값이 하나일때는 괄호 생략가능 
// links.forEach((link)=>{}
links.forEach(link => {
    let elem = document.querySelector(link.getAttribute('href'))
    console.log(link)

    ScrollTrigger.create({
        trigger: elem,
        //스크롤할때 특정SECTION이 화면 중앙에 위치하면 
        start: "top center",
        end: "bottom center",
        //해당 NAV의 링크를 활성화 한다.
        //e.preventdefault()> 이렇게 울림 
        onToggle: self => setActive(link)
    })
    let linkST = ScrollTrigger.create({
        trigger: elem,
        //사용자가 링크를 클릭하면 해당 SECTION 상단으로 스크롤을 이동해라
        start: "top top",
    })

    link.addEventListener('click', (e) => {
        e.preventDefault()
        //동시에 여러 스크롤 애니메이션이 발생하면 애니메이션ㅁ 간의 충동ㄹ을 방지하는 속성
        gsap.to(window, { duration: 1, scrollTo: linkST.start, overwrite: "auto" })

    })
})


function setActive(link) {
    links.forEach((el) =>  el.classList.remove('on') )
    link.classList.add('on')
}
//부드러우 스크롤 애니메이션 구형

const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
