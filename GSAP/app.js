let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let restart = document.querySelector(".restart");

let tl = gsap
  .timeline({
    defaults: {
      duration: 2,
    },
  })
  .to("h1", {
    y: -50,
    yoyo: true,
    repeat: -1,
  })
  .to("h1", {
    y: 0,
    yoyo: true,
    repeat: -1,
  })

  .to(".box1", {
    x: 70,
    backgroundColor: "blue",
  })

  .to(".box2", {
    y: -45,
    backgroundColor: "red",
  })

  .to(".box3", {
    x: -75,
    y: -157,
    backgroundColor: "green",
  })

  .to(".buttons", {
    y: -140,
    x: 5,
  });

play.addEventListener("click", () => tl.play());
pause.addEventListener("click", () => tl.pause());
restart.addEventListener("click", () => tl.restart());