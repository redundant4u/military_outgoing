let showData = function ( lastDay, thisYear, thisMonth, command ) {

	let xhr = new XMLHttpRequest();
	let yearmonth = thisYear + "-" + thisMonth;

	xhr.open( "POST", "/mil/db/ajax.php", true );
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send( encodeURI('yearmonth=' + yearmonth + '&command=' + command) );

	xhr.onreadystatechange = function () {
		if( xhr.readyState == 4 && xhr.status == 200 ) {
			let obj = JSON.parse(xhr.responseText);

			showMore( obj, thisMonth, lastDay );

	/*		let showMore = function () {
				const outgoingData = obj.outgoing;
				let moreID = document.getElementById("more");

				for( let day = 1; day <= lastDay.getDate(); day++ ) {
					let dayID = document.getElementById(day);

					dayID.onclick = function () {
						moreID.innerHTML += "<p>" + e
					}
				}
			}*/

			let process = function () {
				const outgoingData = obj.outgoing;

				let row = null;

				let dayID = null;
				let gridID = document.getElementById("grid");

				let nameArray = new Array();

				for( let i = 0; i < outgoingData.length; i++ ) {
					let outgoingName = outgoingData[i].name;
					for( let nameIndex = 0; nameIndex < outgoingData.length; nameIndex++ ) {
						nameArray.push(outgoingName);
						nameArray = removeDuplicatedArray(nameArray);
					}
				}

				for( let i = 0; i < nameArray.length; i++ ) {
					row = gridID.insertRow();
					cell = row.insertCell();
					cell.innerHTML = nameArray[i];
					cell.colSpan = "2";

					for( let j = 1; j < lastDay.getDate() + 1; j++ ) cell = row.insertCell();
				}

				for( let i = 0; i < outgoingData.length; i++ ) {
					let outgoingKind = outgoingData[i].outgoingkind;
					let outgoingName = outgoingData[i].name;
					let thisYearMonth = thisYear + "-" + thisMonth;
					let startDay = Number( outgoingData[i].startdate.substr(8, 2) );
					let endDay = Number( outgoingData[i].enddate.substr(8, 2) );
					let startYearMonth = outgoingData[i].startdate.substr(0, 7);
					let endYearMonth = outgoingData[i].enddate.substr(0, 7);
					let printEndday;

					for( let j = 1; j <= lastDay.getDate(); j++ ) {

						if( j == startDay ) {
							dayID = document.getElementById(j);


							if( thisYearMonth != startYearMonth  ) // prevent two consecutive months from being unshown
								startDay = 1;
							if( thisYearMonth != endYearMonth ) {
								printEndday = endDay;
								endDay = lastDay.getDate();
							}

							switch(outgoingKind) {
								case "dayouting":
									dayID.innerHTML += "* " + outgoingName + "<br>";

									for( let k = 0; k < nameArray.length; k++ )
										if( nameArray[k] == outgoingName )
											gridID.childNodes[k + 2].childNodes[j].style = 'background: black;';

									break;

								case "outing":
									dayID.innerHTML += "<font color=green>* " + outgoingName + "</font><br>";
									
									for( let k = 0; k < nameArray.length; k++ )
										if( nameArray[k] == outgoingName )
											gridID.childNodes[k + 2].childNodes[j].style = 'background: green;';

									break;

								case "overnight":
									for( let k = startDay; k < endDay + 1; k++ ) {
										dayID = document.getElementById(k);
										dayID.innerHTML  += "<font color=blue>* " + outgoingName + "<br>";
									}
									
									for( let k = 0; k < nameArray.length; k++ ) {
										if( nameArray[k] == outgoingName ) {
											for( let l = startDay; l < endDay + 1; l++ ) {
												gridID.childNodes[k + 2].childNodes[l].style = 'background: blue;';
											}
										}
									}		

									break;

								case "vacation":
									for( let k = startDay; k < endDay + 1; k++ ) {
										dayID = document.getElementById(k);
										if( typeof(printEndday) == 'undefined' ) dayID.innerHTML  += "<font color=red>* " + outgoingName + " (~" + endDay + ")<br></font>";
										else dayID.innerHTML  += "<font color=red>* " + outgoingName + " (~" + printEndday + ")<br></font>";
									}

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
				} // end of process function


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

			process();

		}
	}
}
