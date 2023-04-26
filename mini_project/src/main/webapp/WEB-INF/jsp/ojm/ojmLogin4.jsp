<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>
<link rel="stylesheet" href="../res/jquery-ui-1.10.3.custom.css" type="text/css" />
<link rel="stylesheet" href="../res/widesigncore.css" type="text/css" />
<script src="../res/jquery-ui.js"></script>
<script src="../res/widesign.js"></script>
<link rel="stylesheet" href="/css/ojm/ojmLogin.css">
</head>
<body>
login.jsp
<div class="headline">
	<span><b>오</b>늘 <b>점</b>심 <b>뭐</b> 먹지</span>
</div>

<div class="wrapbox bg-yellow">

<table class="loginform">
	<tr>
		<td>
			<form action="/ojmLoginAction.do">
			<input type="text" name="id" placeholder="아이디를 입력해주세요"/>
		</td>
	</tr>
	<tr>
		<td>
			<input type="password" name="pw" placeholder="비밀번호를 입력해주세요"/>
		</td>
	</tr>
	<tr>
		<td>
			<input class="btn-save wzbtn txt-c loginbtn" type="submit" value="로그인"/>
			</form>
		</td>
	</tr>

</table>
</div>


</body>
</html>