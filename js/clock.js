async function startClock(){
    var date = new Date();
    var hour = date.getHours(); // 0 - 23
    var min = date.getMinutes(); // 0 - 59
    
    hour = (hour < 10) ? `0${hour}` : hour;
    min = (min < 10) ? `0${min}` : min;
    
    var time = `${hour}:${min} `;
    document.getElementById("clock").innerText = time;
    document.getElementById("clock").textContent = time;
    
    setTimeout(startClock, 5000);  
}

startClock();