let today = new Date();
let date = new Date();

let prevCal = function () {
	today = new Date( today.getFullYear(), today.getMonth() - 1, today.getDate() );

	makeYearMonth();
	makeCal();
	makeMunguk();
}

let nextCal = function () {
	today = new Date( today.getFullYear(), today.getMonth() +1, today.getDate() );
	
	makeYearMonth();
	makeCal();
	makeMunguk();
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

	makeMunguk(); // first munguk initailzation
}

let makeMunguk = function () {
	let firstDay = new Date( today.getFullYear(), today.getMonth(), 1 );
	let lastDay = new Date( today.getFullYear(), today.getMonth() + 1, 0 );

	let mungukID = document.getElementById("munguk");

	let row = null;
	let count = 0;

	while( mungukID.rows.length > 0 ) mungukID.deleteRow( mungukID.rows.length - 2 );

	row = mungukID.insertRow();
	for( let i = 1; i <= lastDay.getDate(); i++) {
		let weekend = new Date( today.getFullYear(), today.getMonth(), i )

		cell = row.insertCell();
		cell.innerHTML = i;

		if( weekend.getDay() == 0 ) cell.innerHTML = "<font color=red>" + i;
		if( weekend.getDay() == 1 ) cell.innerHTML = "<font color=blue>" + i;
	}
}

let toggleCal = function () {
	document.getElementById("yearmonth").setAttribute("colspan", "5");
	document.getElementsByClassName("grid")[0].removeAttribute("colspan");
	document.getElementsByClassName("grid")[1].removeAttribute("colspan");
	document.getElementById("munguk").setAttribute("style", "display: none");
	document.getElementById("calendar").removeAttribute("style");
}

let toggleMunguk = function () {
	//let lastDay = new Date( today.getFullYear(), today.getMonth() + 1, 0);

	document.getElementById("yearmonth").setAttribute("colspan", "23");
	document.getElementsByClassName("grid")[0].setAttribute("colspan", "4");
	document.getElementsByClassName("grid")[1].setAttribute("colspan", "4");
	document.getElementById("calendar").setAttribute("style", "display: none");
	document.getElementById("munguk").removeAttribute("style");
}

