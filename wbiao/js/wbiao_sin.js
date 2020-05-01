var patt1 = /^[0-9]{11}$/;
var patt2 = /^[0-9a-zA-Z]{6,20}$/;
var npm1=false;
var npm2=false;
var npm3=false;
var npm4=false;
var npm5=false;
$("#phone").blur(function(){
    if( $("#phone").val()==""){
        $("#error1").html("请输入您的手机号");
        $("#error1").css('color','red');
        $("#error1").css("display","block")
        npm1=false;
    }else if(!(patt1.test($("#phone").val()))){
        $("#error1").html("请输入正确的手机号");
        $("#error1").css('color','red');
        $("#error1").css("display","block")
        npm1=false;
    }else{
        $("#error1").css("display","none")
        npm1=true
        check()
    }
})
$("#num").blur(function(){
    if( $("#num").val()==""){
        $("#error2").html("请输入验证码")
        $("#error2").css('color','red');
        $("#error2").css("display","block")
        npm2=false;
    }else{
        $("#error2").css("display","none")
        npm2=true
        check()
    }
})
$("#num1").blur(function(){
    if( $("#num1").val()==""){
        $("#error5").html("请输入短信验证码")
        $("#error5").css('color','red');
        $("#error5").css("display","block")
        npm3=false;
    }else{
        $("#error5").css("display","none")
        npm3=true
        check()
    }
})

$("#password").blur(function(){
    if( $("#password").val()==""){
        $("#error3").html("请输入6-20位的密码")
        $("#error3").css('color','red');
        $("#error3").css("display","block")
        npm4=false;
    }else if(!(patt2.test($("#password").val()))){
        $("#error3").html("请输入最少6位的密码");
        $("#error3").css('color','red');
        $("#error3").css("display","block")
        npm4=false;
    }else{
        $("#error3").css("display","none")
        npm4=true
        check()
    }
})

$('#password1').on('blur',function(){
    if( $("#password1").val()==""){
        $("#error4").html("请输入再次输入密码")
        $("#error4").css('color','red');
        $("#error4").css("display","block")
        npm5=false;
    }else if($('#password1')[0].value!=$('#password')[0].value){
        $("#error4").html("请输入与上面相同的密码");
        $("#error4").css('color','red');
        $("#error4").css("display","block")
        npm5=false;
    }else{
        $("#error4").css("display","none")
        npm5=true
        check()
    }
})

function check(){
   if(npm1&&npm2&&npm3&&npm4&&npm5){
    $("#sin").removeAttr("disabled")
    $("#sin").css('background-color', '#b32424');
   }else{
       $("#sin").attr("disabled","disabled");
       $("#sin").css('background-color', '#bababa');
   }
   
}
check()

