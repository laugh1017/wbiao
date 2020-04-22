<?php 
    $content=new mysqli('localhost','root','root','brands');
    // if($connect->connect_error){
    //     die("连接失败:".$connect->connect_error);
    // }
    // echo"连接成功";
    $select="select * from shop";
    $res=$content->query($select);
    while($message=$res->fetch_assoc()){
        $messages[]=$message;
    }
    echo json_encode($messages);
?>