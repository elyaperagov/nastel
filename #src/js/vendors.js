@@include('libs/smoothScroll.js', {})
@@include('libs/swiper.min.js', {})
@@include('libs/aos.js', {})
@@include('libs/masonry.js', {})
AOS.init();

var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, {
  // options...
  itemSelector: '.grid-item',
  columnWidth: 200
});