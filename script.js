const grid = document.querySelector("#grid");
const button = document.querySelector(".change");
const input = document.querySelector(".numb");
const erase = document.querySelector(".erase");
const paint = document.querySelector(".paint");
const colorSelect = document.querySelector("#colorSelect");
const random = document.querySelector(".random");

// grid style

grid.style.display= "flex";
grid.style.flexWrap= "wrap";
grid.style.backgroundColor= "white";
grid.style.height= "513px";
grid.style.width= "513px";
grid.style.rowGap= "0";
grid.style.columnGap= "0";
grid.style.margin="0";
grid.style.padding="0";

//creating grid
function gridcreate(gridValue){
    for(let i = 0; i<(gridValue*gridValue); i++){

        const temp = document.createElement("div");
        temp.setAttribute("id", "box")
        
        grid.append(temp);
        temp.style.height = `${(513-(gridValue*2))/gridValue}px`
        temp.style.width = `${(513-(gridValue*2))/gridValue}px`
        temp.style.border = "1px grey solid"
        temp.style.backgroundColor = "white"
        temp.style.margin = "0";
        temp.style.padding = "0";

    }
}

//remove element
function remove(){
    const rem = document.querySelectorAll("#box"); 
    rem.forEach((el) => {el.remove();});
}

function specificColor(e){
    
    const cell = e.target;
    cell.style.backgroundColor = colorSelect.value;
}

function randomColor(e){

    //random color
    function getColor(){
        let alpha = "0123456789ABCDEF";
        let hex = "#";

        for(let i = 0; i<6; i++){
            hex += alpha[Math.floor(Math.random()*16)];
        }
        return hex;
    }

    const cell = e.target;
    let hexCode = getColor();
    cell.style.backgroundColor= hexCode; 
    colorSelect.value = hexCode; 
    
}

//painting
function painting(id){
    let hexCode;
    const box = document.querySelectorAll("#box");

    

    // to remove event listener
    box.forEach((el) => {
        el.removeEventListener("mouseenter",randomColor)

    })
    box.forEach((el) => {
        el.removeEventListener("mouseenter",specificColor)

    })
    box.forEach((el) => {
        el.removeEventListener("mouseenter",() => {})

    })

    if(id === 0){
        box.forEach((el) => {
            el.addEventListener("mouseenter",randomColor);
        })
    }
    else if(id === 1){
        box.forEach((el) => {
            el.addEventListener("mouseenter",() => el.style.backgroundColor="#000000");
        })
        colorSelect.value = "#000000"; //to sync the colorslector

    }
    else if(id === 2){
        box.forEach((el) => {
            el.addEventListener("mouseenter",() => el.style.backgroundColor="#ffffff");
        })
        colorSelect.value = "#ffffff"; //to sync the colorslector
    }
    else if(id === 3){
        box.forEach((el) => {
            el.addEventListener("mouseenter",specificColor);
        })
    }
}


//make grid and remove it
function start(){
    const gridValue = input.value;

    remove();
    gridcreate(gridValue);
    painting(1);
    
}


random.addEventListener("click", () => painting(0));

paint.addEventListener("click", () => painting(1));

erase.addEventListener("click", () => painting(2));

colorSelect.addEventListener("input", () => painting(3));

button.addEventListener("click",start);



