let colorTitle = document.querySelector('.color');

let colors = ["green","red","rgba(133,122,200)","#f1505"];

let btn = document.getElementById("btn");


btn.addEventListener("click", function(){
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
})

function getRandomNumber(){
    // var number = parseInt(Math.random() * (max - min) +min);
    // console.log(number);
    // return number;

    let num = Math.floor(Math.random() * colors.length);
    console.log(colors[num]);
    colorTitle.textContent = colors[num];
    return num;
}
