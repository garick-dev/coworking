$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    easing: "ease",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: false,
    swipe: true,
    touchThreshold: 5,
    toucMove: true,
    waitForAnimate: true,
    centerMode: false,
    variableWidth: false,
    rows: 1,
    sliderPerRow: 1,
    vertical: false
  });
});

$(document).ready(function () {
  $(".slider-gallery").slick({
    dots: true,
    arrows: true,
    adaptiveHeight: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    easing: "ease",
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: false,
    swipe: true,
    toucMove: true,
    waitForAnimate: true,
    centerMode: false,
    variableWidth: true,
    rows: 1,
    sliderPerRow: 1,
    vertical: false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },

      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });
});
