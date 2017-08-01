//append canvas to #allcanvas div
var can1 = document.createElement("canvas");
var can2 = document.createElement("canvas");
var ctx1 = can1.getContext("2d");
var ctx2 = can2.getContext('2d');
can1.width = 800;
can1.height = 600;
can2.width = 800;
can2.height = 600;
can1.setAttribute("id", "canvas1");
can2.setAttribute("id", "canvas2");
var allcan = document.getElementById("allcanvas");
allcan.appendChild(can1);
allcan.appendChild(can2);
ctx1.textAlign='center';
ctx2.textAlign='center';

var canWidth = can1.width;
var canHeigth = can1.height;

var mouseX;
var mouseY;

var lastTime;
var deltaTime;
//背景區
var bgImg1 = new Image();
var bgImg = new Image();
var war = new Image();
var sp1 = new Image();
var sp2 = new Image();
//主要魚
var MainFish;
var fish = [];
var fishL = [];
//水母區
var Jellyfishs = [];
var Jellyfish = [];
var ji;
//鯊魚區
var Shark = [];
var SharkA = [];
var Sharks =[];
var si;

//泡泡區
var ImgBubble = [];
var Bubbles = [];
var bi;

var dir;
var px;

var JellyCount;
var SharkCount;

var int = 0;

//Timer
var startTimer = 0;
var startCount = 3;
var JTimer = 0;
var JCount = 0;
var STimer = 0;
var MTimer = 0;
var overTimer = 0;
var BTimer = 0;
var ShipTimer = 0;
var ShipCount = 0;

var ImgStart;

var Data;
//錢區
var coin = [];
var money = [];
var diamond = [];
var jewelss = [];
var mi;

var score = 0;

var Sound0;
var Sound1;
var coinSound;
var overSound;
var countSound1;
//var countSound2;



//畫面進入
window.onload = function(){
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameloop();
    int = 0;
    
    
}

//按下按鈕開始遊戲
document.getElementById('start').onclick = function startgame() //開始遊戲
{
    int = 1;
    Data.o = 0;
    JCount = 0;
    JTimer = 0;
    STimer = 0;
    MTimer = 0;
    overTimer = 0;
        
    score = 0;
        
    mouseX = canWidth / 2;
    mouseY = canHeigth / 2;
        
    MainFish.init();
        
    jewelss.splice(0,jewelss.length);
    Sharks.splice(0,Sharks.length);
    Jellyfishs.splice(0,Jellyfishs.length);
        
    document.getElementById("start").style.display = "none";
        
}

//其他初始化
function init() 
{
    
    
    JellyCount = document.getElementById('A').value;
    SharkCount = document.getElementById('B').value;
    
    bgImg1.src = "Image/sea1.jpg";
    bgImg.src = "Image/sea2.jpg";
    war.src = "Image/warning.png";
    sp1.src = "Image/Ship1.png";
    sp2.src = "Image/Ship2.png";
    
    MainFish = new MainFish();
    
    Data = new Data();
    
    Sound0 = new Audio('Audio/sound-0.mp3');
    Sound1 = new Audio('Audio/sound-1.mp3');
    overSound = new Audio('Audio/gameover1.wav');
    countSound1 = new Audio('Audio/count.mp3');
    
    can1.addEventListener("mousemove",onMousemove,false);
    can1.addEventListener("mousemove",onfishMove,false);
    
    for(var x=0; x<3;x++){
        fish[x] = new Image();
        fish[x].src = "Image/fish/fish"+ x +".png";
    }
    for(var x=0; x<3;x++){
        fishL[x] = new Image();
        fishL[x].src = "Image/fish/fishL"+ x +".png";
    }
    for(var y=0; y<3;y++){
        Jellyfish[y] = new Image();
        Jellyfish[y].src = "Image/JellyFish/Jellyfish-"+ y +".png";
    }
    for(var z=0; z<3; z++){
        Shark[z] = new Image();
        Shark[z].src = "Image/Shark/Shark" + z + ".png";
    }
    for(var z=0; z<3; z++){
        SharkA[z] = new Image();
        SharkA[z].src = "Image/Shark/Shark-" + z + ".png";
    }
    ImgStart = new Image();
    ImgStart.src = "Image/Count-3.png";
    for(var i=0; i<16; i++){
        coin[i] = new Image();
        coin[i].src = "Image/coin/coin-" + i + ".png";
    }
    for(var i=0; i<6; i++){
        money[i] = new Image();
        money[i].src = "Image/money/money-" + i + ".png";
    }
    for(var i=0; i<4; i++){
        diamond[i] = new Image();
        diamond[i].src = "Image/diamond/diamond-" + i + ".png";
    }
    for(var b=0; b<17; b++){
        ImgBubble[b] = new Image();
        ImgBubble[b].src = "Image/bubbles/bubble-" + b + ".png";
    }
    
}

