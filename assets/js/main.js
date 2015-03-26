$(document).ready(function() {
  if ( ($(window).height() + 50) < $(document).height() ) {
    $('#top-link-block').removeClass('hidden').affix({
        // how far to scroll down before link "slides" into view
        offset: {top:50}
    });
  }

  $.localScroll();

  $(function(){
    $('footer p > a').tooltip();
  });


  $('#contact-form').submit(function(){
    $.ajax({
      dataType: 'jsonp',
      url: "http://getsimpleform.com/messages/ajax?form_api_token=41896d297b3c68a32c1b54a837060da9",
      data: $('#contact-form').serialize()
    }).done(function() {
      $('#contact-modal').modal();
      $('#contact-form')[0].reset();
    });
    return false; //to stop the form from submitting
  });

});
