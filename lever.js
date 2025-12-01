document.querySelectorAll('.moistatus').forEach(moistatus => {
    // Leiame leveri selles konkreetses moistatuses
    const lever = moistatus.querySelector('.lever'); // või '#lever', kui võtta id järgi

    let leverOn = false;

    lever.addEventListener('click', () => {
        leverOn = !leverOn;

        // vaheta leveri pilt
        lever.src = leverOn ? 'lever_on.png' : 'lever_off.png';

        // lülita .on sisse/välja SELLEL moistatusel
        moistatus.classList.toggle('on', leverOn);
    });
});