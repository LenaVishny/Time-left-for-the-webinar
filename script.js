function beginningWebinar(){
    const DayBeginning = new Date('February 10, 2022 19:00');
    const now = new Date();
    const diff = DayBeginning - now;

    const msInSecond = 1000;
    const msInMinute = 60*1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector('.days').textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay)/msInHour);
    document.querySelector('.hours').textContent=displayHour;

    const displayMinute = Math.floor((diff%msInHour)/msInMinute);
    document.querySelector('.minutes').textContent = displayMinute;

    const displaySecond = Math.floor ((diff%msInMinute)/msInSecond);
    document.querySelector(".seconds").textContent=displaySecond;

    if(diff <= 0){
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent=0;
        document.querySelector('.minutes').textContent =0;
        document.querySelector(".seconds").textContent=0;
        clearInterval(timerId)
        EntryСlosed();
    }
    
}

let timerId = setInterval(beginningWebinar, 1000);

function EntryСlosed (){
    const headingTwo = document.querySelector (".change");
    headingTwo.textContent = "Вебинар закончился!";
    headingTwo.classList.add ('closed');
}

const button = document.querySelector('#myButton');

button.addEventListener("click", function() {
    document.querySelector("#myAudio").play();
})
button.addEventListener("dblclick", function() {
    document.querySelector("#myAudio").pause();
})
