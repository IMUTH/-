<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://code.jquery.com/jquery-3.6.4.min.js"
	integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8="
	crossorigin="anonymous"></script>
<link rel="stylesheet" href="../res/jquery-ui-1.10.3.custom.css"
	type="text/css" />
<link rel="stylesheet" href="../res/widesigncore.css" type="text/css" />
<script src="../res/jquery-ui.js"></script>
<script src="../res/widesign.js"></script>
<link rel="stylesheet" href="/css/ojm/ojmDoVote.css">
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.css">
</head>
<script src="//cdnjs.cloudflare.com/ajax/libs/timepicker/1.3.5/jquery.timepicker.min.js"></script>
<script>
$(document).ready(function(){
    $('.timepicker').timepicker({
    	timeFormat: 'H:mm',
        interval: 60,
        minTime: '00',
        maxTime: '23:59',
        defaultTime: '00',
        startTime: '10:00',
        dynamic: false,
        dropdown: false,
        scrollbar: false
    });
});

$(document).ready(function(){
	$("#menuNumber").change(function(){
		var selectedValue = $(this).val();
		if(selectedValue == 3){
			$(".menu3").show();
			$(".menu4").hide();
			$(".menu4").val('');
			$(".menu5").val('');
		}else if(selectedValue == 4){
			$(".menu3").show();
			$(".menu4").show();
			$(".menu5").hide();
			$(".menu5").val('');
		}else if(selectedValue == 5){
			$(".menu3").show();
			$(".menu4").show();
			$(".menu5").show();
		}else{
			$(".menu3").hide();
			$(".menu4").hide();
			$(".menu5").hide();
			$(".menu3").val('');
			$(".menu4").val('');
			$(".menu5").val('');
		}
	})
})
</script>
<body>
	login.jsp
	<div class="headline">
		<span><b>오</b>늘 <b>점</b>심 <b>뭐</b> 먹지</span>
	</div>

	<table class="wztable_basic03 txt-c" style="width: 700px; margin : 0 auto">
		<tr>
			<td colspan="3">투표 만들기</td>
		</tr>
		<tr>
			<td>투표명</td>
			<td colspan="2"><input type = "text"></td>
		</tr>
		<tr>
			<td>기한</td>
			<td colspan="2"><input type="text" class="timepicker"></td>
		</tr>
		<tr>
			<td>투표 항목 개수</td>
			<td colspan="2"><select name="menuNumber" id="menuNumber">
			<option value="2">2개</option>
			<option value="3">3개</option>
			<option value="4">4개</option>
			<option value="5">5개</option>
			</select></td>
		</tr>
		<tr>
			<td>투표 코멘트</td>
			<td colspan="2"><textarea ></textarea></td>
		</tr>
		<tr>
			<td rowspan="2">메뉴 이미지</td>
			<td rowspan="1"><input type="text"></td>
			<td rowspan="1">메뉴 불러오기</td>
		</tr>
		<tr>
			<td colspan="2" rowspan="1"><input type="text"></td>
		</tr>
		<tr>
			<td rowspan="2">메뉴 이미지</td>
			<td rowspan="1"><input type="text"></td>
			<td rowspan="1">메뉴 불러오기</td>
		</tr>
		<tr>
			<td colspan="2" rowspan="1"><input type="text"></td>
		</tr>
		
		<tr class="menu3" style="display : none">
			<td rowspan="2">메뉴 이미지</td>
			<td rowspan="1"><input class="menu3" type="text"></td>
			<td rowspan="1">메뉴 불러오기</td>
		</tr>
		<tr class="menu3" style="display : none">
			<td colspan="2" rowspan="1"><input class="menu3" type="text"></td>
		</tr>
		
		<tr class="menu4" style="display : none">
			<td rowspan="2">메뉴 이미지</td>
			<td rowspan="1"><input class="menu4" type="text"></td>
			<td rowspan="1" >메뉴 불러오기</td>
		</tr>
		<tr class="menu4" style="display : none">
			<td colspan="2" rowspan="1"><input class="menu4" type="text"></td>
		</tr>
		
		<tr class="menu5" style="display : none">
			<td rowspan="2">메뉴 이미지</td>
			<td rowspan="1"><input class="menu5" type="text"></td>
			<td rowspan="1">메뉴 불러오기</td>
		</tr>
		<tr class="menu5" style="display : none">
			<td colspan="2" rowspan="1"><input class="menu5" type="text"></td>
		</tr>
		

	</table>


</body>
</html>