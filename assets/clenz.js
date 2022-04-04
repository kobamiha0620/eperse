

// 要素が単一
// スクロールで要素が表示された時にclassを付与する
function add_class_in_scrolling(target) {
    let winScroll = $(window).scrollTop();
    let winHeight = $(window).height();
    let scrollPos = winScroll + winHeight;
    if (target.length) {
      var menuPos = target.offset().top;
    }
    if(menuPos < scrollPos) {
        setTimeout(function(){
            target.addClass('is-show');
        }, 900);
        
    }
}


$(window).on('load scroll', function() {
    add_class_in_scrolling($('.clenz__01'));
    // add_class_in_scrolling($('.clenz__02'));
});

$(window).scroll(function (){
    $('.fadein_block').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var target = $('.fadein_block');
        var speed = 500;
        if(scroll > elemPos - windowHeight){
            target.find('.fadein01').addClass('scrollin');
            setTimeout(function(){
                target.find('.fadein02').addClass('scrollin');
                setTimeout(function(){
                    target.find('.fadein03').addClass('scrollin');
                    setTimeout(function(){
                        target.find('.fadein04').addClass('scrollin');
                        setTimeout(function(){
                            target.find('.fadein05').addClass('scrollin');
                            setTimeout(function(){
                                target.find('.fadein06').addClass('scrollin');
                                setTimeout(function(){
                                    target.find('.fadein07').addClass('scrollin');
                                    setTimeout(function(){
                                        target.find('.fadein08').addClass('scrollin');
                                        setTimeout(function(){
                                            target.find('.fadein09').addClass('scrollin');
                                            setTimeout(function(){
                                                target.find('.fadein10').addClass('scrollin');
                                                setTimeout(function(){
                                                    target.find('.fadein11').addClass('scrollin');
                                                    
                                                },speed);
                                            },speed);
                                        },speed);
                                    },speed);
                                },speed);
                            },speed);
                        },speed);
                    },speed);
                },speed);
            },speed);
        }
    });
});

$(window).scroll(function (){
    $('.fadein_block02').each(function(){
        var elemPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        var target = $('.fadein_block02');
        var speed = 500;
        if(scroll > elemPos - windowHeight){
            target.find('.fadein01').addClass('scrollin');
            setTimeout(function(){
                target.find('.fadein02').addClass('scrollin');
                setTimeout(function(){
                    target.find('.fadein03').addClass('scrollin');
                    setTimeout(function(){
                        target.find('.fadein04').addClass('scrollin');
                        setTimeout(function(){
                            target.find('.fadein05').addClass('scrollin');
                            setTimeout(function(){
                                target.find('.fadein06').addClass('scrollin');
                                setTimeout(function(){
                                    target.find('.fadein07').addClass('scrollin');
                                    setTimeout(function(){
                                        target.find('.fadein08').addClass('scrollin');
                                        setTimeout(function(){
                                            target.find('.fadein09').addClass('scrollin');
                                            setTimeout(function(){
                                                target.find('.fadein10').addClass('scrollin');
                                                setTimeout(function(){
                                                    target.find('.fadein11').addClass('scrollin');
                                                    
                                                },speed);
                                            },speed);
                                        },speed);
                                    },speed);
                                },speed);
                            },speed);
                        },speed);
                    },speed);
                },speed);
            },speed);
        }
    });
});


