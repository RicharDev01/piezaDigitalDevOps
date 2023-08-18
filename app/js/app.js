gsap.registerPlugin(ScrollTrigger)

gsap.defaults({ ease: 'none', duration: 3 })


gsap.to('.inicio__titulo', {
  scrollTrigger: {
    trigger: ".inicio__titulo",
    // markers: true,
    scrub: true,
    pin: true,
    start: "top top",
  },

  y: -100,
  letterSpacing: '3rem',
  filter:'blur(2rem)',
  opacity:0,
  

})

gsap.to('.inicio__parrafo', {
  scrollTrigger: {
    trigger: ".inicio__parrafo",
    // markers: true,
    scrub: true,
    pin: true,
    start: "top top",
  },

  y: -200

})

gsap.to('.sec-middle1', {
  scrollTrigger: {
    trigger: ".sec-middle1",
    // markers: true,
    scrub: true,
    pin: true,
    start: "top top",
  },

  y: -200

})

gsap.to('.sec1__titulo', {
  scrollTrigger: {
    trigger: ".sec1__titulo",
    // markers: true,
    scrub: true,
    pin: true,
    start: "top top",
  },

  y: -200

})

gsap.to('.sec1__parrafo', {
  scrollTrigger: {
    trigger: ".sec1__parrafo",
    // markers: true,
    scrub: true,
    pin: true,
    start: "top top",
  },

  y: -200

})

gsap.to('.sec2', {
  scrollTrigger: {
    trigger: ".sec2",
    // markers: true,
    scrub: true,
    pin: true,
    start: "top top",
  },

  y: -200

})


const tl = gsap.timeline()
