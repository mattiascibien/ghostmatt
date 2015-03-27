$(document).ready(function() {
  if ( ($(window).height() + 50) < $(document).height() ) {
    $('#top-link-block').removeClass('hidden').affix({
        // how far to scroll down before link "slides" into view
        offset: {top:50}
    });
  }

  $.localScroll();
    
  $('.post-content').fitVids();
    
  $(function(){
    $('footer p > a').tooltip();
  });
});
