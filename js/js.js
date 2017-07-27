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