$(document).ready(function() {
	// Координаты пазла
	var imgOffset; var Ximg; var Yimg;             
	
	// Координаты ячейки
	var tableOffset; var Xtable; var Ytable;
	
	var scrore = 0;
	
	// Перенос пазлов
	$('.draggable').draggable({
		stop: function (e, ui) {
			for (var i = 1; i <= n; i++) {
				// Сохраняем координаты каждого пазла
				imgOffset = $('#img'+i).offset();
				Ximg = Math.round(imgOffset.left);
				Yimg = Math.round(imgOffset.top);

				// Сохраняем координаты каждой ячейки
				tableOffset = $('#td'+i).offset();
				Xtable = Math.round(tableOffset.left);
				Ytable = Math.round(tableOffset.top);
				// При попадании
	            if (((Ximg >= Xtable) && (Yimg >= Ytable)) && ((Ximg <= Xtable+20) && (Yimg <=Ytable+20))) {
	                $('#img'+i).css({border:'1px solid #0f0'}).offset({left:Xtable,top:Ytable});
	                scrore++;
	            }
				// При победе
				if (scrore == n) {
					$('input#result').css({border:'2px solid #00f'}).removeAttr('disabled');
				}
			} 
		}
	});
});  	