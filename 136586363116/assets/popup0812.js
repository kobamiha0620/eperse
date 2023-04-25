
$(function () {
    $('.js-nextlink0812a').on('click', function(){
        $('.modal__frame--popup02').addClass('active');
        $('.modal__frame--popup01').addClass('disable');
    });
    $('.js-nextlink0812b').on('click', function(){
        $('.modal__frame--popup03').addClass('active');
        $('.modal__frame--popup02').addClass('disable');
    });


    $('.js-close0803').click(function () {
      $('#overlay, .modal-window0803').fadeOut();
    });

    $(window).on('load', function(){
        $('#overlay, .modal-window0803').fadeIn();
    });
  });