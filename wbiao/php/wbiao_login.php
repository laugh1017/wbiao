<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header('Access-Control-Allow-Headers:x-requested-with,content-type');
// 连接 wb_tables 表
$phone=$_GET["phone"];
$pass=$_GET["password"];
// echo $phone;
// echo "<br/>";
// echo $pass;
if($phone==""||$pass==""){
    header("content-type:text/html;charset=utf-8");
    header('location:../wbiao_login.html');
}
$connect=new mysqli("localhost","root","123456","wbiao");
 
$select="select * from wbiao_user where phone={$phone};";
$txt=$connect->query($select);
$user=array();
while($arr=$txt->fetch_assoc()){
    $user=$arr;
    
}
if($pass==$user["password"]){
    echo "<br/>";
    echo "登陆成功";
    
    header("content-type:text/html;charset=utf-8");
    // 跳转页面 
    header('location:../wbiao_login.html');
    echo json_encode($user);
}
echo "密码错误请重新输入";
// echo json_encode($user);
?>