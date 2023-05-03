<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
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
<link rel="stylesheet" href="/css/ojm/ojmMain.css">
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

	<table class="wztable">
		<tr>
			<th style="width: 10%">번호</th>
			<th>제목</th>
			<th style="width: 15%">만든이</th>
			<th style="width: 15%">기한</th>
			<th style="width: 10%"></th>
		</tr>
		<c:forEach items="${voteList }" var="list" varStatus="c">
			<tr>
				<td>${c.count }</td>
				<td>${list.vote_nm }</td>
				<td>${list.user_id }</td>
				<td>${list.end_date }</td>
				<td><button onclick="location.href='/ojmLastVote.do?vote_seq=${list.vote_seq}';">결과보기</button></td>
			</tr>
		</c:forEach>
	</table>




</body>
</html>