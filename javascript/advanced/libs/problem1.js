document.querySelector('button').onclick = (textColorChange) => {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.color = rndCol;
};
const random = (number) => Math.floor(Math.random() * (number + 1));


btn.addEventListener('click', textColorChange);