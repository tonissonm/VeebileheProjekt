/*koodi autor: Matis Tõnisson*/

document.addEventListener("DOMContentLoaded", function() {
    /*Leia marquee tekstielement*/
    const marqueeText = document.getElementById("marquee-text");
    marqueeText.addEventListener("animationiteration", () => {
        /*Taaskäivitame animatsiooni iga kord, et see algaks uuesti*/
        marqueeText.style.animation = "none";
        /*loome uue frame'i, et muudatused jõustuksid*/
        requestAnimationFrame(() => {
            marqueeText.style.animation = "";
        });
    });
});
