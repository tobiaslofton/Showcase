function main() {

  $('.sliderImages').slick({
    /*slidesToShow: 1,*/
    /*slidesToScroll: 1,*/
     autoplay: true,
     arrows: false,
     infinite: true,
     speed: 1000,
     lazyLoad: 'ondemand',
     lazyLoadBuffer: 0,
     fade: true,
     cssEase: 'linear'
  });



}

$(document).ready(main());
