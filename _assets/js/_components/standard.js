///////////////////////////////////////
//      smooth-scrolling - http://css-tricks.com/snippets/jquery/smooth-scrolling/
///////////////////////////////////////
$(function() {
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});


///////////////////////////////////////
//      inserts current year
///////////////////////////////////////
$('.js-year').html(new Date().getFullYear());


///////////////////////////////////////
//      detects touch device
///////////////////////////////////////
if ("ontouchstart" in document.documentElement){
  $('html').addClass('touch');
} else {
  $('html').addClass('no-touch');
}


///////////////////////////////////////
//        Navigation
///////////////////////////////////////

// mobile nav toggle open & close
$('.js-toggle-mobile-nav').on('click', function(e) {
  $('.mobile-nav').toggleClass('is-open').toggleClass('is-closed');
});


///////////////////////////////////////
//        GET QUERY STRING VALUE
//-------------------------------------
//        ?modal=video
//        var queryValue = queryString('modal');
//        queryValue = "video"
///////////////////////////////////////


function queryString(sParam){
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++){
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam){
      return sParameterName[1];
    }
  }
}





// =========================================
//  ACCORDION
// =========================================


function accordion(trigger,target){
  var accordion = $('.accordion');
  var targetAccordion = $('#' + target);

  if(targetAccordion.hasClass('accordion--open')){
    trigger.removeClass('accordion--open');
    targetAccordion.slideUp().removeClass('accordion--open').addClass('accordion--closed');
  }else{
    $('.accordion__trigger.accordion--open').removeClass('accordion--open');
    trigger.addClass('accordion--open');
    targetAccordion.slideDown().removeClass('accordion--closed').addClass('accordion--open');
  }
}


$('.accordion--closed').each(function(){
  $(this).hide();
});

$('.accordion__trigger').click(function(event){
  var trigger = $(this);
  var target = $(this).attr('data-accordion-id');
  accordion(trigger,target);
});

