// CLICK BUTTON
gsap.from('.click', 1, {
  delay: 1,
  opacity: 0
})

// OVERLAY DISSAPEARS
function removeOverlay() {
  gsap.to(".overlay h1", 2, {
  opacity: 0,
  y: -500,
  ease: Circ.easeIn
});

gsap.to(".overlay span", 2, {
  opacity: 0,
  y: -500,
  ease: Circ.easeIn
});

gsap.to(".click", 2, {
  opacity: 0,
  y: -500,
  ease: Circ.easeIn
});

gsap.to(".overlay", 2, {
    delay: 1,
    top: "-100%",
  })
};


// CIRCLES APPEAR
function showCircles() {
  gsap.from(".ellipse-container", 2, {
    delay: 2.5,
    opacity: 0,
  });

  gsap.from(".orange", 1, {
    delay: 4.5,
    opacity: 0
  })
};

// NAVIGATION APPEARS
function showNavigation() {
  gsap.from('.logo', 0.8, {
    delay: 3,
    opacity: 0,
    y: -100,
  });

  gsap.from('.menu-links', 1, {
    delay: 3.5,
    opacity: 0,
    x: -200
  });

  gsap.from('.scrolldown', 1, {
    delay: 3.7,
    opacity: 0,
    y: 200
  })
};

// BODY TEXT APPEARS
function showBodyText() {
  gsap.from('.title', 1, {
    delay: 3,
    opacity: 0,
    x: 200
  });

  gsap.from(".text p", 1, {
    delay: 3.2,
    opacity: 0,
    x: 200
  });

  gsap.from(".learn-more", 1, {
    delay: 3.5,
    opacity: 0,
    x: 200
  })
};

// SOCIALS APPEAR
function showSocials()
 {
  gsap.from('.media', 1, {
    delay: 3.7,
    opacity: 0,
    y: 200
  })
 };

// EVENT LISTENER
document.getElementById('overlay').addEventListener('click', function(e) {
  removeOverlay();
  showCircles();
  showNavigation();
  showBodyText();
  showSocials()
});