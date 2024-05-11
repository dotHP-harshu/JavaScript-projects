// To make a slider with sliding effect then remove the comment of line 9,12,13,14 and comment lines 16, 17, 18, 19

const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const images = document.querySelectorAll("#img-container img");

let currenIndex = 0;
// images.forEach((image, index) => (image.style.left = `${index * 100}%`));

const showImg = () => {
  //   images.forEach((img) => {
  //     img.style.transform = `translateX(-${currenIndex * 100}%)`;
  //   });

  images.forEach((image) => {
    image.style.display = "none";
  });
  images[currenIndex].style.display = "block";

  if (currenIndex === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }
  if (currenIndex === images.length - 1) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
};
showImg();

const nextImg = () => {
  // console.log("currenIndex", index);
  currenIndex++;
  // if (index >= images.length) {
  //   index = 0;
  // }
  // console.log(index);
  showImg();
};

const prevImg = () => {
  // console.log("currenIndex", index);
  currenIndex--;
  // if (index < 0) {
  //   index = images.length - 1;
  // }
  // console.log(index);
  showImg();
};

nextBtn.addEventListener("click", nextImg);
prevBtn.addEventListener("click", prevImg);
