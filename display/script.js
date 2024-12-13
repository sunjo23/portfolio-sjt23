document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const content = Array.from(slider.getElementsByClassName("content"));
    const nextBtn = document.querySelector(".nextBtn");
    const prevBtn = document.querySelector(".prevBtn");

    let currentIndex = 0;
    function nextElement() {
        currentIndex += 1;
        if(currentIndex >= content.length - 2) {
            currentIndex = 0;
        } 35
        updateCarousel();
    }
    function prevElement() {
        currentIndex = currentIndex - 1;
        if (currentIndex < 0){
            currentIndex = content.length -3;
        }
        updateCarousel();
    }
    function updateCarousel(){
        const slideWidth = content[0].offsetWidth;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
    nextBtn.addEventListener("click", nextElement);
    prevBtn.addEventListener("click", prevElement);
});