<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page session="false"%>
<html>
<head>
<title>Search</title>
</head>
<body>

	<P>The time on the server is ${serverTime}.</p>

	<form action="user" method="post">
		<p> Search:  : <input type="text" name="id"><br>
		
		
		 <input
			type="submit" value="add">
	</form>
</body>
</html>