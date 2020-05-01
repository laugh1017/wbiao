

<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header('Access-Control-Allow-Headers:x-requested-with,content-type');
    $id=$_GET['id'];
    $content=new mysqli('localhost','root','123456','wbiao');
    // if($connect->connect_error){
    //     die("连接失败:".$connect->connect_error);
    // }
    // echo"连接成功";
    $select="select * from commodity where id={$id}";
    $res=$content->query($select);
    while($data=$res->fetch_assoc()){
        $datas=$data;
    }
    echo json_encode($datas);
?>