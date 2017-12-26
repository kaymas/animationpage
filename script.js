$(window).on('load', function(){

  $('.example-1 .button').on('click',function(){
    $(this).parents('.example-1').toggleClass('is-transitioned');
  });

  $('.example-2 .switch').on('click',function(){
    $(this).toggleClass('is-transitioned');
  });

});
