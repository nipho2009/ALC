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
	
	//While loop create's the table rows using the height value
    while(i <= height.val()) {
		
        canvas.append('<tr></tr>');
        row = $('tr').last();
		
		//for loop create's the table columns using the width value
        for(var c=1; c<=width.val(); c++) {
            row.append('<td></td>');
        }
        i += 1;
		
    }
	//listening for cell click then call the colorSpace function
    $('td').click(colorSpace);
	
}

//this function insert and remove color on the table cell's
function colorSpace(evt) {
	
    var tableCell = $(evt.target);
	
	
    if(tableCell.attr('style')) {
		//check if the cell already has color set and remove it if it exist
        tableCell.removeAttr('style');
    }else {
		//insert color on cell
        tableCell.css('background', picker.val());
    }
}

sizePicker.submit(makeGrid);