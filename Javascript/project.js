//adding gsap animations
const P0 = document.querySelector(".P0");
const P1 = document.querySelector(".P1");
const P2 = document.querySelector(".P2");
const P3 = document.querySelector(".P3");
const P4 = document.querySelector(".P4");
const P5 = document.querySelector(".P5");
const P6 = document.querySelector(".P6");
const P7 = document.querySelector(".P7");
const preload = document.querySelector(".preloader");

gsap.fromTo(
  P0,
  { x: -400, opacity: 0 },
  { duration: 0.9, x: 0, opacity: 1, delay: 5.3 }
)
gsap.fromTo(
  P1,
  { y: 400, opacity: 0 },
  { duration: 1, y: 0, opacity: 1, delay: 5.5 }
);
gsap.fromTo(
  P2,
  { x: 400, opacity: 0 },
  { duration: 1, x: 0, opacity: 1, delay: 6 }
);
gsap.fromTo(
  P3,
  { y: -200, opacity: 0 },
  { duration: 1, y: 0, opacity: 1, delay: 6.5 }
);
gsap.fromTo(
  P4,
  { x: 400, opacity: 0 },
  { duration: 1, x: 0, opacity: 1, delay: 7 }
);
gsap.fromTo(
  P5,
  { y: -200, opacity: 0 },
  { duration: 1, y: 0, opacity: 1, delay: 7.5 }
);
gsap.fromTo(
  P6,
  { x: -400, opacity: 0 },
  { duration: 1, x: 0, opacity: 1, delay: 8 }
);
gsap.fromTo(
  P7,
  { y: -200, opacity: 0 },
  { duration: 1, y: 0, opacity: 1, delay: 8.5 }
);
gsap.fromTo(preload, { x: -1500 }, { duration: 1, x: 0 });
