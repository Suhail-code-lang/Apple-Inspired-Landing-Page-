
   const slider = document.querySelector(".iphone-cards");

  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });

  slider.addEventListener("mouseleave", () => {
    isDown = false;
  });

  slider.addEventListener("mouseup", () => {
    isDown = false;
  });

  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    slider.scrollLeft = scrollLeft - walk;
  });

  gsap.from(".iphone-cards" , {
    y:70,
    duration:0.7,
    opacity:0.2,
    delay:0.1,
    stagger:0,
    scrollTrigger:' .card'
  })

  gsap.from(".know-iphone-cards" , {
    y:50,
    duration:0.5,
    opacity:0,
    delay:0.1,
    stagger:1,
  })

  gsap.from(".")
  let kaalaBtn = document.querySelector(".choices")
  kaalaBtn.addEventListener("click" , () =>{
  kaalaBtn.classList.add(".choices .choice1")
})





  