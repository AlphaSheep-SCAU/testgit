    var myScreen;    
    var canvas;
    var str;
    var fontSize;
    var cols;
    var drops=[];
    var ctx;

    function setCanvas(){
        myScreen=window.screen;
        canvas=document.getElementById("canvas");
        canvas.width=myScreen.width;
        canvas.height=myScreen.height;

        // str = "abcdefghijklmnopqrstuvwxyz";
        // str="0123456789"
        str="あいうえおアイウエオコケクキカこけくきかさしすせそサシスセソトテツチタとてつちたなにぬねのナニヌネノホヘフヒハほへふひはまみむめもマミムメモヨユヤよゆやらりるれろラリルレロ"
        // str="龘龘龘靐齉齾爩鱻麤龗灪吁龖厵滟爨癵籱饢驫鲡鹂鸾麣纞虋讟钃骊郁鸜麷鞻韽韾响顟顠饙饙騳騱饶饐"
        // str="№㊤◤▧▤▨☷㊣❀✿❉❈ღ❤✪₪✁✖❂✟۩〠☢✈♛☫➷❂☃"
        // str="01";
        str=str.split("");
        fontSize = 20;

        cols = canvas.width / fontSize;

        for(var i=0;i<cols;i++){
            drops[i]=1;
        }
        ctx = canvas.getContext("2d");
        $(canvas).fadeIn();
        draw();
    }

    function draw(){
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
        // setInterval(draw(),33);
        setTimeout("draw()",33);
    }