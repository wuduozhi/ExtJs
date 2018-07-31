<?php
include_once("DbUtils.class.php");


// echo "hello";exit();
$page = isset($_GET['page']) ? $_GET['page'] : 1;
$data[':num'] = isset($_GET['num']) ? $_GET['num'] : 10;

$data[':count'] = ($page-1) * $data[':num']; 

$sql = "SELECT * FROM student LIMIT  0,15 ";

$data[':count'] = ($page-1)*$data[':num']; 

//$sql = "SELECT * FROM student LIMIT  $data[':count'],$data[':num'] ";

$db = DbUtils::getDB();
$out = $db->get($sql);

// var_dump($out);
$res['totalProperty'] = count($out);
$res['root'] = $out;
echo json_encode($res);

?>
