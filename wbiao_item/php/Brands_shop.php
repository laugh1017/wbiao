<?php 
    $id=$_GET['id'];
    $content=new mysqli('localhost','root','root','brands');
    // if($connect->connect_error){
    //     die("连接失败:".$connect->connect_error);
    // }
    // echo"连接成功";
    $select="select * from shop where id={$id}";
    $res=$content->query($select);
    while($minute=$res->fetch_assoc()){
        $minutes=$minute;
    }
    echo json_encode($minutes);
?>