let showMore = function (obj, thisMonth, lastDay) {
	const outgoingData = obj.outgoing;

	let moreID = document.getElementById("more");
	let dayID = null;

	for( let day = 1; day <= lastDay.getDate(); day++ ) {
		dayID = document.getElementById(day);

		dayID.onclick = function () {
			let monthDay = "";

			if( day < 10 )
				monthDay = thisMonth + "-0" + day;
			else
				monthDay = thisMonth + "-" + day;

			let basicHTML = ""; // keep initalize
			let deleteHTML = "";
			let finalHTML = "";

			for( let i = 0; i < outgoingData.length; i++ ) {
				let outgoingKind = outgoingData[i].outgoingkind;
				let outgoingName = outgoingData[i].name;

				let startDay = outgoingData[i].startdate;
				let endDay = outgoingData[i].enddate;

				let outgoingNo = outgoingData[i].no;

				if( monthDay == startDay.substr(5, 5) || monthDay == endDay.substr(5, 5) ) {
					//console.log(day);

					basicHTML = makeHTML( outgoingName, outgoingKind, startDay, endDay );
					deleteHTML = makeDeleteHTML( outgoingNo );
					finalHTML += basicHTML + deleteHTML;
				}
			}
			moreID.innerHTML = finalHTML;
			moreID.removeAttribute("style");
		} // end of dayID.onclick
	}
}

let makeHTML = function ( outgoingName, outgoingKind, startDay, endDay ) {
	let nameHTML =
		`<div>
			<form action="./db/delete.php" method="POST" onsubmit="return confirm('데이터가 삭제됩니다!');">
				<div>
					<p>이름: ${outgoingName}</p<
				</div>`;

	let	outgoingKindHTML =
			`<div>
				<p>출타: ${outgoingKind}</p>
			</div>`;

	let startDayHTML =
		`<div>
			<p>시작일: ${startDay}</p>
		</div>`;

	let endDayHTML =
		`<div>
			<p>복귀일: ${endDay}</p>
		</div>
		</div>`;
			// split each of outgoing data
	
	return nameHTML + outgoingKindHTML + startDayHTML + endDayHTML;
}

let makeDeleteHTML = function ( outgoingNo ) {
	let deleteHTML =
			`<div>
				<input type="hidden" value="${outgoingNo}" name="no">
				<input type="submit" value="삭제">
			</div>
		</form>`;

	return deleteHTML;
}

/*
let makeKindHTML = function ( outgoingKind ) {
	let outgoingKindHTML = "";

	if( outgoingKind == "dayouting" ) {
		outgoingKindHTML =
			`<div>
				<label class="">출타</label>
				<label class="radio-inline">
					<input type="radio" name="outgoingKind" value="dayouting" checked disabled> 평일외출
				</label>
				<label class="radio-inline">
					<input type="radio" name="outgoingKind" value="outing" disabled> 외출
				</label>
				<label class="radio-inline">
					<input type="radio" name="outgoingKind" value="overnight" disabled> 외박
				</label>
				<label class="radio-inline">
					<input type="radio" name="outgoingKind" value="vacation" disabled> 휴가
				</label>
			</div>`;
	}

	if( outgoingKind == "outing" ) {
		outgoingKindHTML =
			`<div>
				<label class="">출타</label>
				<label class="radio-inline">
					<input type="radio" name="outgoingKind" value="dayouting" disabled> 평일외출
				</label>
				<label class="radio-inline">
					<input type="radio" name="outgoingKind" value="outing" checked disabled> 외출
				</label>
				<label class="radio-inline">
					<input type="radio" name="outgoingKind" value="overnight" disabled> 외박
				</label>
				<label class="radio-inline">
					<input type="radio" name="outgoingKind" value="vacation" disabled> 휴가
				</label>
			</div>`;
	}

	if( outgoingKind == "overnight" ) {
		outgoingKindHTML =
			`<div>
				<label class="">출타</label>
				<label class="radio-inline">
					<input type="radio" name="outgoingKind" value="dayouting" disabled> 평일외출
				</label>
				<label class="radio-inline">
					<input type="radio" name="outgoingKind" value="outing" disabled> 외출
				</label>
				<label class="radio-inline">
					<input type="radio" name="outgoingKind" value="overnight" checked disabled> 외박
				</label>
				<label class="radio-inline">
					<input type="radio" name="outgoingKind" value="vacation" disabled> 휴가
				</label>
			</div>`;
	}
	
	if( outgoingKind == "vacation" ) {
		outgoingKindHTML =
			`<div>
				<label class="">출타</label>
				<label class="radio-inline">
					<input type="radio" name="outgoingKind" value="dayouting" disabled> 평일외출
				</label>
				<label class="radio-inline">
					<input type="radio" name="outgoingKind" value="outing" disabled> 외출
				</label>
				<label class="radio-inline">
					<input type="radio" name="outgoingKind" value="overnight" disabled> 외박
				</label>
				<label class="radio-inline">
					<input type="radio" name="outgoingKind" value="vacation" checked disabled> 휴가
				</label>
			</div>`;
	}

	return outgoingKindHTML;
}
*/
