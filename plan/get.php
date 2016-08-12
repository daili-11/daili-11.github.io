<?php 
	$code = $_GET["code"];
	$appid = 'wxb6cf251d37626105';
	$appsecret = '050fbca3c90728e206b6ae6261aff32b';

	$url = 'https://api.weixin.qq.com/sns/oauth2/access_token?appid='.$appid.'&secret='.$appsecret.'&code='.$code.'&grant_type=authorization_code';

	$str = httpGet($url);
	$obj = json_decode($str);

	$url = 'https://api.weixin.qq.com/sns/userinfo?access_token='.$obj->access_token.'&openid='.$obj->openid.'&lang=zh_CN';

	$str = httpGet($url);
	$obj = json_decode($str);
	// echo $obj->nickname;
	$openid = $obj->openid;
	$nickname = $obj->nickname;
	$headimgurl = $obj->headimgurl;

	$conn = mysqli_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS,SAE_MYSQL_DB);
	$conn->query('set names utf8');

	$sql = "SELECT openid FROM plane WHERE openid='{$openid}'";
	$result = $conn->query($sql);
	if ($result->num_rows>0) {
		echo "<script language='javascript' type='text/javascript'>window.location.href='plan/index.php?openid=".$openid."'</script>";
	}else{
		$sql = "INSERT INTO plane (nickname,headimgurl,openid,scole) VALUES ('{$nickname}','{$headimgurl}','{$openid}',0)";
		$conn->query($sql);
		if (mysqli_affected_rows($conn)>0) {
			echo "<script language='javascript' type='text/javascript'>window.location.href='plan/index.php?openid=".$openid."'</script>";
		}else{
			echo "出错!";
		}
	}




function httpGet($url) {
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_TIMEOUT, 500);
    // 为保证第三方服务器与微信服务器之间数据传输的安全性，所有微信接口采用https方式调用，必须使用下面2行代码打开ssl安全校验。
    // 如果在部署过程中代码在此处验证失败，请到 http://curl.haxx.se/ca/cacert.pem 下载新的证书判别文件。
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, true);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, true);
    curl_setopt($curl, CURLOPT_URL, $url);

    $res = curl_exec($curl);
    curl_close($curl);

    return $res;
  }







	// https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx3ccefa9090f7d872&redirect_uri=http://lanouh5c2.applinzi.com/get.php&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect
?>
