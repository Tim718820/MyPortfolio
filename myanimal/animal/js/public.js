
$(function () {
	//banner動畫
	$('#banner').css ({
	    height: $(window).height ()
	}).find("> div").imgLiquid();
	
	var $count = 1;
	$('#banner_count').text ("0"+$("#banner > div").length);
	$('#banner_now').text("0"+$count);

	$("#banner_next").click(function(){
		var $tmp = $("#banner > div").first().clone(true);
		$("#banner").append($tmp);
		$("#banner > div").first().remove();
		$count++;
		if($count > 5){
			$count = 1;
		}
		$('#banner_now').text("0"+$count);

	});

	setInterval(function(){
		$("#banner_next").click();
	},5000)

	$("#banner_prev").click(function(){
		var $tmp = $("#banner > div").last().clone(true);
		$("#banner").prepend($tmp);
		$("#banner > div").last().remove();
		$count--;
		if($count < 1){
			$count = 5;
		}
		$('#banner_now').text("0"+$count);
	});


	//sidebar
	$open = 1;
	$("#toggle-menu").click(function() {
		if($open == 1){
			$(".primary-nav").animate({width:"280px"});
			$(".primary-nav").css({"padding-top":"80px"});
			$(".primary-nav a").css({"display":"block"});
			$(".contact span").css({"display":"block"});
			$open--;
		}else{
			$(".primary-nav").animate({width:"0px"});
			$(".primary-nav").css({"padding-top":"0px"});
			$(".primary-nav a").css({"display":"none"});
			$(".contact span").css({"display":"none"});
			$open++;
		}
	});


	//fix navbar
	$(window).scroll(function(){
		if($(window).width() >= 1200){
	        if($(window).scrollTop() >= $("#banner").height()){
	            $(".menu").css({"position":"fixed"})
	            $(".content").css({"margin-left":"280px"})
	        }else{
	        	 $(".menu").css({"position":"relative"})
	        	 $(".content").css({"margin-left":"0px"})
	        }
    	}
    	
    })
	


	// page5 move container
	$(".circle1").click(function() {
		$("#containers1").css({"left":"0%"})
		$("#containers2").css({"left":"100%"})
		$("#containers3").css({"left":"200%"})
		$(".circle1").css({"background-color":"green"})
		$(".circle2").css({"background-color":"#CCCCCC"})
		$(".circle3").css({"background-color":"#CCCCCC"})
	});
	$(".circle2").click(function() {
		$("#containers1").css({"left":"-100%"})
		$("#containers2").css({"left":"0%"})
		$("#containers3").css({"left":"100%"})
		$(".circle2").css({"background-color":"green"})
		$(".circle1").css({"background-color":"#CCCCCC"})
		$(".circle3").css({"background-color":"#CCCCCC"})
	});
	$(".circle3").click(function() {
		$("#containers1").css({"left":"-200%"})
		$("#containers2").css({"left":"-100%"})
		$("#containers3").css({"left":"0%"})
		$(".circle3").css({"background-color":"green"})
		$(".circle2").css({"background-color":"#CCCCCC"})
		$(".circle1").css({"background-color":"#CCCCCC"})
	});


	//a href animate
	$("[href='#banner']").click(function() {
		$("html,body").animate({
			scrollTop:$("#banner").offset().top
		},"slow")
	});
	$("[href='#page1']").click(function() {
		$("html,body").animate({
			scrollTop:$("#page1").offset().top
		},"slow")
	});
	$("[href='#page2']").click(function() {
		$("html,body").animate({
			scrollTop:$("#page2").offset().top
		},"slow")
	});
	$("[href='#page3']").click(function() {
		$("html,body").animate({
			scrollTop:$("#page3").offset().top
		},"slow")
	});
	$("[href='#page4']").click(function() {
		$("html,body").animate({
			scrollTop:$("#page4").offset().top
		},"slow")
	});
	$("[href='#page5']").click(function() {
		$("html,body").animate({
			scrollTop:$("#page5").offset().top
		},"slow")
	});
	$("[href='#page6']").click(function() {
		$("html,body").animate({
			scrollTop:$("#page6").offset().top
		},"slow")
	});
	$("[href='#page7']").click(function() {
		$("html,body").animate({
			scrollTop:$("#page7").offset().top
		},"slow")
	});
	$("[href='#page8']").click(function() {
		$("html,body").animate({
			scrollTop:$("#page8").offset().top
		},"slow")
	});

});