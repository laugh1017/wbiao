<?php
    $id=$_GET["id"];
    $servername="localhost";
    $name="root";
    $password="root";
    $mysql="watch";

    $connect=new mysqli($servername,$name,$password,$mysql);

    if($connect->connect_error){
        die("连接失败:".$connect->connect_error);
    }
    // echo "连接成功";

    $select="select * from message;";
    $txt=$connect->query($select);
    while($data=$txt->fetch_assoc()){
        $detail[]=$data;
    }

    echo json_encode($detail);
?>