//遊戲循環
function gameloop() 
{
    window.requestAnimationFrame(gameloop); //使用requestAnimationFrame重複執行gameloop
    
    ctx1.clearRect(0,0,canWidth,canHeigth);
    ctx2.clearRect(0,0,canWidth,canHeigth);
    
    BTimer += deltaTime;
    if(BTimer > 2000){
        Bubbles.push(new Bubble());
        BTimer %= 2000;
        }
    for(bi=0; bi<Bubbles.length; bi++){ 
            Bubbles[bi].drawBubble();
    }
    
    
    var now = Date.now(); //每次執行的時間多久
    deltaTime = now -lastTime;
    lastTime = now;
    // 開始遊戲畫面
    if(int == 0){
        drawBackground1();
        
        drawShip();
        ShipTimer += deltaTime;
        if(ShipTimer < 3000){
            if(ShipTimer <= 1500){
            ship1Y -= 1;
            ship2Y += 1;
            }
            else if(ShipTimer > 1500 & ShipTimer <=3000){
            ship1Y += 1;
            ship2Y -= 1;
            }
        }ShipTimer %= 3000;
        
        drawstart();
        Sound0.loop = true;
        Sound0.volume = 0.5;
        Sound0.play();
    }
    //開始遊戲第一幕畫面
    if(int == 1){
        
        drawBackground1();
        drawBackground2();
        

        if(backY1 >= -600 & backY2 >= 10){
        backY1 -= 10;
        backY2 -= 10;
        }  
        
        
        Sound0.pause();
        Sound1.currentTime=0;
        overSound.pause();
        overSound.currentTime = 0;
        
        countSound1.play();
        
        drawCount();
    }
    //開始遊戲第二幕畫面
    if(int == 2){
        drawBackground1();
        drawBackground2();
        
        countSound1.pause();
        countSound1.currentTime = 0;
        Sound1.loop = true;
        Sound1.volume = 0.8;
        Sound1.play();
        
        drawscore();
        
        MainFish.drawfish();
        
        MTimer += deltaTime;
        if(MTimer > 2000){
            jewelss.push(new jewels());
            MTimer %= 2000;
        }
        
        for(mi=0; mi<jewelss.length; mi++){
            jewelss[mi].drawJewels();
            Fishandjewels(jewelss[mi]);
        }
        
        JTimer += deltaTime;
        if(JTimer > 500){
            if(JCount != JellyCount){
            JCount = (JCount + 1);
            Jellyfishs.push(new Jellyfish());
            JTimer %= 500;
            }
        }
        
        for(ji=0; ji<Jellyfishs.length; ji++){ 
            Jellyfishs[ji].drawJellyFish();
            FishandJelly(Jellyfishs[ji]);
        }
        
        STimer += deltaTime;
        if(STimer > 5000){
            for(var i=0; i<SharkCount; i++){
            Sharks.push(new Shark());
            }
            STimer %= 5000;
        }
        
        for(si=0; si<Sharks.length; si++){
            Sharks[si].drawShark();
            Sharks[si].warning();
            FishandShark(Sharks[si]);
        }
    }
    //結束遊戲畫面
    if(int == 3){
        drawBackground1();
        drawBackground2();
        Sound1.pause();
        
        MainFish.drawfish();
        
        for(mi=0; mi<jewelss.length; mi++){
            jewelss[mi].drawJewels();
        }
        
        for(ji=0; ji<Jellyfishs.length; ji++){ 
            Jellyfishs[ji].drawJellyFish();
            FishandJelly(Jellyfishs[ji]);
        }
        
        for(var si=0; si<Sharks.length; si++){
            Sharks[si].drawShark();
            }
        
        overTimer += deltaTime;
        if(overTimer < 3500){
            overSound.loop = false;
            overSound.volume = 0.5;
            overSound.play();
        }
        if(backY1 <= -10 & backY2 <= 600){
            backY1 += 10;
            backY2 += 10;
        }  
        
        drawShip();
        ShipTimer += deltaTime;
        if(ShipTimer < 3000){
            if(ShipTimer <= 1500){
            ship1Y -= 1;
            ship2Y += 1;
            }
            else if(ShipTimer > 1500 & ShipTimer <=3000){
            ship1Y += 1;
            ship2Y -= 1;
            }
        }ShipTimer %= 3000;
        
        document.getElementById("start").style.display = "block";    
        Data.draw();
    }
   
}
//開始標題
function drawstart(){
    ctx1.save();
    ctx1.fillStyle = "rgba(255, 255, 255, 1.000)";
    ctx1.shadowBlur = 10;
	ctx1.shadowColor = "white";
    ctx1.font = "90px Verdana";
    ctx1.fillText('Greedy Fish', canWidth / 2 , canHeigth / 2 );
    ctx1.restore();
    ctx1.save();
}

