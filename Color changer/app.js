const boxes = document.querySelectorAll(".color-box");
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    const color = box.classList[1];
    console.log(color);
    body.style.backgroundColor = color;
  });
});
