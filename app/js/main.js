
$(function() {
	$('.availability__title-wrap').on('change', f_acc);
});
function f_acc(){
  $('.availability__item-info').not($(this).next());
    $(this).next().slideToggle(500);
}

//*****************************************************************/ 

$('.availability__check-inner .availability__check-btminus').on('click', function() {
  let $input = $(this).parent().find('.availability__check-quantity');
  let count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
});
$('.availability__check-inner .availability__check-btplus').on('click', function() {
  let $input = $(this).parent().find('.availability__check-quantity');
  let count = parseInt($input.val()) + 1;
  count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
  $input.val(parseInt(count));
}); 

$('.availability__check-inner .availability__check-quantity').bind("change keyup input click", function() {
  if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
  }
  if (this.value == "") {
      this.value = 1;
  }
  if (this.value > parseInt($(this).data('max-count'))) {
      this.value = parseInt($(this).data('max-count'));
  }    
});


$("input").on("change", function() {
  this.setAttribute(
      "data-date",
      moment.utc(this.value, "YYYY-MM-DD")
      .format( this.getAttribute("data-date-format"))
  )
});


var countImg = $(".base-img").children().length;
document.getElementById("base-img").innerHTML = '+ ' + countImg + ' photos';

$(function(){

$('.slider__items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  variableWidth: true,
  prevArrow: "<img src='/images/slider-arrow-prev.svg' class='slider__arrow-prev' alt='prev'>",
  nextArrow: "<img src='/images/slider-arrow-next.svg' class='slider__arrow-next' alt='next'>",
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        arrows:false,
        settings: "slick"
      }
    }
  ]
});

});

const mediaQuery = window.matchMedia('(max-width: 480px)')

if (mediaQuery.matches) {
$('#aboutBtn').on('click', function(){
  $(".about__service-second--mobile").slideToggle(500);
  $(".about__service-third--mobile").slideToggle(500);
});

$('#propertyBtn').on('click', function(){
  $(".property__item-second--mobile").slideToggle(500);
  $(".property__item-third--mobile").slideToggle(500);
});

$('#rulesBtn').on('click', function(){
  $(".rules__part-second--mobile").slideToggle(500);
  $(".rules__part-third--mobile").slideToggle(500);
});
}

