$(document).ready(function(){
     //camera 
    $('#camera_wrap').camera({
        height: '30%',
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

    //index animal
    $("#timetable").animate({top:"0"},1300)
    if($('#timetable').attr('id') == "timetable"){
        $(window).scroll(function() {
             if($(window).scrollTop() >= $("#timetable").offset().top){
                $("#news").animate({"opacity":"1"},1000)
                $("#news .center").animate({"left":"0"},1000)
                $("#news .content").animate({"opacity":"1"},2000)
             } 
        })
    }

   //stationList
   $("#stationList input").animate({top:"0"},1000)
   $("#stationList .rwd-table").animate({top:"0"},1500)
   //serch-2
   $("#search-2 .rwd-table").animate({top:"0"},800)
   //refund-1
   $("#refund-1").animate({"opacity":"1"},2000)
   //moreNews
   $("#morenews").animate({"opacity":"1"},1000)
   $("#morenews .center").animate({"left":"0"},1000)
   //innerNews
   $("#innernews").animate({"opacity":"1"},1000)










});