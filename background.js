let colors = ["green","red","rgba(133,122,200)","#f1505"];

let btn = document.getElementById("btn");

let color = document.querySelector(".color");

btn.addEventListener("click", function(){
    let randomNumber = getRandomNumber(0,3);
    document.body.style.backgroundColor = colors[randomNumber];
    color.tectContent = color[randomNumber];
})

function getRandomNumber(min,max){
    var number = parseInt(Math.random() * (max - min) +min);
    console.log(number);
    return number;
}
