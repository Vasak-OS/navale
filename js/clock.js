async function startClock(){
    let elem = document.getElementById("clock");
    let date = new Date();
    let hour = date.getHours(); // 0 - 23
    let min = date.getMinutes(); // 0 - 59
    
    hour = (hour < 10) ? `0${hour}` : hour;
    min = (min < 10) ? `0${min}` : min;
    
    let time = `${hour}:${min} `;
    elem.innerText = time;
    elem.textContent = time;
    
    setTimeout(startClock, 5000);  
}

startClock();