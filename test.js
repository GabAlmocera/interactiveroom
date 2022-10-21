console.log("Test");

const sechand = document.querySelector("[data-second]");
const minhand = document.querySelector("[data-minutes]");
const hourhand = document.querySelector("[data-hours]");

function setClock(){
    console.log("Clock Changed");
    const currentDate = new Date();
    let seconds = currentDate.getSeconds() * 6;
    let minutes = currentDate.getMinutes() * 6;
    let hours = currentDate.getHours() * 15 - 60;
    console.log("Seconds is " + seconds);
    setRotation(sechand, seconds);
    setRotation(minhand, minutes);
    setRotation(hourhand, hours);
}

function setRotation(hand, rotation){
    hand.style.setProperty('--rotation', rotation)
}

setInterval(setClock, 1000);
setClock();