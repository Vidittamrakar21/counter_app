
let count = 0;

let show = document.getElementById("display");
let res = document.getElementById("save");

function counter(){
    count = count + 1;
    show.textContent = count;
}

function save(){
    let we  = count + " - ";
    res.textContent += we;
    show.textContent = 0;
    count = 0;

}

