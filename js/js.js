$('.slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  fade: true,//without this property slider can't open full screen animated img. Miracle
	 // autoplay: true,
	  autoplaySpeed: 10000,
	  draggable: false,
});//end slick
//--------------------------------------------
$('.menuToggle').on('click', function(){
		$('.menu').slideDown(500); // end slideToggle
}); // end menuToggle
//--------------------------------------------
$('.fa-times').on('click', function(){
		$('.menu').slideUp(500); // end fa-times
}); // end menuT
//--------------------------------------------
jQuery(function($){
	var max_col_height = 0; // максимальная высота, первоначально 0
	$('.eqheigth').each(function(){ // цикл "для каждой из колонок"
		if ($(this).height() > max_col_height) { // если высота колонки больше значения максимальной высоты,
			max_col_height = $(this).height(); // то она сама становится новой максимальной высотой
		}
	});
	$('.eqheigth').height(max_col_height); // устанавливаем высоту каждой колонки равной значению максимальной высоты
});
//---------------------------------------------
    //3 divs small scroll animation
	$(window).scroll(function(){
    var bo = $("body").scrollTop();
    if ( bo > 50 ) $("#world > div").css({'opacity':'1', 
    									   '-webkit-transform': 'translate(0)'});
     });
//---------------------------------------------
	$(window).scroll(function(){
	var bo = $('body').scrollTop();
	//$('#reasons_wrapper').text(bo);
	if ( bo > 1200 ) $('#reasons_wrapper').css({'top':'0',
												'opacity':'1'});
	});
//---------------------------------------------	
jQuery(function($){
	var max_col_height = 0; // максимальная высота, первоначально 0
	$('.equal_size_small').each(function(){ // цикл "для каждой из колонок"
		if ($(this).height() > max_col_height) { // если высота колонки больше значения максимальной высоты,
			max_col_height = $(this).height(); // то она сама становится новой максимальной высотой
		}
	});
	$('.equal_size_small').height(max_col_height); // устанавливаем высоту каждой колонки равной значению максимальной высоты
});
//---------------------------------------------
	$(window).scroll(function(){
	var bo = $('body').scrollTop();
	//$('#specialism_wrapper').text(bo);
	if ( bo > 2300 ) $('#specialism_wrapper').css({'right':'0',
												'opacity':'1'});
	});