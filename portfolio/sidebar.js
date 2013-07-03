$(document).ready(function() {

  $('#sidebar').css('left', $('#sidebar').offset().left + 'px')

  $(window).scroll(function() {

    if ( $(window).scrollTop() > $('#headmast').height() + 56 ) {

      $('#sidebar').css({position: 'fixed', top: '3em'});

    }

    else {

      $('#sidebar').css({position: 'absolute', top: 'auto'});

    }

  });


});