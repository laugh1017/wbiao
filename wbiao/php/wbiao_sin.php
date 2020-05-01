<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header('Access-Control-Allow-Headers:x-requested-with,content-type');
// 连接 wb_tables 表
$name=$_POST["phone"];
$plass=$_POST["password"];
$connect=new mysqli("localhost","root","123456","wbiao");
$select="select * from wbiao_user where phone={$name};";
$txt=$connect->query($select);
$user=array();
while($arr=$txt->fetch_assoc()){
    $user=$arr;
}
// echo json_encode($user);
if($user==[]){
     $insert="insert into wbiao_user (phone,password) values ({$name},{$plass})";
     if ($connect->query($insert) === TRUE) {
          echo "注册成功";
          header("content-type:text/html;charset=utf-8");
          header('location:../wbiao_login.html');
     }else{
          echo "注册失败请重新注册";
     }
}else{
     echo '用户名已存在 请返回重新注册';
}

   
    

 

    ?>