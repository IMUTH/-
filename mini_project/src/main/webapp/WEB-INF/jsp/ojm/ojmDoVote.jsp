<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> 
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
</head>
<body>
	<header>
		 <div class="wztab bg-blue">
                  <ul class="wztab-list">
                      <button type="button" class="wzbtn-table btn-basic wzbtnTab-toggle"></button>
                          <li class="wztab-item"><button class="btn-blue" type="button" onclick="location.href='/ojmMain.do';">홈</button></li>
                          <li class="wztab-item"><button class="btn-blue" type="button" onclick="location.href='/ojmLastVote.do';">지난투표</button></li>
                          <li class="wztab-item"><button class="btn-blue" type="button" onclick="location.href='/ojmMakeVote.do';">투표만들기</button></li>
                          <li class="wztab-item"><button class="btn-blue" type="button" onclick="location.href='/ojmLogout.do';">로그아웃</button></li>
                  </ul>
            </div>
	</header>
	<div class="headline">
		<span><b>오</b>늘 <b>점</b>심 <b>뭐</b> 먹지</span>
	</div>

	<table class="wztable_basic03 txt-c" style="width: 500px">
		<tr>
			<td colspan="3">${DoVoteVO.vote_nm }</td>
		</tr>
		<tr>
			<td>${DoVoteVO.user_id }</td>
			<td>${DoVoteVO.end_date }</td>
			<td>남은시간</td>
		</tr>
		<tr>
			<td colspan="3">${DoVoteVO.vote_cm }</td>
		</tr>
		
		<c:forEach items="${VoteMenu }" var="list" varStatus="c" >
		<tr>
			<td rowspan="2">${list.menu_img }</td>
			<td>${list.menu_nm }</td>
			<td>투표하기버튼</td>
		</tr>
		<tr>
			<td colspan="2">${list.menu_cm }</td>
		</tr>
		</c:forEach>

	</table>


</body>
</html>