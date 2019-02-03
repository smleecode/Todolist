<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ page session="false"%>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">

<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
	integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
	crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.3.1.min.js"
	integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
	crossorigin="anonymous"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
	integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut"
	crossorigin="anonymous"></script>
<script
	src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
	integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
	crossorigin="anonymous"></script>
<link rel="stylesheet"
	href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
	integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
	crossorigin="anonymous">

<!-- Favicon -->
<link rel="icon" 
	href="${pageContext.request.contextPath}/resources/img/favicon.ico">

<!-- User Style -->
<link rel="stylesheet"
	href="${pageContext.request.contextPath}/resources/css/index.css">

<title>ToDoList</title>
<style>
.footer {
	width: 100%;
	height: 60px; /* Set the fixed height of the footer here */
	line-height: 60px; /* Vertically center the text there */
	background-color: #e9ecef;
	margin-top: 32px;
}
</style>
</head>
<body>

	<div class="jumbotron jumbotron-fluid">
		<div class="container">
			<h1>To do list webapp</h1>
			<p>My Web Proejct - Simple task management tool</p>
		</div>
	</div>
	<div class="container">
		<div class="alert alert-success alert-dismissible fade show">
			<button type="button" class="close" data-dismiss="alert">&times;</button>
			<strong>기억하기!</strong> 해야할 일이 있으면 우선 다 등록하기
		</div>
		<div class="alert alert-warning alert-dismissible fade show">
			<button type="button" class="close" data-dismiss="alert">&times;</button>
			<strong>습관화하기!</strong> 등록하는 내용은 최대한 구체적으로 적기
		</div>
		<div class="alert alert-danger alert-dismissible fade show">
			<button type="button" class="close" data-dismiss="alert">&times;</button>
			<strong>꼭 지키기!</strong> 만약 리스트에 있는 일중 끝난 일이 있다면 리스트에서 삭제해주기
		</div>
		<div class="form-group">
			<textarea style="resize: none;" class="form-control" rows="5"
				id="task-content"></textarea>
			<button type="button" id="task-insert" class="btn btn-primary mt-2">등록</button>
		</div>
	</div>

	<div class="container">
		<h2>To do list</h2>
		<div class="list-group" id="listGroup">
		</div>
	</div>
	<footer class="footer">
		<div class="container">
			<span class="text-muted">LSM All copyright reserved</span>
		</div>
	</footer>

	<!-- User Script -->
	<script src="${pageContext.request.contextPath}/resources/js/index.js"></script>
</body>
</html>
