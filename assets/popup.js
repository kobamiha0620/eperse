

$(function () {
    //横移動
    $('#nextbtn').on('click', function(){
        $('.modal__frame02').addClass('active');
        $('.modal__frame01').addClass('disable');
    });


    $('.js-close').click(function () {
      $('#overlay, .modal-window').fadeOut();
    });

    $(window).on('load', function(){
        $('#overlay, .modal-window').fadeIn();

    });
  });