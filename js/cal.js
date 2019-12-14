let today = new Date();
let date = new Date();
//let yearmonthID = document.getElementById("yearmonth"); // select id which prints year, month

let prevCal = function () {
	today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
	makeCal();
}

let nextCal = function () {
	today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
	makeCal();
}

let makeCal = function () {
	let firstDay = new Date(today.getFullYear(), today.getMonth(), 1); // first day of this month
	let lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0); // last day of this month
	let calID = document.getElementById("calendar"); // select id which makes calendar table
	let mungukID = document.getElementById("munguk"); // select id another calendar style table
	let yearmonthID = document.getElementById("yearmonth"); // select id which prints year, month

	yearmonthID.innerHTML = today.getFullYear() + "년 " + (today.getMonth() + 1) + "월 ";

	while( calID.rows.length > 1 ) { calID.deleteRow(calID.rows.length - 1); } // delete rest of table row(tr)

	let row = null;
	let count = 0;

//////////////////////////////////////////////////////////////////////////////////////////////

	row = calID.insertRow();

	for( let i = 0; i < firstDay.getDay(); i++) { // loop 'i' until this month's days
		cell = row.insertCell();
		count += 1;
	}

	for( let i = 1; i <= lastDay.getDate(); i++) {
		cell = row.insertCell();
		cell.className += "day";
		cell.innerHTML = i;
		count += 1;
		if ( count % 7 == 1 ) { cell.innerHTML = "<font color=red>" + i; } // sunday
		if ( count % 7 == 0 ) { // saturday
			cell.innerHTML = "<font color=blue>" + i;
			row = calendar.insertRow();
		}
	}

	yearmonthID.setAttribute("colspan", "5"); // need to fix

/////////////////////////////////////////////////////////////////////////////////////////////

	// start munguk style
	row = mungukID.insertRow();
	count = 0;

	for(let i = 1; i < lastDay.getDate() + 1; i++) {
		cell = row.insertCell();
		cell.innerHTML = i;
	}

	mungukID.setAttribute("style", "display: none");
}
