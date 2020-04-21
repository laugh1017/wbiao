<?php
// 连接 wb_tables 表
    $connect=new mysqli("localhost","root","123456","wbiao");

    if($connect->connect_error){
        echo "连接失败";
    };
    $select="select * from wb_tables ";
    $txt=$connect->query($select);
    $user=array();
    while($arr=$txt->fetch_assoc()){
        $user[]=$arr;
    }
    echo json_encode($user);
?>