<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header('Access-Control-Allow-Headers:x-requested-with,content-type');
    $id=$_GET['id'];
    $num=$_GET['num'];
    $content=new mysqli('localhost','root','123456','wbiao');
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
    $a=array("num1","num2","num3","num4","num5","num6","num7","num8");
    if($num!=0){
        $sel="update shop set {$a[$num-1]}=$num where id={$id}";
        $content->query($sel);
    }
   
    
?>