//背景
var backY1 = 0;
var backY2 = 600;
function drawBackground1(){
    ctx2.drawImage(bgImg1,0,backY1,canWidth,canHeigth);
}
function drawBackground2(){
    ctx2.drawImage(bgImg,0,backY2,canWidth,canHeigth);
}
//開始遊戲第一幕倒數
function drawCount(){
    startTimer += deltaTime;
        if(startTimer > 1000){
        startCount = (startCount - 1);
        startTimer %= 1000;
        }
        if(startCount > 0){
        ctx2.save();
        ctx2.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx2.shadowBlur = 15;
		ctx2.shadowColor = "white";
        ctx2.font = "70px Verdana";
        ctx2.fillText(startCount, canWidth / 2, canHeigth / 2 + 25);
        ctx2.restore();
        }
        if(startCount == 0){
        ctx2.drawImage(ImgStart, canWidth / 2 - 130, canHeigth /2 - 65, 256, 128);
        }
        if(startCount < 0){
            int = 2;
            startCount = 3;
        }
}

//泡泡
var Bubble = function()
{
    this.Timer = 0;
    this.Count = 0;
    this.x = Math.random()*790 + 1;
    this.y = canHeigth - Math.random()*300 + 1;
    this.speed = ((Math.random() * 10) + 10)/100;
    
    this.drawBubble = function(){
        this.Timer += deltaTime;
        if(this.Timer > 300){
        this.Count = (this.Count + 1) % 17;
        this.Timer %= 300;
        }
        
        this.y -= this.speed * deltaTime;    
        ctx1.drawImage(ImgBubble[this.Count],this.x,this.y);
        if(this.y < -100){
            Bubbles.splice(Bubbles.indexOf(Bubbles[bi]), 1);    
        }
    }
}

//船
var ship1Y = 30;
var ship2Y = 180;
function drawShip(){
    ctx2.drawImage(sp1, 330,ship1Y,290,290);
    ctx2.drawImage(sp2, 160,ship2Y,220,220);
}

//主要的魟魚
var MainFish = function()
{
    this.x = 0;
    this.y = 0;
    this.Timer = 0;
    this.Count = 0;
    
    this.init = function(){
        this.x = canWidth / 2;
        this.y = canHeigth / 2;
    }
    this.drawfish = function(){
       this.x = followMouse(mouseX, this.x, 0.7);
       this.y = followMouse(mouseY, this.y, 0.7);
        
        this.Timer += deltaTime;
           if(this.Timer > 350){
              this.Count = (this.Count + 1) % 3;
              this.Timer %= 350;
           }
        if(dir == 1){
        ctx1.save();
        ctx1.shadowBlur = 5;
	    ctx1.shadowColor = "white";
        ctx1.drawImage(fish[this.Count], this.x-55,this.y-50,100,100);
        ctx1.restore();
        }else{
        ctx1.save();
        ctx1.shadowBlur = 5;
	    ctx1.shadowColor = "white";
        ctx1.drawImage(fishL[this.Count], this.x-25, this.y-50,100,100);
        ctx1.restore();   
        } 
    }
    
}

