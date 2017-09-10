function showFavorite(){
    var a = document.getElementById("middle2");
    var b = document.getElementById("middle1");
    $(b).fadeOut();
    $(a).fadeIn();
}

function openBAIDU(){
    window.open("https://www.baidu.com");
}

function openGOOGLE(){
    window.open("https://www.google.com");
}

function openGITHUB(){
    window.open("https://github.com/AlphaSheep-SCAU/MyPage");
}

function openHUYA(){
    window.open("http://www.huya.com/g");
}

function openQQZONE(){
    window.open("https://user.qzone.qq.com/452448073");
}

function backToMainPage(){
    var a = document.getElementById("middle2");
    var b = document.getElementById("middle1");
    $(b).fadeIn();
    $(a).fadeOut();
}

function closeDIV(){
    var a = document.getElementById("middle1");
    var b = document.getElementById("curtain");
    var c = document.getElementById("btnExpand");
    $(a).animate({
        left:'100%',
        top:'15px',
        height:'0px',
        width:'0px',
        opacity:'0'
    });
    $(b).animate({
        left:'100%',
        top:'15px',
        height:'0px',
        width:'0px',
        opacity:'0'
    });
    $(c).fadeIn();
}

function openDIV(){
    var a = document.getElementById("middle1");
    var b = document.getElementById("curtain");
    var c = document.getElementById("btnExpand");
    $(a).animate({
        left:'25%',
        top:'15%',
        height:'70%',
        width:'50%',
        opacity:'1'
    });
    $(b).animate({
        left:'25%',
        top:'15%',
        height:'70%',
        width:'50%',
        opacity:'0.5'
    });
    $(c).fadeOut();
}