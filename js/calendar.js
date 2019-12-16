let today = new Date();
let date = new Date();

let prevCal = function () {
	today = new Date( today.getFullYear(), today.getMonth() - 1, today.getDate() );

	makeYearMonth();
	makeCal();
	makeGrid();
}

let nextCal = function () {
	today = new Date( today.getFullYear(), today.getMonth() +1, today.getDate() );
	
	makeYearMonth();
	makeCal();
	makeGrid();
}

let makeYearMonth = function () {
	let yearmonthID = document.getElementById("yearmonth");
	yearmonthID.innerHTML = today.getFullYear() + "년 " + ( today.getMonth() + 1 ) + "월 ";
}

let makeCal = function () {
	let firstDay = new Date( today.getFullYear(), today.getMonth(), 1 );
	let lastDay = new Date( today.getFullYear(), today.getMonth() + 1, 0 );

	let calID = document.getElementById("calendar");

	makeYearMonth();

	while( calID.rows.length > 1 ) calID.deleteRow( calID.rows.length - 1 );

	let row = null;
	let count = 0;

	row = calID.insertRow();
	
	for( let i = 0; i < firstDay.getDay(); i++) {
		cell = row.insertCell();
		count += 1;
	}

	for( let i = 1; i <= lastDay.getDate(); i++ ) {
		cell = row.insertCell();
		cell.className += "day";
		cell.innerHTML = i;
		count += 1;

		if( count % 7 == 1 ) cell.innerHTML = "<font color=red>" + i; // sunday
		if( count % 7 == 0 ) { cell.innerHTML = "<font color=blue>" + i; row = calendar.insertRow(); }
		//if( today == new Date('2019-12-13') ) { "<font color=green>" + i };
	}

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

	document.getElementById("yearmonth").setAttribute("colspan", "23");
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
