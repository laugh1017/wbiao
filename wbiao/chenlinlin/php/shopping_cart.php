<?php 
header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
    header('Access-Control-Allow-Headers:x-requested-with,content-type');
    $content=new mysqli('localhost','root','123456','wbiao');
    // if($connect->connect_error){
    //     die("连接失败:".$connect->connect_error);
    // }
    // echo"连接成功";
   
    for($i=1;$i<28;$i++){
        $select="select num1,num2,num3,num4,num5,num6,num7,num8 from shop where id={$i}";
        $res=$content->query($select);
        while($num=$res->fetch_assoc()){
            $nums[]=$num;
        }
    }
    

    $a=array("1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27");
    for($j=0;$j<count($nums);$j++) {
        $z=1;
        foreach($nums[$j] as $y) {
            if($y!=null){
                    $sel="select title,shop_goods_list_img{$z},shop_goods_list_text{$z}, shop_goods_list_totalprice{$z} from shop where id={$a[$j]}";
                    $ress=$content->query($sel);
                    while($num1=$ress->fetch_assoc()){
                        $nums1[]=$num1;
                    }
            }
            $z++;
           
        }
        
    }
    echo json_encode($nums1);
   
?>