//水母
var Jellyfish = function()
{
    this.Timer = 0;
    this.Count = 0;
    this.x = Math.random()*790 + 1;
    this.y = 600;
    this.speed = ((Math.random() * 10) + 5)/100;
    
    this.drawJellyFish = function(){
        this.Timer += deltaTime;
        if(this.Timer > 200){
        this.Count = (this.Count + 1) % 3;
        this.Timer %= 200;
        }
        
        this.y -= this.speed * deltaTime;    
        ctx2.drawImage(Jellyfish[this.Count],this.x,this.y,20,30);
        if(this.y < -10){
                this.recreate();
        }
    }
    
    this.recreate = function(){
        this.x = Math.random()*790 + 1;
        this.y = 600;
    }
}

//如果於碰到水母結束遊戲
function FishandJelly(Jellyfish){
        var jlenth = twofishlength(Jellyfish.x, MainFish.x, Jellyfish.y, MainFish.y);
        if(jlenth < 1400){
          int = 3;
        }
}

//鯊魚
var Shark = function(){
    this.Timer = 0;
    this.Count = 0;
    this.wTimer = 0;
    this.wCount = 0;
    this.check = false;
    this.delayTimer = 0;
    this.x = Math.floor(Math.random()*10 + 1);
        if(this.x % 2 == 1){
            this.x = -100; 
            this.dir = "r";
        }else{
            this.x = 900; 
            this.dir = "l";
        }
    this.y = Math.random()*500 + 1;
    this.dir;
    this.Speed = ((Math.random() * 10) + 25)/100;
    this.drawShark = function(){
    if(this.check == true){    
        this.Timer += deltaTime;
        if(this.Timer > 200){
        this.Count = (this.Count + 1) % 3;
        this.Timer %= 200;
        }
            if(this.dir == "r"){
            this.x += this.Speed * deltaTime; 
                ctx2.drawImage(Shark[this.Count],this.x,this.y - 50,150,100);
            }else{
            this.x -= this.Speed * deltaTime; 
                ctx2.drawImage(SharkA[this.Count],this.x,this.y - 50,150,100);
            }
    }
    }
    this.warning = function(){ //警告
        this.wTimer += deltaTime;
        if(this.wTimer > 500){
        this.wCount = (this.wCount + 1);
        this.wTimer %= 500;
        }
        
        if(this.dir == "r"){
            if(this.wCount == 0 | this.wCount == 2 | this.wCount == 4){
                ctx2.drawImage(war,-100 + 120, this.y - 20, 35, 30);
            }
            else if(this.wCount == 5){
                    this.check = true;
            }
        }else{
            if(this.wCount == 0 | this.wCount == 2 | this.wCount == 4){
                ctx2.drawImage(war,900 - 145, this.y - 20, 35 ,30);
            }
            else if(this.wCount == 5){
                    this.check = true;
            }
        }
    }
}

//主要魚與鯊魚
function FishandShark(Shark){
    var slenth = twofishlength(Shark.x, MainFish.x, Shark.y, MainFish.y);
    if(slenth < 1500){
        int = 3;
    }
}

