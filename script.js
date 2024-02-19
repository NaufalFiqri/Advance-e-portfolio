let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  let x, y;

  if (event.touches) {
    // For touch events on mobile
    x = event.touches[0].clientX * scaleFactor;
    y = event.touches[0].clientY * scaleFactor;
  } else {
    // For mouse events on desktop
    x = event.clientX * scaleFactor;
    y = event.clientY * scaleFactor;
  }

  const shapes = document.querySelectorAll(".shape");

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${
      y * boolInt
    }px) rotate(${x * boolInt * 10}deg)`;
  }
}

// Add event listeners for both mouse and touch events
document.addEventListener("mousemove", moveBackground);
document.addEventListener("touchmove", moveBackground);

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact() {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_7cdsbte",
      "template_pjcg5ey",
      event.target,
      "MjHwD2HkfcBCans5r"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on naufalfiqrifauzi@gmail.com"
      );
    });
}

function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

// HEADER ANIMATION

function SplitUp() {
  // Your Split-Type code
  var splitText = new SplitType("#split-up", { types: "words,chars" });

  // Your GSAP animation
  gsap.to(".char", {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: 0.1,
  });
}

function SplitDown() {
  //Split-Type
  var splitText = new SplitType("#split-down", { types: "words,chars" });

  //GSAP animation
  gsap.to(".char", {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: 0.1,
  });
}

document.addEventListener("DOMContentLoaded", function () {
  SplitUp();
  SplitDown();
});

// SKILLS ANIMATION

gsap.registerPlugin(ScrollTrigger);

function skillanim() {
  gsap.from(".bar abbr", {
    scrollTrigger: {
      trigger: ".bar",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    ease: Power2.easeInOut,
    duration: 3,
    stagger: 0.1,
  });
}

document.addEventListener("DOMContentLoaded", function () {
  skillanim();
});
