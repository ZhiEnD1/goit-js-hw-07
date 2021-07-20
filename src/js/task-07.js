const input = document.querySelector('#font-size-control')
const text = document.querySelector('#text')
// console.log(input)
// console.log(text)
input.addEventListener('input',
    function () {
        text.style.fontSize = input.value + 'px'
    }
);