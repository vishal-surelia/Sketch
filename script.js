const grid = document.querySelector("#grid");


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



for(let i = 0; i<(32*32); i++){
    const temp = document.createElement("div");
    temp.classList.add("draw");
    grid.append(temp);
    temp.style.height = `${(513-64)/32}px`
    temp.style.width = `${(513-64)/32}px`
    temp.style.border = "1px red solid"
}

const box = document.querySelectorAll(".draw");


