console.log("Hello!")


function createGrid(...args){
    console.log(args[0]);
    console.log(args[1]);
    console.log(typeof(args[0]));
    for(let i=0; i<args[0]; i++){
        const rowDiv =document.createElement("div");
        const pageDiv = document.querySelector(".etch-a-sketch");
        rowDiv.setAttribute("style", "display:flex");
        rowDiv.className = "pixel";
        rowDiv.style.flexGrow = "1";
        
        
        for(let j=0; j <args[1]; j++){
            const columnDiv = document.createElement("div");
            columnDiv.style.flexGrow = "1";
            columnDiv.className = "pixel"
            rowDiv.appendChild(columnDiv);
            columnDiv.style.border = "1px solid black"

        }
        pageDiv.appendChild(rowDiv);
    }
    
    const divs = document.querySelectorAll(".pixel");
    addHoverListener(divs);


}

function addHoverListener(divs){
    for(const div of divs){
        div.addEventListener("mouseover", function(event){
            event.target.style.backgroundColor = "red";
        })
    }
}
function activateButtons(){
    const clearBoard = document.querySelector(".btn_clear");
    const newBoard = document.querySelector(".btn_newBoard");
    clearBoard.addEventListener("click", function(){
        const divs = document.querySelectorAll(".pixel");
        for(const div of divs){
            console.log(div)
            div.style.backgroundColor = "white";
        }
    })
    newBoard.addEventListener("click", function(){
        const divs = document.querySelectorAll(".pixel");
        const inHeight = document.querySelector("#in_height")
        const inWidth = document.querySelector("#in_width")
        for(const div of divs){
            console.log(div)
            div.style.backgroundColor = "white";
            div.remove()
        }
        createGrid(inHeight.value,inWidth.value)

    })

}

function inputMaxListener(){
    const inHeight = document.querySelector("#in_height");
    const inWidth = document.querySelector("#in_width");
    inHeight.addEventListener("change", function (){
        if(inHeight.value > 100){
            alert("Value cannot be greater than 100");
            inHeight.value = 100;
        }
    })
    inWidth.addEventListener("change", function (){
        if(inWidth.value > 100){
            alert("Value cannot be greater than 100");
            inWidth.value = 100;
        }
    })
}

function initializePage(){
    
    activateButtons()
    inputMaxListener()
    const inHeight = document.querySelector("#in_height")
    const inWidth = document.querySelector("#in_width")
    inHeight.value = 16
    inWidth.value = 16

    console.log(inHeight.value)
    createGrid(inHeight.value,inWidth.value)
}

initializePage()
