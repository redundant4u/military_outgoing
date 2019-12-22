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
	<link rel="stylesheet" type="text/css" href="http://code.jquery.com/ui/1.8.18/themes/base/jquery-ui.css">
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script src="http://code.jquery.com/ui/1.8.18/jquery-ui.min.js"></script>
	<script type="text/javascript" src="js/register.js"></script>
	<script type="text/javascript" src="js/calendar.js"></script>
	<script type="text/javascript" src="js/write.js"></script>
</head>
<body onload="makeCal()">
	<div class="body">
		<div class="main-padding2">
			<div id="toggle">
				<label class="radio-inline">
					<input type="radio" name="toggle" value="cal" onclick="toggleCal()" checked>달력
				</label>
				<label class="radio-inline">
					<input type="radio" name="toggle" value="grid" onclick="toggleGrid()">격자
				</label>
			</div>
			<button class="btn btn-default" onclick="openRegister()">등록</button>
			<div id="register" style="display: none;">
				<form action="register.php" method="POST">
					<div class="form-group">
						<input class="form-control" type="text" name="name" id="name" placeholder="이름" required>
					</div>
					<div class="form-group">
						<input class="form-control" type="text" name="number" id="number" placeholder="군번 (- 제외)" required>
					</div>
					<div id="command">
						<label>중대</label>
						<label class="radio-inline">
							<input type="radio" name="command" value="headquarter"> 본부중대
						</label>
					</div> <!-- end of command div -->
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
					</div> <!-- end of outgoingkind div -->
					<div id="outgoingType">
					</div>
					<div id="date">
						<input type="text" name="startDate" id="startDate" class="form-control">
						<input type="text" name="endDate" id="endDate" class="form-control">
					</div> <!-- end of date div -->
					<div id="submit" class="form-group">
						<input type="submit" value="확인" class="form-control"> <!-- somthing strange -->
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
				<tbody id="grid" style="display: none">
				</tbody>
			</table>
			<div id="test">
			</div>
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
