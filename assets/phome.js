$('.phome__slide').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    arrows: false,
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    dots: true　//下部ドットナビゲーションの表示

  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 33) {
        $(".fadeUpTrigger").addClass("fadeUp");
    } 
});



  // ふわ
$(function(){
	$(window).scroll(function (){
		$('.fadein_block').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			var speed = 1000;
			if(scroll > elemPos - windowHeight){
                $(this).find('.fadeImg').addClass('scrollin');
				$(this).find('h2').addClass('scrollin');
				$(this).delay(speed).queue(function(){
					$(this).find('p').addClass('scrollin').dequeue();
					$(this).find('p').delay(speed).queue(function(){
						$(this).find('img').addClass('scrollin').dequeue();
					});
				});
			}
		});
	});
});