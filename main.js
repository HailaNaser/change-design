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
let theSecondImage = document.querySelector(".bg-w img")
let h2 = document.querySelector(".rover-123-container h2 ")



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
    roverHero.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGPYZpO3CZfDNjwPGsc2iiWAIN8fvj2BinwxHx6z8PGQ&s"
    theSecondImage.src = "https://images.hdqwalls.com/download/cute-cat-4k-wg-1080x1920.jpg"
    h2.textContent = "We’re the treat-your-Cat-like-family Cat people"
})
menu.addEventListener("click" , ((e)=> {
    roverLeft.style.display = "block";
    roverRight.style.display = "block";
}))