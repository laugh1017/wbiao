$(".on").click(function () {
    $(".post").eq(0).css("display", "block")
    $(".on").eq(0).css("color", "red")
    $(".con_box1").eq(0).css("display", "none")
    $(".scan").eq(0).css("color", "grey")
})
$(".scan").click(function () {
    $(".post").eq(0).css("display", "none")
    $(".on").eq(0).css("color", "grey")
    $(".con_box1").eq(0).css("display", "block")
    $(".scan").eq(0).css("color", "red")
})

$('.phone_dynamic').click(function () {
    $('.phone_dynamic').eq(0).css("display", "none")
    $(".content_box").eq(0).css("display", "none")
    $(".content_box").eq(1).css("display", "block")
    $('.phone_dynamic1').eq(0).css("display", "block")
})
$('.phone_dynamic1').click(function () {
    $('.phone_dynamic1').eq(0).css("display","none")
    $('.phone_dynamic').eq(0).css("display", "block")
    $(".content_box").eq(0).css("display", "block")
    $(".content_box").eq(1).css("display", "none")
})



