let logo = document.querySelector(".logo");
let main = document.querySelector(".rover-hp-container");
let header = document.querySelector(".rover-header-container");
let  title = document.querySelector(".rover-hero-container h1")
let boarding = document.querySelector(".section-two h3")
let rover = document.querySelector(".boarding")
let roverP = document.querySelector(".walk");
let day = document.querySelector(".day");
let roverQuote = document.querySelector(".rover-quote ");
let learnMore = document.querySelector(".bg-w .box .c-gray");
let menu = document.querySelector(".menu")
let roverLeft = document.querySelector(".rover-header-left")
let roverRight = document.querySelector(" .rover-header-right")
let roverHero = document.querySelector(".rover-mobile-hero")
let theSecondImage = document.querySelector(".cat")

logo.addEventListener("click" , (e)=> {
    main.classList.add("version-two");
    title.textContent = "We're the Cat People";
    boarding.textContent = "Cat Boarding";
    rover.textContent = "Cat walking";
    roverP.textContent = "Whenever your Cat needs a walk.";
    day.textContent = "catty Day Care";
    roverQuote.insertAdjacentHTML("afterbegin" , `My Rover sitter sent me updates throughout the day and took care of my cat as if she were her own. <span>– Corinna F.</span>`);
    // learnMore.insertAdjacentHTML("afterbegin",`We’re The Cat People. <a href="#">Learn More</a>`)
    learnMore.innerHTML = `We’re The Cat People.<a href="#">Learn More</a>`
    roverHero.src = "https://i.ibb.co/QfqjHxq/mobile-hero-2.jpg"
    theSecondImage.src = "https://images.hdqwalls.com/download/cute-cat-4k-wg-1080x1920.jpg"
})
menu.addEventListener("click" , ((e)=> {
    roverLeft.style.display = "block";
    roverRight.style.display = "block";
}))