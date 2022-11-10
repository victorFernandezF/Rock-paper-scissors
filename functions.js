
let select = "none";
let machine = "none";
let btn_play = document.getElementById("btn_play");
btn_play.disabled=true;

function user_select(param){
        select = param;
        btn_play.disabled=false;
}

function result(){
    let scisor = {stone:"lose", scisor:"draw", paper:"win"};
    let stone = {stone:"draw", scisor:"win", paper:"lose"};
    let paper = {stone:"win", scisor:"lose", paper:"draw"};
    if (select == "scisor")
        return scisor[machine];
    if (select == "stone")
        return stone[machine];
    if (select == "paper")
        return paper[machine];
}

function play(){
    machine_select();
    let res = result();
    let message = "";
    if(res == "win")
        message = "Has ganado";
    if(res == "lose")
        message = "Has perdido";
    if(res == "draw")
        message = "Empate";
    document.getElementById("result").innerText = message;
    /* console.log ("user "+ select +" machine "+ machine + " result" + " user " +res) */
}

function machine_select(){
    const rand = Math.floor(Math.random() * 3) + 1
    if (rand == 1)
        machine = "scisor";
    if (rand == 2)
        machine = "stone";
    if (rand == 3)
        machine = "paper";
    return machine;
}