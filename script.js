$(window).on('load', function(){

  $('.example-1 .button').on('click',function(){
    $(this).parents('.example-1').toggleClass('is-transitioned');
  });

  $('.example-2 .switch').on('click',function(){
    $(this).toggleClass('is-transitioned');
  });

  $('.example-3 .btn').on('click',function(){
    $(this).parents('.layout').find('.alert').toggleClass('is-open');
  });

  $('.example-5 .send').on('click',function(){
    $(this).parents('.email').addClass('is-sent');
    setTimeout(function(){
      $('.email').removeClass('is-sent');
    },2000);
  });

});
