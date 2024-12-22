const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

// var elem1 = document.querySelector("#elem1");
// var b = elem1.getAttribute('data-image')
// console.log(b)

// image display code
function page4Animation() {
  var elemC = document.querySelector("#elem-container");
  var fixed = document.querySelector("#fixed-image");
  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });
  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}

// var elem1 = document.querySelector("#elem1");
// elem1.addEventListener("mouseenter", function () {
//   var image = elem1.getAttribute("data-image");
//   fixed.style.backgroundImage = `url(${image})`;
// });

// template literls
// ${}

// swiper
function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,
  });
}

function menuAnimation() {
  var menu = document.querySelector("#nav h3");
  var full = document.querySelector("#full-scr");
  var navImg = document.querySelector("#nav img");
  var flag = 0;

  menu.addEventListener("click", function () {
    if (flag == 0) {
      full.style.top = 0;
      navImg.style.opacity = 0;
      flag = 1;
    } else {
      full.style.top = "-100%";
      navImg.style.opacity = 1;
      flag = 0;
    }
  });
}

function loaderAnimation(){
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4200);
}
menuAnimation();
swiperAnimation();
page4Animation();
loaderAnimation()


