$(document).ready(function(){
     //camera 
    $('#camera_wrap').camera({
        height: '30%',
        width: '100%',
        playPause: false,
        pagination: true,
        thumbnails:false
    });

    $('#camera_wrap').css({"marginBottom":"5px"})
    $('#camera_wrap').css({"marginTop":"5px"})

	//往上按鈕
	$("#up").fadeOut(0);
    $(window).scroll(function(){
        if($(window).scrollTop() >= $(".time").height()){
            $("#up").fadeIn(1000);
        }else{
            $("#up").fadeOut(400);
        }
    })

    $("#up").click(function(){
        $("html,body").animate({"scrollTop":"0"})
        
    })


    //查詢按鈕
    $("#step1").prop("checked",true);
    $("#selectbtn1").click(function() {
        $("#step2").prop("checked",true);
        $("#step1").removeAttr('checked'); 
    });


     $("#selectbtn3").click(function() {
        $("#step1").prop("checked",true);
        $("#step2").removeAttr('checked'); ;  
    });

    $("#selectbtn2").click(function() {
        $("#step3").prop("checked",true);
        $("#step2").removeAttr('checked'); ; 
    });

     $("#selectbtn5").click(function() {
        $("#step2").prop("checked",true);
        $("#step3").removeAttr('checked'); ; 
    });

     $("#selectbtn4").click(function() {
        $("#step4").prop("checked",true);
        $("#step3").removeAttr('checked'); ; 
    });


    //station-train
    $(".trainName").each(function(){
        if($(this).text() == "自強"){
            $(this).css({"color":"#DB2828"})
        }
        else if($(this).text() == "莒光"){
            $(this).css({"color":"#F2711C"})
        }
        else if($(this).text() == "太魯閣"){
            $(this).css({"color":"#2185D0"})
        }
        else if($(this).text() == "普悠瑪"){
            $(this).css({"color":"#E039A3"})
        }
        else{
            $(this).css({"color":"black"})
        }
    });
    
    $(".alongType").each(function(){
        if($(this).text() == "山線"){
            $(this).addClass("mountain")
        }
        else if($(this).text() == "海線"){
            $(this).addClass("sea")
        }
        else{
            $(this).css({"color":"transparent"})
        }
    });


});