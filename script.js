let boxes=document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msgOfWinning = document.querySelector(".msgOfWinning");
let newGameBtn = document.querySelector("newgamebtn");



let turnO=true;

const winningPatterns=[[0,1,2],[0,3,6],[0,4,8],[3,4,2],[1,4,7],[2,4,6],[6,7,8],[2,5,8]];

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true ;
    }
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO === true){
           // console.log("x");
            box.innerText="X";
            turnO = false;
        }
        else{
            //console.log("y");
            box.innerText="O";
            turnO = true;
        }
        box.disabled=true;
        checkwinner();
       
    });
});

const checkwinner= () =>{
    for(let pattern of winningPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        
         if(pos1val != "" && pos2val != "" && pos3val != "")
         {
             if(pos1val === pos2val && pos1val === pos3val)
             {
                disableboxes();
                 console.log("winner",pos1val);
                 msgOfWinning.innerHTML=`Player ${pos1val} wins!`;
                msgContainer.classList.remove("hide");
               
  

             }
         }
    }
}




const enableboxes = () =>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
    };

const resetbtnfunct = () =>{
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
};

const newbtnfunct = () =>{
    msgContainer.classList.add("hide");
    turnO = true;
    enableboxes();
   
     
}

resetBtn.addEventListener("click",resetbtnfunct);
newGameBtn.addEventListener("click",newbtnfunct);
