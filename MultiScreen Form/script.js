const pages = document.querySelectorAll(".page");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const submit = document.getElementById("submit");
const detail = document.querySelectorAll("table tr td");
let pageNo = 0;

const showPage = () => {
  pages.forEach((page) => {
    page.style.display = "none";
  });
  document.querySelector(".submit-page").style.display = "none";

  pages[pageNo].style.display = "block";
  if (pageNo <= 0) {
    prev.style.display = "none";
    submit.style.display = "none";
  } else {
    prev.style.display = "inline-block";
    submit.style.display = "none";
  }
  if (pageNo >= pages.length - 1) {
    next.style.display = "none";
    submit.style.display = "inline-block";
  } else {
    next.style.display = "inline-block";
    submit.style.display = "none";
  }
};
showPage();
const nextPage = () => {
  pageNo++;
  showPage();
};
const prevPage = () => {
  pageNo--;
  showPage();
};
const showData = () => {
  detail[1].innerHTML =
    documen.querySelector("#name").value + document.querySelector("#surname");
  detail[1].innerHTML = document.querySelector("name");
};

next.addEventListener("click", () => {
  nextPage();
  submit.disabled = false;
});

prev.addEventListener("click", () => {
  prevPage();
  submit.disabled = false;
});
submit.addEventListener("click", () => {
  document.querySelector(".submit-page").style.display = "block";
  submit.disabled = true;
});
