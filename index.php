<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
	<title>Mil Outgoing System</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="css/main.css">
	<link rel="stylesheet" type="text/css" href="css/cal.css">
	<link rel="stylesheet" type="text/css" href="css/register.css">
	<script type="text/javascript" src="js/register.js"></script>
	<script type="text/javascript" src="js/calendar.js"></script>
</head>
<body onload="makeCal()">
	<div class="body">
		<div class="main-padding2">
			<div id="toggle">
				<label class="radio-inline">
					<input type="radio" name="toggle" value="cal" onclick="toggleCal()" checked>달력
				</label>
				<label class="radio-inline">
					<input type="radio" name="toggle" value="munguk" onclick="toggleMunguk()">격자
				</label>
			</div>
			<button class="btn btn-default" onclick="openRegister()">등록</button>
			<div id="register" class="form-group" style="display: none;">
				<form action="register.php" method="POST">
					<div class="form-group">
						<input class="form-control" type="text" id="name" placeholder="이름">
					</div>
					<div class="form-group">
						<input class="form-control" type="text" id="milNum" placeholder="군번 (- 제외)">
					</div>
					<div id="command">
						<label>중대</label>
						<label class="radio-inline">
							<input type="radio" name="command" value="headquarter"> 본부중대
						</label>
					</div>
					<div id="rank">
						<label>계급</label>
						<label class="radio-inline">
							<input type="radio" name="rank" value="sergeant"> 병장
						</label>
						<label class="radio-inline">
							<input type="radio" name="rank" value="corporal"> 상병
						</label>
						<label class="radio-inline">
							<input type="radio" name="rank" value="first_class"> 일병
						</label>
						<label class="radio-inline">
							<input type="radio" name="rank" value="private"> 이병
						</label>
					</div> <!-- end of rank div -->
					<div id="outgoingKind" onclick="outgoingKindSelect()">
						<label class="">출타</label>
						<label class="radio-inline">
							<input type="radio" name="outgoingKind" value="dayouting"> 평일외출
						</label>
						<label class="radio-inline">
							<input type="radio" name="outgoingKind" value="outing"> 외출
						</label>
						<label class="radio-inline">
							<input type="radio" name="outgoingKind" value="overnight"> 외박
						</label>
						<label class="radio-inline">
							<input type="radio" name="outgoingKind" value="vacation"> 휴가
						</label>
					</div>
					<div id="outgoingType">
					</div>
				</form>
			</div>
			<table>
				<tbody>
					<tr>
						<td class="grid"><label onclick="prevCal()"><<</label></td>
						<td id="yearmonth" colspan="5"></td>
						<td class="grid"><label onclick="nextCal()">>></label></td>
					</tr>
				</tbody>
				<tbody id="calendar">
					<tr>
						<td><font color="red">일</font></td>
						<td>월</td>
						<td>화</td>
						<td>수</td>
						<td>목</td>
						<td>금</td>
						<td><font color="blue">토</font></td>
					</tr>
				</tbody>
				<tbody id="munguk" style="display: none">
				</tbody>
			</table>
		</div>
	</div>
	<footer class="footer">
		<div class="container">
			<hr>
			<p>Created by redundant4u</p>
		</div>
	</footer>
	</div>
</body>
</html>
