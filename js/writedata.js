/*
let writeData = function () {
	let xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function () {
		if( this.readyState == 4 && this.status == 200 )
			document.getElementById("ajax").innerHTML = this.responseText;
	};

	xhttp.open("POST", "", true);
	xhttp.send();
}
vanilla version... */

$.ajax({
	url: '/mil/db/ajax.php',
	type: 'POST',
	dataType: 'text',
	data: { yearmonth: '2019-12' },
	success: function(data) {
		let today = new Date();
		let lastDay = new Date( today.getFullYear(), today.getMonth() + 1, 0);
		//console.log(data);
		const obj = JSON.parse(data);
		const outgoingData = obj.outgoing;

		//console.log(obj.outgoing[0].startdate.substr(8, 10));
		console.log(obj.outgoing[0].enddate);
		for( let i = 1; i <= lastDay.getDate(); i++) {
			//let dayID = document.getElementById(i);
			let dayID = document.getElementById(i);

			for( let j = 0; j < outgoingData.length; j++ ) {
				if( outgoingData[j].outgoingkind == "vacation" ) { // if vacation
					if( i == outgoingData[j].startdate.substr(8, 10) ) {
						for( let k = outgoingData[j].startdate.substr(8, 10); k < outgoingData[j].enddate.substr(8, 10); k++ ) {
							dayID = document.getElementById(k);
							dayID.innerHTML += "<font color=red>* " + outgoingData[j].name + " (~" + outgoingData[j].enddate.substr(8, 10) + ")<br></font>";
						}
					}
				}

				else if( outgoingData[j].outgoingkind == "outing" ) {
					if( i == outgoingData[j].startdate.substr(8, 10) ) {
						dayID.innerHTML += "* " + outgoingData[j].name;
					}
				}
			}
		}
	}
});
