let toggleCal = function () {
	let yearmonthID = document.getElementById("yearmonth");
	document.getElementById("munguk").setAttribute("style", "display: none");
	document.getElementById("calendar").removeAttribute("style");

	yearmonthID.setAttribute("colspan", "5");
}

let toggleMunguk = function () {
	let lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate() - 2;
	let yearmonthID = document.getElementById("yearmonth");

	document.getElementById("calendar").setAttribute("style", "display: none");
	document.getElementById("munguk").removeAttribute("style");

	yearmonthID.setAttribute("colspan", lastDay);
}
