const leftIcon = document.querySelectorAll(".scroll-left");
const rightIcon = document.querySelectorAll(".scroll-right");

const project = document.querySelectorAll(".section-1");

const section2 = document.querySelector(".section-2");

for (let i = 0; i < project.length; i++) {
  if (project[i].querySelectorAll(".scroll-btns").length === 0) {
    break;
  }
  project[i].addEventListener("mouseenter", function () {
    project[i].querySelector(".scroll-btns").style.visibility = "visible";
  });
  project[i].addEventListener("mouseleave", function () {
    project[i].querySelector(".scroll-btns").style.visibility = "hidden";
  });
}

for (let i = 0; i < rightIcon.length; i++) {
  rightIcon[i].addEventListener("click", function () {
    const scrollingElement =
      rightIcon[i].parentElement.parentElement.firstElementChild
        .firstElementChild.nextElementSibling;
    let fullElementWidth = scrollingElement.scrollWidth;
    const fullWidth = scrollingElement.clientWidth;

    scrollingElement.scrollLeft += 350;
  });
}

for (let i = 0; i < leftIcon.length; i++) {
  leftIcon[i].addEventListener("click", function () {
    const scrollingElement =
      leftIcon[i].parentElement.parentElement.firstElementChild
        .firstElementChild.nextElementSibling;
    let fullElementWidth = scrollingElement.scrollWidth;
    const fullWidth = scrollingElement.clientWidth;

    scrollingElement.scrollLeft -= 350;
  });
}

// rightIcon.addEventListener("click", function () {
//   rightIcon.parentElement.parentElement.firstElementChild.firstElementChild.nextElementSibling.scrollLeft += 50;
// });
