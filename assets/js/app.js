/*
 *Funcion general
 */
$(document).ready(function() {
  /*
   *Splash
   */
  $("#splash").fadeIn(5000).slideUp(2000);

  /*
   *Dropdown
   */
  $(".selLabel").click(function() {
    $('.dropdown').toggleClass('active');
  });

  $(".dropdown-list li").click(function() {
    $('.selLabel').text($(this).text());
    $('.dropdown').removeClass('active');
    $('.selected-item p span').text($('.selLabel').text());
  });

  /*
   *Filtro
   */
  $("#mexicana").click(function() {
    $('a').show().filter(':not(.mexicana)').hide()
  });

  $("#peruana").click(function() {
    $('a').show().filter(':not(.peruana)').hide()
  });

  $("#rapida").click(function() {
    $('a').show().filter(':not(.rapida)').hide()
  });

  $("#thai").click(function() {
    $('a').show().filter(':not(.thai)').hide()
  });

  /*
   *Mouseover
   */
   $('.thumbnail').mouseover(function() {
      $('.txtRestaurant').show();
    }).mouseout(function() {
      $('.txtRestaurant').hide();
    });

    $('.thumbnail').mouseover(function() {
      $('.this').children('.caption').show();
    });
/*
  $('.thumbnail').mouseover(function() {
    $('.this').children('.txtRestaurant').show();
  });
*/
  
});
