//slider settings
$('.slider').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  fade: true,//without this property slider can't open full screen animated img. Miracle
	  autoplay: true,
	  autoplaySpeed: 5000,
	  draggable: false,
});//end slick
//--------------------------------------------
//menu buton
$('.menuToggle').on('click', function(){
		$('.menu').slideDown(500); // end slideToggle
}); // end menuToggle
//--------------------------------------------
//close menu button
$('.fa-times').on('click', function(){
		$('.menu').slideUp(500); // end fa-times
}); // end menuT
//--------------------------------------------
//this function choose the highest column and makes this height for all columns
jQuery(function($){
	var max_col_height = 0; // max height. initially 0
	$('.eqheigth').each(function(){ // cycle for each columl
		if ($(this).height() > max_col_height) { // if height of selected in cycle column is higher than our variable 'max_col_height'
			max_col_height = $(this).height(); // than it becomes the heighest one
		}
	});
	$('.eqheigth').height(max_col_height); // making max height for each column
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
//this function choose the highest column and makes this height for all columns
jQuery(function($){
	var max_col_height = 0; // max height. initially 0
	$('.equal_size_small').each(function(){ // cycle for each columl
		if ($(this).height() > max_col_height) { // if height of selected in cycle column is higher than our variable 'max_col_height'
			max_col_height = $(this).height(); // than it becomes the heighest one
		}
	});
	$('.equal_size_small').height(max_col_height); // making max height for each column
});
//---------------------------------------------
	$(window).scroll(function(){
	var bo = $('body').scrollTop();
	//$('#specialism_wrapper').text(bo);
	if ( bo > 2500 ) $('#specialism_wrapper').css({'right':'0',
												'opacity':'1'});
	});