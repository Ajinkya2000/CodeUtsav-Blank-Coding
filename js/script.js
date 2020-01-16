window.addEventListener("load", () => {
  const loader = $(".preload");
  loader.addClass("preload-finish");
});

//* CART ANIMATION
const cart = $(".cart");
cart.hover(
  function() {
    $(".fa-shopping-cart").addClass("cart-animation");
  },
  function() {
    $(".fa-shopping-cart").removeClass("cart-animation");
  }
);

//* NAV SLIDE
const navSlide = () => {
  const burger = $(".burger");
  const navul = $(".nav ul");

  burger.click(function() {
    navul.toggleClass("nav-active");

    burger.toggleClass("toggle");
  });
};
navSlide();
