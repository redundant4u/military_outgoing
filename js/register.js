let openRegister = function () {
	document.getElementById("register").removeAttribute("style");
}

let outgoingKindSelect = function () {
	let kind_res = null;
	let kind = document.getElementsByName('outgoingKind');

	for( let i = 0; i < kind.length; i++ )
		if( kind[i].checked )
			kind_res = kind[i].value;

	outgoingTypeWrite(kind_res);
};

let outgoingTypeWrite = function (kind) {
	let startWrite = "<label>출타유형</label> "; /* blank sense :) */
	let typeID = document.getElementById("outgoingType");

	if( kind == "vacation" ) {
		typeID.innerHTML = startWrite +
			'<label class="radio-inline"><input type="radio" name="outgoingType" value="help"> 연가</label>\
			<label class="radio-inline"><input type="radio" name="outgoingType" value="prize"> 포상</label>\
			<label class="radio-inline"><input type="radio" name="outgoingType" value="encourage"> 위로</label>\
			<label class="radio-inline"><input type="radio" name="outgoingType" value="reward"> 보상</label>';
	}
	else {
		typeID.innerHTML = startWrite +
			'<label class="radio-inline"><input type="radio" name="outgoingType" value="help"> 정기</label>\
			<label class="radio-inline"><input type="radio" name="outgoingType" value="prize"> 포상</label>';
	}
}
