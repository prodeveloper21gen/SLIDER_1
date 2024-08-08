let cliks = 0;
const blok = document.querySelector('.blok');
const sn = document.querySelector('.slide_number');
const snake = document.querySelector('.snake');
sn.textContent = `1/${blok.children.length}`;
function test(num) {
    const length = blok.children.length;
    cliks = (cliks + num + length) % length;
    const res = -cliks * 100;
    blok.style.transform = `translateX(${res}%)`;
    sn.textContent = `${cliks + 1}/${blok.children.length}`;
    snake.style.width = `${cliks + 2}%`
    snake.innerHTML = `${cliks + 1}`;
}