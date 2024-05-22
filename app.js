gsap.registerPlugin(ScrollTrigger);

// Animate the first image moving up and to the left
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

// Animate the second image moving up and to the left
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

// Animate the display of the extra image halfway through the scroll
gsap.to(".extra", {
  scrollTrigger: {
    trigger: ".container",
    start: "top 50%", // Start the animation when the top of the container reaches the middle of the viewport
    end: "bottom top",
    scrub: true,
    onEnter: () =>
      gsap.set(".extra", { display: "block", opacity: 1, duration: 1 }),
    onLeaveBack: () =>
      gsap.to(".extra", { display: "none", opacity: 0, duration: 1 }),
  },
  opacity: 1,
  duration: 1,
});



function toggleTitles() {
  const firstTitle = document.querySelector(".first-title");
  const secondTitle = document.querySelector(".second-title");

  // Use ScrollTrigger to create a trigger based on scroll position
  ScrollTrigger.create({
    // Trigger the animation when the element comes into view
    trigger: ".second-title",
    start: "top center", // Start when the top of .second-title reaches the center of the viewport
    onToggle: (self) => {
      if (self.isActive) {
        // When .second-title is in view, hide .first-title
        gsap.to(firstTitle, { autoAlpha: 0, display: "none" });
        gsap.to(secondTitle, { autoAlpha: 1, display: "block" });
      } else {
        // When .second-title is out of view, show .first-title
        gsap.to(firstTitle, { autoAlpha: 1, display: "block" });
        gsap.to(secondTitle, { autoAlpha: 0, display: "none" });
      }
    },
  });
}


// Call the toggleTitles function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", toggleTitles);
