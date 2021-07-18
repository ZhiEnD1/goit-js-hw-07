
const [decrement, span, invrement] = document.querySelector('#counter').children;

decrement.onclick =  () => span.textContent -= 1;

invrement.onclick =  () => span.textContent =+ span.textContent + 1;
