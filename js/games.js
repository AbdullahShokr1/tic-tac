//Define Some Varible
let num=0;
let player1 = 0 ,player2 = 0;

window.onload = ()=> {
    let elements = document.getElementsByClassName('box');
    for(let i = 0; i < elements.length; i++) {
        let element = elements[i];
        element.onclick = function() {
            //function to add X & O
            addmark(this)
            //chech the winner
            chechthewinner(elements);     
        }
    }
}
//function to add X & O
function addmark(val){
    if(val.innerHTML === ''){
        if(num % 2 == 0){
            val.innerHTML="X";
        }else{
            val.innerHTML="O";
        }
        num++;
    }else{
        console.log(val.innerText)
    }
}
//chech the winner
function chechthewinner(elements){
    if(elements[0] != ''&& elements[1] != '' || elements[3] != '' && elements[5] != '' || elements[7] != '' && elements[8] != ''){
        if(elements[0].innerText === elements[1].innerText && elements[0].innerText === elements[2].innerText && elements[0].innerText != ''){
            if(elements[0].innerText === "X" && elements[1].innerText === "X" && elements[2].innerText === "X"){
                player1 ++;
                document.getElementById("scorep1").innerText = player1 ;                
            }else{
                player2 ++;
                document.getElementById("scorep2").innerText = player2
            }
            show(elements[0].innerText)
            console.log("Player1 is winer");
        }else if (elements[3].innerText === elements[4].innerText && elements[3].innerText === elements[5].innerText && elements[3].innerText !== '') {
            if(elements[3].innerText === "X" && elements[4].innerText === "X" && elements[5].innerText === "X"){
                player1 ++;
                document.getElementById("scorep1").innerText = player1 ;                 
            }else{
                player2 ++;
                document.getElementById("scorep2").innerText = player2
            }
            show(elements[5].innerText)
        }else if (elements[6].innerText === elements[7].innerText && elements[6].innerText === elements[8].innerText && elements[6].innerText != '') {
            if(elements[6].innerText === "X" && elements[7].innerText === "X" && elements[8].innerText === "X"){
                player1 ++;
                document.getElementById("scorep1").innerText = player1 ; 
            }else{
                player2 ++;
                document.getElementById("scorep2").innerText = player2
            }
            show(elements[6].innerText)
        }else if (elements[0].innerText === elements[3].innerText && elements[0].innerText === elements[6].innerText && elements[3].innerText != '') {
            if(elements[0].innerText === "X" && elements[3].innerText === "X" && elements[6].innerText === "X"){
                player1 ++;
                document.getElementById("scorep1").innerText = player1 ;  
            }else{
                player2 ++;
                document.getElementById("scorep2").innerText = player2
            }
            show(elements[3].innerText)
        }else if (elements[1].innerText === elements[4].innerText && elements[1].innerText === elements[7].innerText && elements[1].innerText != '') {
            if(elements[1].innerText === "X" && elements[4].innerText === "X" && elements[7].innerText === "X"){
                player1 ++;
                document.getElementById("scorep1").innerText = player1 ; 
            }else{
                player2 ++;
                document.getElementById("scorep2").innerText = player2
            }
            show(elements[1].innerText)
        }else if (elements[2].innerText === elements[5].innerText && elements[2].innerText === elements[8].innerText && elements[8].innerText != '') {
            if(elements[2].innerText === "X" && elements[5].innerText === "X" && elements[8].innerText === "X"){
                player1 ++;
                document.getElementById("scorep1").innerText = player1 ; 
            }else{
                player2 ++;
                document.getElementById("scorep2").innerText = player2;
            }
            show(elements[2].innerText)
        }else if (elements[6].innerText === elements[4].innerText && elements[6].innerText === elements[2].innerText && elements[4].innerText != '') {
            if(elements[6].innerText === "X" && elements[4].innerText === "X" && elements[4].innerText === "X"){
                player1 ++;
                document.getElementById("scorep1").innerText = player1 ;
                 
            }else{
                player2 ++;
                document.getElementById("scorep2").innerText = player2;
            }
            show(elements[4].innerText)
        }
        else if (elements[0].innerText === elements[4].innerText && elements[0].innerText === elements[8].innerText && elements[4].innerText != '') {
            if(elements[0].innerText === "X" && elements[4].innerText === "X" && elements[8].innerText === "X"){
                player1 ++;
                document.getElementById("scorep1").innerText = player1 ;
            }else{
                player2 ++;
                document.getElementById("scorep2").innerText = player2;
            }
            show(elements[8].innerText)
        }
    }
}
//play Again
function playAgain(){
    num=0;
    let boxes = document.getElementsByClassName('box');
    for(let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        boxes[i].innerText='';
    }
    hidden()
}
//Rest The Game
function restGame(){
    num=0;
    document.getElementById("scorep1").innerText = 0;
    document.getElementById("scorep2").innerText = 0;
    let boxes = document.getElementsByClassName('box');
    for(let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        boxes[i].innerText='';
    }
    hidden();
}
//Function Show and hidden massage For Winner
function show(val){
    var show =  document.createAttribute("class");;
    show.value = "showclass";
    document.getElementById("winner").attributes.setNamedItem(show);
    if(val === "X"){
        document.getElementById("playerName").innerText="The Player 1 is Winner";
    }else{
        document.getElementById("playerName").innerText="The Player 2 is Winner";
    }
    
   
}
function hidden(){
    var hide =  document.createAttribute("class");;
    hide.value = "hideclass";
    document.getElementById("winner").attributes.setNamedItem(hide);
}