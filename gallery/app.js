let images = document.querySelectorAll("img");
let wrapper = document.getElementById("wrapper");
let imgwrapper = document.getElementById("fullimg");
let close = document.querySelector("span");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    console.log(index);
    openmodal(`images/${index}.JPG`);
  });
});

close.addEventListener("click", () => (wrapper.style.display = "none"));

function openmodal(pic) {
  wrapper.style.display = "flex";
  imgwrapper.src = pic;
}
