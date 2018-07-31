<?php

include_once("DbUtils.class.php");

$data = array();

$page = isset($_GET['page']) ? $_GET['page'] : 1;
$data[':num'] = isset($_GET['num']) ? $_GET['num'] : 10;

$data[':count'] = ($page-1)*$data[':num']; 

$sql = "SELECT * FROM student LIMIT  :count,:num ";

if (isset($_GET['sort'])){
	$data[':sort'] = $_GET['sort'];
	$sql .= "  order by :sort "
}

$db = DbUtils::getDB();
$outs = $db->gets($sql);

echo json_encode($outs);
?>