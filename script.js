let animacja = gsap.timeline()
let animacja1 = gsap.timeline()
let animacja2 = gsap.timeline()
let animacja3 = gsap.timeline()

animacja1.from("#LOGOLL",{
    x:-200,
    opacity:0,
    duration:1.5,
    delay:0.5,
})
animacja3.from(".logooo",{
    x:-200,
    opacity:0,
    duration:1.5,
    delay:1,
})

animacja2.from("#navv",{
    y:-300,
    opacity:0,
    duration:1.5,
    delay:1,
})

gsap.from("#lewa1",{
    scale: 0,
    x:-400,
    scrollTrigger:{
        trigger:"#lewa1",
        scroller: "body",
        start:"top 90%",
        end:"top 55%",
        scrub: true,
        toggleActiond: "restart none none none none",
    }
})

gsap.from("#prawa1",{
    scale: 0,
    x:400,
    scrollTrigger:{
        trigger:"#prawa1",
        scroller: "body",
        start:"top 90%",
        end:"top 55%",
        scrub: true,
        toggleActiond: "restart none none none none",
    }
})

gsap.from("#lewa2",{
    scale: 0,
    x:-400,
    scrollTrigger:{
        trigger:"#lewa2",
        scroller: "body",
        start:"top 90%",
        end:"top 55%",
        scrub: true,
        toggleActiond: "restart none none none none",
    }
})

gsap.from("#prawa2",{
    scale: 0,
    x:400,
    scrollTrigger:{
        trigger:"#prawa2",
        scroller: "body",
        start:"top 90%",
        end:"top 55%",
        scrub: true,
        toggleActiond: "restart none none none none",
    }
})

gsap.from("#lewa3",{
    scale: 0,
    x:-400,
    scrollTrigger:{
        trigger:"#lewa3",
        scroller: "body",
        start:"top 90%",
        end:"top 55%",
        scrub: true,
        toggleActiond: "restart none none none none",
    }
})

gsap.from("#prawa3",{
    scale: 0,
    x:400,
    scrollTrigger:{
        trigger:"#prawa3",
        scroller: "body",
        start:"top 90%",
        end:"top 55%",
        scrub: true,
        toggleActiond: "restart none none none none",
    }
})

gsap.from("#lewa4",{
    scale: 0,
    x:-400,
    scrollTrigger:{
        trigger:"#lewa4",
        scroller: "body",
        start:"top 90%",
        end:"top 55%",
        scrub: true,
        toggleActiond: "restart none none none none",
    }
})

gsap.from("#prawa4",{
    scale: 0,
    x:400,
    scrollTrigger:{
        trigger:"#prawa4",
        scroller: "body",
        start:"top 90%",
        end:"top 55%",
        scrub: true,
        toggleActiond: "restart none none none none",
    }
})

gsap.from("#lewa5",{
    scale: 0,
    x:-400,
    scrollTrigger:{
        trigger:"#lewa5",
        scroller: "body",
        start:"top 90%",
        end:"top 55%",
        scrub: true,
        toggleActiond: "restart none none none none",
    }
})

gsap.from("#prawa5",{
    scale: 0,
    x:400,
    scrollTrigger:{
        trigger:"#prawa5",
        scroller: "body",
        start:"top 90%",
        end:"top 55%",
        scrub: true,
        toggleActiond: "restart none none none none",
    }
})

gsap.from("#lewa6",{
    scale: 0,
    x:-400,
    scrollTrigger:{
        trigger:"#lewa6",
        scroller: "body",
        start:"top 90%",
        end:"top 55%",
        scrub: true,
        toggleActiond: "restart none none none none",
    }
})