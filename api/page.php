<?php

include_once("DbUtils.class.php");

$data = array();

$page = isset($_GET['page']) ? $_GET['page'] : 1;
$data[':num'] = isset($_GET['num']) ? $_GET['num'] : 10;

$data[':count'] = ($page-1)*$data[':num']; 

$sql = "SELECT * FROM student LIMIT  $data[':count'],$data[':num'] ";

if (isset($_GET['sort'])){
	$data[':sort'] = $_GET['sort'];
	$data[':dir'] = $_GET['dir'];
	$sql .= "  order by $data[':sort']  $data[':dir']  ";
}

$db = DbUtils::getDB();
$outs = $db->get($sql);

echo json_encode($outs);
?>