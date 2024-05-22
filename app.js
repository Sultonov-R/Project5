gsap.registerPlugin(ScrollTrigger);

gsap.to(".first", {
  scrollTrigger: {
    trigger: ".container",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
  y: -400,
  x: -300,
  duration: 1,
});

gsap.to(".second", {
  scrollTrigger: {
    trigger: ".container",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
  y: -400,
  x: -300,
  duration: 1,
});

// Animate the third image moving down and to the right
gsap.to(".third", {
  scrollTrigger: {
    trigger: ".container",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
  y: 400,
  x: 300,
  duration: 1,
});

// Animate the fourth image moving down and to the right
gsap.to(".four", {
  scrollTrigger: {
    trigger: ".container",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
  y: 400,
  x: 300,
  duration: 1,
});

const extraImage = document.querySelector('.extra');

ScrollTrigger.create({
  trigger: extraImage,
  start: "top 40%",
  onEnter: () => {
    extraImage.classList.add("visible");
  },
  onLeaveBack: () => {
    extraImage.classList.remove("visible");
  },
});


  const firstTitle = document.querySelector(".first-title");
  const secondTitle = document.querySelector(".second-title");

  gsap.fromTo(".first-title", 
  { opacity: 1 }, 
  {
      opacity: 0,
      scrollTrigger: {
          trigger: ".first-title",
          start: "top 90%", 
          end: "top 50%",
          scrub: true,
          onLeave: function() {
              gsap.set(".first-title", { display: "none" });
              gsap.set(".second-title", { display: "inline" });
              gsap.fromTo(".second-title", 
                  { opacity: 0, y: 20 }, 
                  { opacity: 1, y: 0, duration: 1 });
          },
          onEnterBack: function() {
              gsap.set(".second-title", { display: "none" });
              gsap.set(".first-title", { display: "inline" });
              gsap.fromTo(".first-title", 
                  { opacity: 0, y: 20 }, 
                  { opacity: 1, y: 0, duration: 1 });
          }
      }
  }
);