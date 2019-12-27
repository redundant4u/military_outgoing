let today = new Date();
let date = new Date();

let prevCal = function () {
	today = new Date( today.getFullYear(), today.getMonth() - 1, today.getDate() );

	makeCal();
	makeGrid();
}

let nextCal = function () {
	today = new Date( today.getFullYear(), today.getMonth() +1, today.getDate() );
	
	makeCal();
	makeGrid();
}

let commandSelect = function () {
	let command_res = null;
	let command = document.getElementsByName("commandSelect");

	for( let i = 0; i < command.length; i++ )
		if( command[i].checked )
			command_res = command[i].value;

	makeCal(command_res);
}


let makeYearMonth = function () {
	let yearmonthID = document.getElementById("yearmonth");
	yearmonthID.innerHTML = today.getFullYear() + "년 " + ( today.getMonth() + 1 ) + "월 ";
}

let makeCal = function ( command = 'headquarter' ) {
	let thisYear = today.getFullYear();
	let thisMonth = today.getMonth();
	let firstDay = new Date( today.getFullYear(), today.getMonth(), 1 );
	let lastDay = new Date( today.getFullYear(), today.getMonth() + 1, 0 );

	let calID = document.getElementById("calendar");

	makeYearMonth();

	while( calID.rows.length > 1 ) calID.deleteRow( calID.rows.length - 1 );

	let row = null;
	let dbComapre = null;
	let count = 0;

	row = calID.insertRow();

	for( let i = 0; i < firstDay.getDay(); i++) {
		row.insertCell();
		//cell = row.insertCell();
		count += 1;
	}

	for( let i = 1; i <= 36; i++ ) {
		//let compare = thisYear + "-" + (thisMonth + 1) + "-" + i;
		let dayID = document.getElementById(i);

		cell = row.insertCell();
		//cell.id = thisYear + "-" + (thisMonth + 1) + "-" + i;
		//cell.className += "day";
		cell.innerHTML = i;
		count += 1;

		if( count % 7 == 1 ) cell.innerHTML = "<font color=red>" + i; // sunday
		if( count % 7 == 0 ) {
			cell.innerHTML = "<font color=blue>" + i;
			row = calID.insertRow();

			if( i > lastDay.getDate() )
				cell.innerHTML = "";

			for( let j = 0; j < 7; j++ ) {
				cell = row.insertCell();
				cell.className += "day";
				cell.id += i - (6 - j);
			}
			row = calID.insertRow();
		}

		if( i > lastDay.getDate() )
			cell.innerHTML = ""; // if i is more than last day, delete text
	}

	writeData( lastDay, thisYear, leadingZeros(thisMonth+1, 2), command );
	makeGrid(); // first grid initailzation
}

let makeGrid = function () {
	let firstDay = new Date( today.getFullYear(), today.getMonth(), 1 );
	let lastDay = new Date( today.getFullYear(), today.getMonth() + 1, 0 );

	let gridID = document.getElementById("grid");

	let row = null;
	let count = 0;

	while( gridID.rows.length > 0 ) gridID.deleteRow( gridID.rows.length - 2 );

	row = gridID.insertRow();
	cell = row.insertCell();
	cell.colSpan = "2";
	cell.innerHTML = "이름";


	for( let i = 1; i <= lastDay.getDate(); i++) {
		let weekend = new Date( today.getFullYear(), today.getMonth(), i )

		cell = row.insertCell();
		cell.innerHTML = i;

		if( weekend.getDay() == 0 ) cell.innerHTML = "<font color=red>" + i;
		if( weekend.getDay() == 6 ) cell.innerHTML = "<font color=blue>" + i;
	}
}

let toggleCal = function () {
	document.getElementById("yearmonth").setAttribute("colspan", "5");
	document.getElementsByClassName("grid")[0].removeAttribute("colspan");
	document.getElementsByClassName("grid")[1].removeAttribute("colspan");
	document.getElementById("grid").setAttribute("style", "display: none");
	document.getElementById("calendar").removeAttribute("style");
}

let toggleGrid = function () {
	//let lastDay = new Date( today.getFullYear(), today.getMonth() + 1, 0);

	document.getElementById("yearmonth").setAttribute("colspan", "25");
	document.getElementsByClassName("grid")[0].setAttribute("colspan", "4");
	document.getElementsByClassName("grid")[1].setAttribute("colspan", "4");
	document.getElementById("calendar").setAttribute("style", "display: none");
	document.getElementById("grid").removeAttribute("style");
}

$(function () {
	$.datepicker.setDefaults({
		dateFormat: 'yy-mm-dd',
		changeMonth: true,
		changeYear: true,
		nextText: '>>',
		prevText: '<<',
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		monthNamesMin: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		minDate: "-1M",
		maxDate: "+1M",
	});

	$('#startDate').datepicker();
	$('#endDate').datepicker();
});

let leadingZeros = function(number, digits) {
	let zero = "";

	number = number.toString();

	if( number.length < digits )
		for( let i = 0; i < digits - number.length; i++)
			zero += "0";
	
	return zero + number;
}
