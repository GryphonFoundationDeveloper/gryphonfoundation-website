/* Programming for slideshow on Research page */

let slideNum = 1;
showSlide(slideNum);

function changeSlide(x) {
    showSlide(slideNum += x);
}

function showSlide(i) {
    let slides = document.getElementsByClassName("slide");
    if (i > slides.length) {
        slideNum = 1;
    }
    else if (i < 1) {
        slideNum = slides.length;
    }
    slides[slideNum - 1].style.display = "block";
    // hide the previous slide (was either the one behind or the one in front)
    if (slides[slideNum - 2]) slides[slideNum - 2].style.display = "none";
    if (slides[slideNum]) slides[slideNum].style.display = "none"; 
}