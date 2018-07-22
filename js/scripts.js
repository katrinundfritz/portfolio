$(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#stage');
   var offset = startchange.offset();

   if (startchange.length){
     $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $('.navbar').css('background-color', '#30303A');
            $('.navbar-toggle').css('background-color', '#30303A');
         } else {
            $('.navbar').css('background-color', 'transparent');
            $('.navbar-toggle').css('background-color', 'transparent');
         }
     });
    }
});

var $root = $('html, body');
$('.navbar-nav a').click(function() {
  var href = $.attr(this, 'href');
  if (href != undefined && href != '#') {
  $root.animate({
    scrollTop: $(href).offset().top
  }, 500, function () {
    window.location.hash = href;
  });
  }
  return false;
});

/*----------------------------------------------
                PROGRESS BARS
------------------------------------------------*/

  $(".progress-element").each(function() {
      $(this).waypoint(function() {
      var progressBar = $(".progress-bar");
      progressBar.each(function(indx){
          $(this).animate({width: $(this).attr("aria-valuenow") + "%"}, 200);
      });
  }, {
      triggerOnce: true,
      offset: '100%'
    });
   });
