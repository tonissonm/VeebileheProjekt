/*koodi autor: Matis Tõnisson*/

document.addEventListener("DOMContentLoaded", function() {
    const marqueeText = document.getElementById("marquee-text");
    marqueeText.addEventListener("animationiteration", () => {
        marqueeText.style.animation = "none";
        requestAnimationFrame(() => {
            marqueeText.style.animation = "";
        });
    });
});
