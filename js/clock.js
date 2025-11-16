const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();

    const year = date.getFullYear();
    const month = String(date.getMonth()).padStart(2, "0");
    const day = String(date.getDay()).padStart(2, "0");
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerHTML = `${year}-${month}-${day} ${hour}:${minute}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
