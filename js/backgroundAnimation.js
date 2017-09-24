var imgIndex;

var myScreen;    
var canvas;
var str;
var fontSize;
var cols;
var drops=[];
var ctx;

var tran = 1;
var curTran = 1;

function tranWhich(){
    var a=document.getElementById("btnChange");
    var btnStart=document.getElementById("startShowBG");
    $(btnStart).hide();
    var btnStop=document.getElementById("stopShowBG");
    $(btnStop).show();
    if(tran == 1){
        curTran=0;
        tran=0;
        a.innerText="卐";
        $("#canvas").fadeIn();
    }else if(tran == 0){
        curTran=1;
        tran=1;
        a.innerText="卍";
         $("#canvas").fadeOut();
    }else{
        tran=curTran;
        tranWhich();
    }
    // console.log(tran +" " +curTran);
}

function stopShowPic(){
    tran=3;
    var btnStop=document.getElementById("stopShowBG");
    $(btnStop).hide();
    var btnStart=document.getElementById("startShowBG");
    $(btnStart).show();
    // btnStop.innerText="▶";
    // btnStop.setAttribute("onclick","startShowPic()");
}

function startShowPic(){
    tran=curTran;
    var btnStart=document.getElementById("startShowBG");
    $(btnStart).hide();
     var btnStop=document.getElementById("stopShowBG");
    $(btnStop).show();
    // btnStart.innerText="||";
    // btnStart.setAttribute("onclick","stopShowPic()");
    // console.log(tran +" " +curTran);
}

function beginShowPic(){
    var a = document.getElementById("bg");
    // var i = (Math.floor((Math.random()*10))%8)+1;\
    var i = Math.floor(Math.random() * 1085 );
    // a.setAttribute("src","img/background/background"+i+".jpg");
    $.ajax({
        url:"https://unsplash.it/1920/1080/?image=" + i,
        method:"GET",
        success:function(){
            a.setAttribute("src","https://unsplash.it/1920/1080/?image=" + i);
            $(a).fadeIn(3000);
            var c = document.getElementById("curtain");
            $(c).fadeIn(1000);
            var d = document.getElementById("middle1");
            $(d).fadeIn(1500);
            setTimeout("changeImg()",10000);
        },
        error: function(){
            beginShowPic();
        }
    });
    // a.setAttribute("src","https://unsplash.it/1920/1080/?image=" + i);
    // $(a).fadeIn(3000);
    // var c = document.getElementById("curtain");
    // $(c).fadeIn(1000);
    // var d = document.getElementById("middle1");
    // $(d).fadeIn(1500);
    // imgIndex=i;
    // var b = setTimeout("changeImg()",10000);
}
    function changeImg(){
        if(tran === 1){
            var bg = document.getElementById("bg");
            var i = Math.floor(Math.random() * 1085 );
            $.ajax({
                url:"https://unsplash.it/1920/1080/?image=" + i,
                method:"GET",
                success: function(){
                    // $(bg).fadeOut(2000);
                    $(bg).hide();
                    bg.setAttribute("src","https://unsplash.it/1920/1080/?image=" + i);
                    $(bg).fadeIn(2000);
                    setTimeout("changeImg()",10000);
                },
                error: function(){
                    if(XMLHttpRequest.readyStatus === 404){
                        changeImg();
                    }
                }
            });
        }else{
            setTimeout("changeImg()",10000);
        }
    }
// function changeImg(){
//     // console.log("change");
//     if(tran == 1){
//         var frontBG = document.getElementById("bg");
//         $(frontBG).fadeOut(4000);
//         var f = setTimeout("imgRandom()",3000);
//     }
//     var d = setTimeout("changeImg()",10000);
// }

// function imgRandom(){
//     // console.log("random");
//     var frontBG = document.getElementById("bg");
//     var i = Math.floor(Math.random() * 1084 );
//     $.ajax({
//         url:"https://unsplash.it/1920/1080/?image=" + i,
//         method:"GET",
//         success: function(){
//             frontBG.setAttribute("src","https://unsplash.it/1920/1080/?image=" + i);
//             $(frontBG).fadeIn(2000);
//         },
//         error: function(){
//             imgRandom();
//         }
//     });
//     // frontBG.setAttribute("src","img/background/background"+i+".jpg")
//     frontBG.setAttribute("src","https://unsplash.it/1920/1080/?image=" + i);
//     $(frontBG).fadeIn(2000);
// }

function setCanvas(){
    if(tran == 0){
        myScreen=window.screen;
        canvas=document.getElementById("canvas");
        canvas.width=myScreen.width;
        canvas.height=myScreen.height;
        // str = "abcdefghijklmnopqrstuvwxyz";
        // str="0123456789"
        str="あいうえおアイウエオコケクキカこけくきかさしすせそサシスセソトテツチタとてつちたなにぬねのナニヌネノホヘフヒハほへふひはまみむめもマミムメモヨユヤよゆやらりるれろラリルレロ"
        // str="龘龘龘靐齉齾爩鱻麤龗灪吁龖厵滟爨癵籱饢驫鲡鹂鸾麣纞虋讟钃骊郁鸜麷鞻韽韾响顟顠饙饙騳騱饶饐"
        // str="№㊤◤▧▤▨☷㊣❀✿❉❈ღ❤✪₪✁✖❂✟۩〠☢✈♛☫➷❂☃"
        // str="大佬洋好靓仔犀利";
        str=str.split("");
        fontSize = 20;

        cols = canvas.width / fontSize;

        for(var i=0;i<cols;i++){
            drops[i]=1;
        }
        ctx = canvas.getContext("2d");
        $(canvas).fadeIn();
        draw();
    }else{
        setTimeout("setCanvas()",10);
    }
}

function draw(){
    if(tran == 0){
        ctx.fillStyle="rgba(0,0,0,0.1)";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle="green";
        ctx.font = fontSize + "px arial";

        for(var i=0;i<cols;i++){
            var txt = str[ Math.floor(Math.random() * (str.length)) ];
            ctx.fillText(txt,i*fontSize,drops[i]*fontSize);
            if(drops[i]*fontSize > canvas.height || Math.random()>0.95){
                drops[i]=0;
            }
            drops[i]++;
        }
    }
    // setInterval(draw(),33);
    setTimeout("draw()",33);
}