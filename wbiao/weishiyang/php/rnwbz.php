<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header('Access-Control-Allow-Headers:x-requested-with,content-type');
    $num=$_GET["num"];
    $servername="localhost";
    $name="root";
    $password="123456";
    $mysql="wbiao"

    $connect=new mysqli($servername,$name,$password,$mysql);

    if($connect->connect_error){
        die("连接失败:".$connect->connect_error);
    }
    // echo "连接成功";
    $select="select * from rnwbz;";
    $txt=$connect->query($select);
    while($data=$txt->fetch_assoc()){
        $detail[]=$data;
    }
    echo json_encode($detail);
?>