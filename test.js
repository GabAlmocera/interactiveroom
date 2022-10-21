console.log("Test");

const sechand = document.querySelector("[data-second]");
const minhand = document.querySelector("[data-minutes]");
const hourhand = document.querySelector("[data-hours]");

function setClock(){
    console.log("Clock Changed");
    const currentDate = new Date();
    let seconds = currentDate.getSeconds() /60;
    let minutes = currentDate.getMinutes() /60;
    let hours = currentDate.getHours();
    console.log("Seconds is " + seconds);
    setRotation(sechand, seconds);
    setRotation(minhand, minutes);
    setRotation(hourhand, hours);
}

function setRotation(hand, rotation){
    hand.style.setProperty(' --rotation', rotation * 360);
}

setInterval(setClock, 1000);
setClock();