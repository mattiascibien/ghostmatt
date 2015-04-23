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
    $('#search').popover({ 
        html : true
    });
    $("#search").ghostHunter({
        results   : "#results",
        onKeyUp   : true,
        result_template : "<li><a href='{{link}}'><strong>{{title}}</strong></p></li>"
    });
  });
  
  coinwidget($('.coin'));
  $('.coin a').tooltip();
});
