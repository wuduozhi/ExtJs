<?php

class DbUtils{
	protected static $user = 'root';
	protected static $passwd  = 'root';
	protected static $host = 'localhost';
	protected static $charset = 'utf8';
	protected static $dbName = 'student';
	protected static $dsn="mysql:host=localhost;dbname=student";
	protected static $conn;


	//保存例实例在此属性中
	private static $_instance;

	//构造函数声明为private,防止直接创建对象
	private function __construct()
	{
		// echo 'I am Construceted';
	}

	//单例方法
	public static function getDB()
	{
		if(!isset(self::$_instance))
		{
			try{
				self::$conn = new PDO("mysql:host=localhost;dbname=student","root","root"); //初始化一个PDO对
				$c=__CLASS__;
				self::$_instance = new $c;
			}catch (PDOException $e) {
			    die ("Error!: " . $e->getMessage());
			}
		}
		return self::$_instance;
	}

	//阻止用户复制对象实例
	public function __clone()
	{
		trigger_error('Clone is not allow' ,E_USER_ERROR);
	}

	/*
		执行一条sql语句，返回单条结果
	*/

	public function get($sql){
		$sth = $conn->query($sql);
		$out = $sth->fetch(PDO::FETCH_ASSOC);
		return $out;
	}

	/*
		执行一条sql语句，返回多条结果
	*/

	// public function gets($sql){
	// 		$res = oci_parse(self::$conn, $sql);
	// 		oci_execute($res, OCI_DEFAULT) or die("SQL ERROR");
	// 		$outs = array();
	// 		while ($out = oci_fetch_assoc($res)) {
	// 			$outs[] = $out;
	// 		}
	// 		return $outs;
	// }

	public function gets($sql,$array=array()){
			$sth = $conn->prepare($sql);

			
			foreach ($array as $key => $value) {
				$sth->bindParam($key,$array[$key]);
			}
			$sth->execute();
			
			//取结果数据
			$outs = array();
			while ($out = $sth->fetch(PDO::FETCH_ASSOC)) {
				$outs[] = $out;
			}
			return $outs;
	}

	public function __destruct(){
			self::$_instance = null;
	}
}


// try{
// 	$conn = new PDO("mysql:host=localhost;dbname=student","root","root"); //初始化一个PDO对
// }catch (PDOException $e) {
//     die ("Error!: " . $e->getMessage());
// }

// $sql = 'SELECT * FROM student';
// foreach ($conn->query($sql) as $row) {
// 	var_dump($row);
// }

// echo 'hhhh';


$sql = "SELECT * FROM student";
$db = DbUtils::getDB();
$out = $db->gets($sql);

var_dump($out);



?>
