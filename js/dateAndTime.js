function showTime(){
    var today = new Date();
    var hours = today.getHours();
    var minites = today.getMinutes();
    var seconds = today.getSeconds();

    hours=checkTime(hours);
    minites=checkTime(minites);
    seconds=checkTime(seconds);
    document.getElementById("showTime").innerHTML = hours+":"+minites+":"+seconds;
    var t = setTimeout('showTime()',380);
}

function showDate(){
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();
    var week = today.getDay();
    week = transferWeek(week);
    document.getElementById("showDate").innerHTML = year+"年"+(month+1)+"月"+day+"日  星期"+week;
}

function checkTime(time){
    if(time < 10){
        time = "0" + time;
    }
    return time;
}

function transferWeek(w){
    switch(w){
        case 0: w="日";break;
        case 1: w="一";break;
        case 2: w="二";break;
        case 3: w="三";break;
        case 4: w="四";break;
        case 5: w="五";break;
        case 6: w="六";break;
    }
    return w;
}