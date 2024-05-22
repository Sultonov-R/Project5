document.addEventListener("DOMContentLoaded", (event) => {
  const extraImage = document.querySelector(".extra");

  const handleAnimationEnd = () => {
    extraImage.style.display = "block";
    extraImage.style.width = "195px";
    extraImage.style.height = "200px";
    extraImage.style.marginLeft = "-21px";
    extraImage.style.marginTop = "-50px";
    extraImage.style.alignItems = "center";

    void extraImage.offsetWidth;
    extraImage.style.transition = "opacity 3s";
    extraImage.style.opacity = "1";
  };

  extraImage.style.opacity = "0";
  extraImage.style.display = "none";

  const animatedElements = document.querySelectorAll(
    ".first, .second, .third, .four"
  );
  let completedAnimations = 0;
  const totalAnimations = animatedElements.length;

  animatedElements.forEach((element) => {
    element.addEventListener("animationend", () => {
      completedAnimations++;
      if (completedAnimations === totalAnimations) {
        handleAnimationEnd();
      }
    });
  });
  setTimeout(function() {
    const firstTitle = document.querySelector('.first-title');
    const secondTitle = document.querySelector('.second-title');
    
    // Start fade out animation for first-title
    firstTitle.style.animation = 'fadeOut 2s forwards';

    // Ensure second-title is in the same place but hidden
    secondTitle.style.display = 'block';
    
    // After fade out animation completes, hide first-title and start fade in for second-title
    firstTitle.addEventListener('animationend', function() {
        firstTitle.style.display = 'none';
        secondTitle.style.animation = 'fadeIn 2s forwards';
    }, { once: true });
}, 3000);
});
