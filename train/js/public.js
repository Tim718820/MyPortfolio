$(document).ready(function(){

//模擬資料進入頁面+特效
	var timer1 = [];
	var timer2 = [];
	var timer3 = [];
	var timer4 = [];
	var timer5 = [];
	var timer6 = [];
	var timer7 = [];
	var timer8 = [];
	var timer9 = [];
	var timer10 = [];
	
	function time(row){
		var a = 0;
		this.interval = function(){
			setInterval(function(){
				var imgCount = Math.floor((Math.random()*10)/ 2);
				var img = "image/trains/train0" + imgCount + ".PNG";
				var trainname; 
				switch(imgCount){
					case 0:
						trainname = "普悠瑪號";
						break;
					case 1:
						trainname = "太魯閣號";
						break;
					case 2:
						trainname = "自強號";
						break;
					case 3:
						trainname = "莒光號";
						break;
					case 4:
						trainname = "區間車";
						break;
					default:
						trainname = "";	
				}
				var trip = Math.floor(Math.random()*500 + 100);
				var placeCount = Math.floor(Math.random()*10);
				var place;
				switch(placeCount){
					case 0:
						place = "台北";
						break;
					case 1:
						place = "桃園";
						break;
					case 2:
						place = "新竹";
						break;
					case 3:
						place = "苗栗";
						break;
					case 4:
						place = "台中";
						break;
					case 5:
						place = "彰化";
						break;
					case 6:
						place = "雲林";
						break;
					case 7:
						place = "嘉義";
						break;
					case 8:
						place = "台南";
						break;
					case 9:
						place = "高雄";
						break;
					default:
						place = "";	
				}
				var stateCount = Math.floor((Math.random()*10)/ 2);
				var state;
				switch(imgCount){
					case 0:
						state = "準時";
						break;
					case 1:
						state = "晚"+ stateCount +"分";
						break;
					case 2:
						state = "晚"+ stateCount +"分";
						break;
					case 3:
						state = "晚"+ stateCount +"分";
						break;
					case 4:
						state = "晚"+ stateCount +"分";
						break;
					default:
						state = "";	
				}
				var date = new Date();
				var seconds = date.getSeconds();
				var minutes = date.getMinutes();

				

					if(a == 1){
						$(".box"+row+" span").addClass("animation");
						$(".box"+row+" img").addClass("animation");
					}
					
					else if(a == 2){
						$(".box"+row+" span").removeClass("animation");
						$(".box"+row+" img").removeClass("animation");
						if(row % 5 == 0){
							$(".box"+row+" img").attr("src",img);
							$(".box"+row+" .trainname").text(trainname);
						}
						else if((row % 5) - 1 == 0){
							$(".box"+row+" .trip").text(trip);
						}
						else if((row % 5) - 2 == 0){
							$(".box"+row+" .arrivetime").text((seconds+10)+""+minutes);
						}
						else if((row % 5) - 3 == 0){
							$(".box"+row+" .place").text(place);
						}
						else if((row % 5) - 4 == 0){
							$(".box"+row+" .state").text(state);
						}
						
					}
					if(a==10){
						a=0;
					}
					a++;
					},800);
			}
			
	}
		
	//left
	for(var i=0; i<5; i++){
		timer1.push(new time(i));
		setTimeout(timer1[i].interval,i * 100);
	}
	setTimeout(function() {
		for(var i=0; i<5; i++){
			timer2.push(new time(i+10));
			setTimeout(timer2[i].interval,i * 100);
		}
	}, 3000);
	setTimeout(function() {
		for(var i=0; i<5; i++){
			timer3.push(new time(i+20));
			setTimeout(timer3[i].interval,i * 100);
		}
	}, 6000);
	setTimeout(function() {
		for(var i=0; i<5; i++){
			timer4.push(new time(i+5));
			setTimeout(timer4[i].interval,i * 100);
		}
	}, 9000);
	setTimeout(function() {
		for(var i=0; i<5; i++){
			timer5.push(new time(i+15));
			setTimeout(timer5[i].interval,i * 100);
		}
	}, 12000);
	
	//right
	for(var i=0; i<5; i++){
		timer6.push(new time(i+35));
		setTimeout(timer6[i].interval,i * 100);
	}
	setTimeout(function() {
		for(var i=0; i<5; i++){
			timer7.push(new time(i+45));
			setTimeout(timer7[i].interval,i * 100);
		}
	}, 3000);
	setTimeout(function() {
		for(var i=0; i<5; i++){
			timer8.push(new time(i+25));
			setTimeout(timer8[i].interval,i * 100);
		}
	}, 6000);
	setTimeout(function() {
		for(var i=0; i<5; i++){
			timer9.push(new time(i+40));
			setTimeout(timer9[i].interval,i * 100);
		}
	}, 9000);
	setTimeout(function() {
		for(var i=0; i<5; i++){
			timer10.push(new time(i+30));
			setTimeout(timer10[i].interval,i * 100);
		}
	}, 12000);

		


		

	

});