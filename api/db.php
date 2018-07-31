<?php
include_once("DbUtils.class.php");


// echo "hello";exit();
$page = isset($_GET['page']) ? $_GET['page'] : 1;
$data[':num'] = isset($_GET['num']) ? $_GET['num'] : 10;

$data[':count'] = ($page-1) * $data[':num']; 

$sql = "SELECT * FROM student LIMIT  :count,:num ";

$db = DbUtils::getDB();
$out = $db->gets($sql,$data);

var_dump($out);


?>
