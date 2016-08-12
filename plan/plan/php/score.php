<?php 
	$score = $_GET['score'];
	$openid = $_GET['openid'];
	$conn = mysqli_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS,SAE_MYSQL_DB);
	$conn->query('set names utf8');

	$sql = "SELECT scole FROM plane WHERE openid='{$openid}'";
	$result = $conn->query($sql);
	$arr = $result->fetch_array();
	if ($score>$arr['scole']) {
		$sql = "UPDATE plane SET scole='{$score}' WHERE openid='{$openid}'";
		$conn->query($sql);
	}


	$sql = "SELECT * FROM plane ORDER BY scole DESC ";
	$result = $conn->query($sql);
	$arr2 = array();
	while ($arr = $result->fetch_assoc()) {
		$arr2[] = $arr;
	}
	$str = json_encode($arr2);

	if (mysqli_affected_rows($conn)>0) {
		echo $str;
	}
 ?>