//寶物
var jewels = function()
{
    this.cTimer = 0;
    this.cCount = 0;
    this.mTimer = 0;
    this.mCount = 0;
    this.dTimer = 0;
    this.dCount = 0;
    this.x = Math.random()*785 + 1;
    this.y = -20;
    this.speed = ((Math.random() * 10) + 5)/100;
    this.ran = Math.random();
    this.id;
    
    this.drawJewels = function (){
        if(this.ran >= 0.3){
            this.id = 1;
            this.cTimer += deltaTime;
            if(this.cTimer > 200){
            this.cCount = (this.cCount + 1) % 16;
            this.cTimer %= 200;
            }
            this.y += this.speed * deltaTime;    
            ctx2.drawImage(coin[this.cCount],this.x,this.y,30,30);
            if(this.y > 620){
                jewelss.splice(jewelss.indexOf(jewelss[mi]), 1);
            }
        }
        else if(this.ran >= 0.1 & this.ran < 0.3){
            this.id = 2;
            this.mTimer += deltaTime;
            if(this.mTimer > 200){
            this.mCount = (this.mCount + 1) % 6;
            this.mTimer %= 200;
            }
            this.y += this.speed * deltaTime;    
            ctx2.drawImage(money[this.mCount],this.x - 20 ,this.y - 20,70,70);
            if(this.y > 620){
                jewelss.splice(jewelss.indexOf(jewelss[mi]), 1);
            }
        }
        else if(this.ran > 0 & this.ran < 0.1){
            this.id = 3;
            this.dTimer += deltaTime;
            if(this.dTimer > 200){
            this.dCount = (this.dCount + 1) % 4;
            this.dTimer %= 200;
            }
            this.y += this.speed * deltaTime;    
            ctx2.drawImage(diamond[this.dCount],this.x,this.y,30,30);
            if(this.y > 620){
                jewelss.splice(jewelss.indexOf(jewelss[mi]), 1);
            }
        }
    }   
    this.thisdisplay = function (){
            jewelss.splice(jewelss.indexOf(jewelss[mi]), 1);
    }
        
    
}


//主要魚與寶物碰撞
function Fishandjewels(jewels){
        var mlenth = twofishlength(jewels.x, MainFish.x, jewels.y, MainFish.y);
        
        if(mlenth < 2000){
          coinSound = new Audio('Audio/coin.wav');
          coinSound.play();
          jewels.thisdisplay();
          if (jewels.id == 1){
              score += 10;
          }
          else if (jewels.id == 2){
              score += 30;
          }
          else if (jewels.id == 3){
              score += 50;
          }
        }
}

//分數
function drawscore(){
    ctx2.save();
    ctx2.fillStyle = "rgba(255, 255, 255, 0.5)";
    ctx2.shadowBlur = 10;
	ctx2.shadowColor = "white";
    ctx2.font = "90px Verdana";
    ctx2.fillText('SCORE', canWidth / 2 , canHeigth / 2 );
    ctx2.restore();
    ctx2.save();
    ctx2.fillStyle = "rgba(255, 215, 0, 0.5)";
    ctx2.shadowBlur = 10;
	ctx2.shadowColor = "yellow";
    ctx2.font = "90px Verdana";
    ctx2.fillText(score, 400 , 400);
    ctx2.restore();

}

//遊戲結束顯示資料
var Data = function()
{
    this.o = 0;
    this.image = new Image();
}
Data.prototype.draw = function()
{
    ctx1.save();
    this.o += deltaTime * 0.0005;
    if(this.o > 1)
        this.o = 1;
        
    ctx1.fillStyle = "rgba(255, 255 , 255," + this.o +")";
    ctx1.shadowBlur = 10;
	ctx1.shadowColor = "white";
    ctx1.font = "35px Verdana";
    ctx1.fillText("Your Score:" + score, canWidth / 2, canHeigth / 2 - 70);
    ctx1.restore();
    ctx1.save();
    this.image.src = "Image/gameover.png";
    ctx1.drawImage(this.image, canWidth / 2 - 175, canHeigth / 2 - 40, 350, 80);
    ctx1.restore();

}




/////////////////////////////////function/////////////////////////////////
//換水母與鯊魚數量
document.getElementById("A").addEventListener("change", ChangeCount);
document.getElementById("B").addEventListener("change", ChangeCount);
function ChangeCount(){
    var x = document.getElementById("A");
    var y = document.getElementById("B");
    JellyCount = x.value;
    SharkCount = y.value;
}

//判斷魟魚往左往右
function onfishMove(){
    dir = mouseX > px?1:-1;
}

//尋找滑鼠座標
function onMousemove(event)
{
    if(int == 2){
        if(event.offSetX || event.layerX)
        {
            px = mouseX;
            mouseX = event.offSetX == undefined ? event.layerX : event.offSetX;
            mouseY = event.offSetY == undefined ? event.layerY : event.offSetY;
        }
    }
}

//讓魟魚跟著滑鼠的方法
function followMouse(x,y,v)
{
    var follow = y - x;
    return x + follow * v;
}

//點跟點之間的距離
function twofishlength(x1,x2,y1,y2){
    return Math.pow(x1 - x2 , 2) + Math.pow(y1 - y2 , 2);
}
