// intro animation

const intro = gsap.timeline();

gsap.set('.hero-image', {opacity: 0});
gsap.set('.nav-container', {opacity: 0});
gsap.set('.logo-content', {opacity: 0});
gsap.set('.logo-line-bottom', {opacity: 0});
gsap.set('.logo-line-top', {scaleX: 0});
gsap.set('.mobile-nav-container', {display: "none", right: "-100%"});

intro.
    to('.hero-image', {opacity: 1, duration: 3, delay: 2})
    .fromTo('.logo-line-top', {scaleX: 0}, {scaleX: 1, duration: 1, ease: Power2.easeInOut})
    .to('.logo-line-bottom', {scaleX: 1, opacity: 1})
    .to('.logo-line-top', {top: 0, duration: .65}, 'translate, -=.5')
    .to('.logo-line-bottom', {bottom: 0, duration: .65}, 'translate, -=.5')
    .to('.logo-content', {opacity: 1, duration: 1.4, delay: .75})
    // .to('.hero-image', {opacity: 1, duration: 1.5, delay: 1}, 'fadeIn')
    .to('.nav-container', {opacity: 1, duration: 1},'-=.6');
    
    

// mobile nav toggle animation

const hamburger = document.querySelector('.hamburger');
const mobileNavToggle = gsap.timeline();

mobileNavToggle.to('.hamburger-line-top', 0.5, {attr:{d: "M8, 2, L2, 8"}, x: 1, ease:Power2.easeInOut}, 'start');
mobileNavToggle.to('.hamburger-line-middle', 0.5,{autoAlpha: '0'}, 'start');
mobileNavToggle.to('.hamburger-line-bottom', 0.5, {attr:{d: "M8, 8, L2, 2"}, x: 1}, 'start');
mobileNavToggle.to('.mobile-nav-container', 0.35, {display: "flex", right: 0}, 'start');

mobileNavToggle.reverse();

hamburger.addEventListener('click', () => {
    mobileNavToggle.reversed(!mobileNavToggle.reversed());
});

