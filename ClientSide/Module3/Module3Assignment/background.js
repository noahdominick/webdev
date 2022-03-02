//Color array
let color = ['blue','yellow', 'black', 'red', 'brown', 'orange'];

//get button
let button = document.getElementById('button')

//add event listener
button.addEventListener('click', function(){
    //randomizer
    var randomColor = color[Math.floor(Math.random() * color.length)]
    //get container
    let container = document.getElementById('container');

    container.style.background = randomColor
})