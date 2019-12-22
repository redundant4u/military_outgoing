let writeData = function (lastDay, thisYear, thisMonth) {
	$.ajax({
		url: '/mil/db/ajax.php',
		type: 'POST',
		dataType: 'text',
		data: { yearmonth: thisYear + "-" + thisMonth },
		success: function(data) {
			console.log(data);
			let dayID;

			const obj = JSON.parse(data);
			const outgoingData = obj.outgoing;

			for( let i = 0; i < outgoingData.length; i++ ) {
				let outgoingKind = outgoingData[i].outgoingkind;
				let outgoingName = outgoingData[i].name;
				let thisYearMonth = thisYear + "-" + thisMonth;
				let startDay = Number( outgoingData[i].startdate.substr(8, 2) );
				let endDay = Number( outgoingData[i].enddate.substr(8, 2) );
				let startYearMonth = outgoingData[i].startdate.substr(0, 7);
				let endYearMonth = outgoingData[i].enddate.substr(0, 7);
				let printEndday;
				//let startMonth = outgoingData[i].startdate.substr(5, 2);
				//let endMonth = outgoingData[i].enddate.substr(5, 2);

				for( let j = 1; j <= lastDay.getDate(); j++ ) {
					dayID = document.getElementById(j);

					if( j == startDay ) {

						if( thisYearMonth != startYearMonth  )
							startDay = 1;
						if( thisYearMonth != endYearMonth ) {
							printEndday = endDay;
							endDay = lastDay.getDate();
							console.log(printEndday);
						}

						switch(outgoingKind) {
							case "dayouting":
								dayID.innerHTML += "* " + outgoingName + "<br>";
								break;

							case "outing":
								dayID.innerHTML += "<font color=green>* " + outgoingName + "</font><br>";
								break;

							case "overnight":
								for( let k = startDay; k < endDay + 1; k++ ) {
									dayID = document.getElementById(k);
									dayID.innerHTML  += "<font color=blue>* " + outgoingName + "<br>";
								}
								break;

							case "vacation":
								for( let k = startDay; k < endDay + 1; k++ ) {
									dayID = document.getElementById(k);
									if( typeof(printEndday) == 'undefined' ) dayID.innerHTML  += "<font color=red>* " + outgoingName + " (~" + endDay + ")<br></font>";
									else dayID.innerHTML  += "<font color=red>* " + outgoingName + " (~" + printEndday + ")<br></font>";
								}
								break;
							} // end of switch
						}
					}
				}
			}
	});
}				
