
$(function() {
  //прикрепляем клик по заголовкам acc-head
	$('.availability__title-wrap').on('click', f_acc);
});
 
function f_acc(){
//скрываем все кроме того, что должны открыть
  $('.availability__item').not($(this).next());
// открываем или скрываем блок под заголовком, по которому кликнули
    $(this).next().slideToggle(500);
}

//*****************************************************************/ 

// Убавляем кол-во по клику
$('.availability__check-inner .availability__check-btminus').on('click', function() {
  let $input = $(this).parent().find('.availability__check-quantity');
  let count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
});
// Прибавляем кол-во по клику
$('.availability__check-inner .availability__check-btplus').on('click', function() {
  let $input = $(this).parent().find('.availability__check-quantity');
  let count = parseInt($input.val()) + 1;
  count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
  $input.val(parseInt(count));
}); 
// Убираем все лишнее и невозможное при изменении поля
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
      moment(this.value, "YYYY-MM-DD")
      .format( this.getAttribute("data-date-format"))
  )
});
