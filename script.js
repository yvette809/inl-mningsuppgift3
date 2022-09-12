
let text = document.querySelector('h1')
let clickedButton = document.querySelector('button')

clickedButton.addEventListener('click',changeText)

function changeText (){
    text.innerHTML = 'Goodbye world'
}