const scroll = new LocomotiveScroll({ //smooth scroll 
    el: document.querySelector('#main'),
    smooth: true
});

function playBtnAnimation() {
var videocon = document.querySelector("#video-container");
var playbtn = document.querySelector("#play");
videocon.addEventListener("mouseenter", function () {
 // Animate play button to become visible & normal size
// (better than CSS because GSAP is smoother)
 gsap.to(playbtn, {
    scale : 1,
    opacity : 1
 })
})
videocon.addEventListener("mouseleave", () => {
    gsap.to(playbtn, {
         scale : 0, // shrink to zero
         opacity : 0       // make invisible
    })
})
 // Move play button with the cursor
videocon.addEventListener("mousemove",(dets)=> {
    gsap.to(playbtn, {
       left : dets.x-70,
       top : dets.y-70
    })
})
}
playBtnAnimation();
function loadingCharAnimation(){
    gsap.from("#page1 h1", {
    y:100,   // start 100px below their final position
    opacity : 0,
    delay: 0.5,  // wait 0.5s after page load
    duration: 0.9,
    stagger: 0.3  // each h1 starts 0.3s after the previous one
})
}
gsap.from("#page1 #video-container", { // Any GSAP animation written directly (not inside an event) runs on page load
    scale: 0.9,
    opacity:0,
    delay:1.3, // wait until text animation is mostly done
    duration:0.3
})
loadingCharAnimation();