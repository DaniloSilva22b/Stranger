$('.fig a', '.naveg a').click(function(e){
  e.preventDefault();
  var id = $(this).attr('href'),
  targetOffset = $(id).offset().top,
  menuHeight = $('.naveg').innerHeight();

   $('html, body').animate({
  scrollTop: targetOffset - menuHeight
  }, 500);
});