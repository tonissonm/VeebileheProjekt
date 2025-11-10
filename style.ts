function Marquee(text:string, speed: number=100){
    const Marqueetext = document.getElementById('marqueetext');
    Marqueetext?.addEventListener('animationiteration', () => {
        Marqueetext.style.animation = "none";
        
}