let writeData = function (lastDay, thisYear, thisMonth) {
	$.ajax({
		url: '/mil/db/ajax.php',
		type: 'POST',
		dataType: 'text',
		data: { yearmonth: thisYear + "-" + thisMonth },
		success: function(data) {
			console.log(data);
			let row = null;
			let dayID = null;
			let gridID = document.getElementById("grid");
			let nameArray = new Array();

			const obj = JSON.parse(data);
			const outgoingData = obj.outgoing;

			let calendarWrite = function () {
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
							nameArray.push(outgoingName);
							nameArray = removeDuplicatedArray(nameArray);

							if( thisYearMonth != startYearMonth  ) // prevent two consecutive months from being unshown
								startDay = 1;
							if( thisYearMonth != endYearMonth ) {
								printEndday = endDay;
								endDay = lastDay.getDate();
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
					gridWrite(nameArray);
				} // end of calendarWrite

				let gridWrite = function (nameArray) {

					for(let i = 0; i < nameArray.length; i++ ) {
						row = gridID.insertRow();
						cell = row.insertCell();
						cell.innerHTML = nameArray[i];
						cell.colSpan = '2';

						for( let j = 0; j < lastDay.getDate(); j++ ) cell = row.insertCell();
					}

					for( let i = 0; i < outgoingData.length; i++ ) {
						let outgoingKind = outgoingData[i].outgoingkind;
						let outgoingName = outgoingData[i].name;
						let thisYearMonth = thisYear + "-" + thisMonth;
						let startDay = Number( outgoingData[i].startdate.substr(8, 2) );
						let endDay = Number( outgoingData[i].enddate.substr(8, 2) );
						let startYearMonth = outgoingData[i].startdate.substr(0, 7);
						let endYearMonth = outgoingData[i].enddate.substr(0, 7);

						for( let j = 1; j < lastDay.getDate(); j++ ) {
							if( j == startDay ) {

								switch(outgoingKind) {
									case "dayouting":
										for( let k = 0; k < nameArray.length; k++ )
											if( nameArray[k] == outgoingName )
												gridID.childNodes[k + 2].childNodes[j].style = 'background: black;';
										break;

									case "outing":
										for( let k = 0; k < nameArray.length; k++ )
											if( nameArray[k] == outgoingName )
												gridID.childNodes[k + 2].childNodes[j].style = 'background: green;';
										break;

									case "overnight":
										for( let k = 0; k < nameArray.length; k++ ) {
											if( nameArray[k] == outgoingName ) {
												for( let l = startDay; l < endDay + 1; l++ ) {
													gridID.childNodes[k + 2].childNodes[l].style = 'background: blue;';
												}
											}
										}		
										break;

									case "vacation":
										for( let k = 0; k < nameArray.length; k++ ) {
											if( nameArray[k] == outgoingName ) {
												for( let l = startDay; l < endDay + 1; l++ ) {
													gridID.childNodes[k + 2].childNodes[l].style = 'background: red;';
												}
											}
										}		
										break;
								} // end of switch
							}
						}
					}
				}

				let removeDuplicatedArray = function (array)  {
					let tempArr = [];
					for( let i = 0; i < array.length; i++ ) {
						if( tempArr.legnth == 0 ) tempArr.push(array[i]);
						else {
							let duplicateFlag = true;
							for( let j = 0; j < tempArr.length; j++ ) {
								if( tempArr[j] == array[i] ) {
									duplicateFlag = false;
									break;
								}
							}
							if( duplicateFlag ) tempArr.push(array[i]);
						
						}
					}
					return tempArr;
				}

				calendarWrite();
			}
	});
}				
