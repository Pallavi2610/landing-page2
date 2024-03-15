 var tl=gsap.timeline()

 tl.from(".div1,.div3,.div5",{
    y:-30,
    opacity:0,
    stagger:1,
    rotate:100
    // deley:3,
    // duration:2,
    // repeat:-1,
 })
 tl.from(".div2,.div4,.div6",{
    y:30,
    opacity:0,
    deley:3,
    duration:0.5,
    yoyo:true,
    stagger:1,
    rotate:-150,
 })
 tl.from(".h1,.logo,p,h2",{
    y:-300,
    opacity:0,
    deley:1,
    duration:0.5,
    // yoyo:true,
    stagger:0.1,
    // rotate:-150,
 })

 const body= document.querySelector("body");
//  var point=document.querySelector(".point")

 body.addEventListener("mousemove",function(e){
    gsap.to(".point",{
        left:e.x,
        top:e.y,
    })
 })
//  point.addEventListener("mouseenter",function(e){
//     gsap.to(".point",{
//         scale:2,
//     })
//  })
//  point.addEventListener("mouseleave",function(e){
//     gsap.to(".point",{
//         scale:1,
//     })
//  })




