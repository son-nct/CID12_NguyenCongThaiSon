let seconds = 0;
// Interval : khoảng time
let timeInterval = null;

document.getElementById('btnStart').addEventListener('click',() => {
    // Dùng ES6
    // Dùng SetTimeOut để gán vào biến timeInterval
    timeInterval = setInterval(() => {
        seconds++;
        const time = formatSecond(seconds);
        document.getElementById('time').innerHTML = time;
    }, 1000);
});


function formatSecond(second) {
    const m = Math.floor(second / 60); // Math.floor là làm tròn xuống
    // ví dụ second = 61 /60 = 1.016 = 1 ==> minute = 1

    const s = second % 60; // giây chỉ chạy tới 60

    return m + " : " + s; 
}


document.getElementById('btnPause').addEventListener('click', () => {
    if(timeInterval) {
        clearInterval(timeInterval);
    }
});


document.getElementById('btnStop').addEventListener('click', () => {


    if(timeInterval) {
        clearInterval(timeInterval);
    }

    seconds = 0;

    document.getElementById('time').innerHTML = formatSecond(seconds);
});

