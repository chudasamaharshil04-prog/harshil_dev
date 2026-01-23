var tl= gsap.timeline()

tl.from("nav",{
    y:-30,
    opacity:0,
    duration:2,
    delay:0.5
})
tl.from("nav ul li",{
    y:-30,
    opacity:0,
    duration:2,
    stagger:1
})