/* Expandable Member Bios */

function toggleText() {
    var extraText = document.querySelector(".expandable-content");
    var button = document.querySelector(".expandable-button");
    extraText.classList.toggle("expanded");
    if (extraText.classList.contains("expanded")) {
        button.textContent = "Click to collapse";
    }
    else {
        button.textContent = "Click to expand";
    }
}

/* Programming for slideshow on Research page */

let slideNum = 1;
let slideInterval;

showSlide(slideNum);


function changeSlide(x) {
    clearInterval(slideInterval);
    showSlide(slideNum += x);
    startSlideInterval();
}

function showSlide(i) {
    let slides = document.getElementsByClassName("slide");
    // hide the previous slide (was either the one behind or the one in front)
    if (slides[slideNum - 2]) slides[slideNum - 2].style.display = "none";
    if (slides[slideNum]) slides[slideNum].style.display = "none"; 
    
    if (i > slides.length) {
        slideNum = 1;
    }
    else if (i < 1) {
        slideNum = slides.length;
    }
    slides[slideNum - 1].style.display = "block";
}

function startSlideInterval() {
    slideInterval = setInterval(function() {showSlide(slideNum += 1);}, 2500);
}

startSlideInterval();