var sizePicker = $('#sizePicker');
var height = $('#inputHeight');
var width = $('#inputWeight');
var picker = $('#colorPicker');
var canvas = $('#pixelCanvas');

function makeGrid() {
    
    var i = 1;
	var row;
	
	event.preventDefault();
    $('tr').remove();
	
    while(i <= height.val()) {
		
        canvas.append('<tr></tr>');
        row = $('tr').last();
		
        for(var c=1; c<=width.val(); c++) {
            row.append('<td></td>');
        }
        i += 1;
		
    }
    $('td').click(colorSpace);
	
}

function colorSpace(evt) {
	
    var tableCell = $(evt.target);
	
    if(tableCell.attr('style')) {
		
        tableCell.removeAttr('style');
    }else {
		
        tableCell.css('background', picker.val());
    }
}

sizePicker.submit(makeGrid);