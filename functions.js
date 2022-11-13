
// VARIABLES
let select = "none";
let machine = "none";
let Interval = 0;
let Timeout = 0;
let btn_play = document.getElementById("btn_play");
let check = 0;
btn_play.disabled=true;
let points = [0, 0];

/*  
CHANGE THE IMAGE OF THE COMPUTER'S CHOSEN ITEM EACH 50 MILISECONDS
IN ORDER TO MAKE A NICE EFFECT. 
*/
function startImgChange(){
    let img_pc = document.getElementById("img_pc");
    check++;
    const img_i = Math.floor(Math.random() * 3) + 1
    if(img_i == 1)
        img_pc.src = "img/scisor.webp";
    if(img_i == 2)
        img_pc.src = "img/rock.webp"; 
    if(img_i == 3)
        img_pc.src = "img/paper.webp";
    if (check == 20)
    {
        clearInterval(Interval);
        finish(img_pc)
    }
}

/*
PUTS THE CORRECT IMAGE OF THE COMPUTER'S ITEM.
CREATE THE MESSAGE WITH THE RESULT OF THE GAME.
*/
function finish(img_pc){
    img_pc.src = "img/"+machine+".webp";
    let res = result();
    let message = "";
    if(res == "win"){
        message = "ganaste";
		points[0] += 1;
	}
	if(res == "lose"){
		message = "perdiste";
		points[1] += 1;
	}
    if(res == "draw")
        message = "Empate";
    document.getElementById("result").innerText = message;
    document.getElementById("usr_pts").innerText = "pts: "+points[0];
    document.getElementById("pc_pts").innerText = "pts: "+points[1];
}

// GET THE USER ITEM AND ENABLE THE BUTTON PLAY
function user_select(item){    
    select = item;
    btn_play.disabled=false;
    let id = "btn_"+item;
    selectCurrentButton(id);
    document.getElementById(id).className="btn-current";
}

// Change the style of the selected button.
function selectCurrentButton(id){
    if (id == "btn_rock"){
        document.getElementById("btn_rock").className="btn-current";
        document.getElementById("btn_paper").className="btn";
        document.getElementById("btn_scisor").className="btn";
    }
    if (id == "btn_paper"){
    	document.getElementById("btn_rock").className="btn";
        document.getElementById("btn_paper").className="btn-current";
        document.getElementById("btn_scisor").className="btn";
    }
	if (id == "btn_scisor"){
        document.getElementById("btn_rock").className="btn";
        document.getElementById("btn_paper").className="btn";
        document.getElementById("btn_scisor").className="btn-current";
    }
}

/*
EVALUATE THE RESULT OF THE GAME DEPENDING ON THE ITEMS
CHOSEN BY THE PLAYER AND THE PC
*/
function result(){
    let scisor = {rock:"lose", scisor:"draw", paper:"win"};
    let rock = {rock:"draw", scisor:"win", paper:"lose"};
    let paper = {rock:"win", scisor:"lose", paper:"draw"};
    if (select == "scisor")
        return scisor[machine];
    if (select == "rock")
        return rock[machine];
    if (select == "paper")
        return paper[machine];
}

// MAIN FUNCTION. IT STARTS THE GAME.
function play(){
    let img_user = document.getElementById("img_user");
    machine = machine_select();
    img_user.src = "img/"+select+".webp";
    check = 0;
    Interval = window.setInterval(startImgChange, 50);
	console.log("user", points[0]);
	console.log("pc", points[1]);
}

// CHOSE RANDOMLY AN ITEM FOR THE COMPUTER.
function machine_select(){
    const rand = Math.floor(Math.random() * 3) + 1
    if (rand == 1)
        machine = "scisor";
    if (rand == 2)
        machine = "rock";
    if (rand == 3)
        machine = "paper";
    return machine;
}