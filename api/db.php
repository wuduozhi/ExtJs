
<?php
$dbhost = 'localhost:3306';  // mysql服务器主机地址
$dbuser = 'root';            // mysql用户名
$dbpass = '123456';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass);
if(! $conn )
{
    die('连接失败: ' . mysqli_error($conn));
}
echo '连接成功<br />';
mysqli_select_db( $conn, 'student' );
// $retval = mysqli_query( $conn, $sql );
// if(! $retval )
// {
//     die('数据表创建失败: ' . mysqli_error($conn));
// }
echo "数据表创建成功\n";
mysqli_close($conn);
?>
