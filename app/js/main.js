
$(function() {
  //прикрепляем клик по заголовкам acc-head
	$('.availability__title-wrap').on('click', f_acc);
});
 
function f_acc(){
//скрываем все кроме того, что должны открыть
  $('.availability__item-info').not($(this).next());
// открываем или скрываем блок под заголовком, по которому кликнули
    $(this).next().slideToggle(2000);
}

