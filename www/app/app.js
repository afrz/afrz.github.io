
$( document ).ready(function() {

  var $grid = $('.grid').imagesLoaded( function() {

    // init isotope grid after all images have loaded
    $grid.isotope({
       percentPosition: true,
       itemSelector: '.tech',
       layoutMode: 'masonry',
       masonry: {
         columnWidth: '.grid-sizer'
       }
    });
  });

  //to filter the skills on button clik
  var filterButtons = $('.button[data-filter]').on('click', function() {

    var btn = $(this);

    //change button's availability
    filterButtons.addClass("alt").removeClass('special')
    btn.removeClass('alt').addClass('special');

    //filter items based on filter
    $grid.isotope({
      filter: btn.attr('data-filter')
    });
    //prevent bubbling
    return false;
  });
});
