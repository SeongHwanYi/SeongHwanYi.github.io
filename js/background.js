const images = ["background1.jpg", "background2.jpg", "background3.jpg"];

const picture = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src= `img/${picture}`

document.body.appendChild(bgImage);