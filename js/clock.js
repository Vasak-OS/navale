async function startClock(){
    let elem = document.getElementById("clock");
    let date = new Date();
    let hour = date.getHours(); // 0 - 23
    let min = date.getMinutes(); // 0 - 59
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    
    hour = (hour < 10) ? `0${hour}` : hour;
    min = (min < 10) ? `0${min}` : min;
    
    elem.innerHTML = `
    <span
        data-bs-toggle="tooltip"
        data-bs-placement="left"
        title="${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}">
        ${hour}:${min}
    </span>
    `
    
    setTimeout(startClock, 5000);  
}

startClock();