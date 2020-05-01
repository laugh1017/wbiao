<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header('Access-Control-Allow-Headers:x-requested-with,content-type');
// 连接 wb_tables 表
    $num=$_GET["paeger"];
    $num1=$num*20;
    $connect=new mysqli("localhost","root","123456","wbiao");
    
    if($connect->connect_error){
        echo "连接失败";
    };
    $select="select * from wb_tables limit $num1,20";
    $txt=$connect->query($select);
    $user=array();
    while($arr=$txt->fetch_assoc()){
        $user[]=$arr;
    }
    echo json_encode($user);
?>