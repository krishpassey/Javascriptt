let modeBtn = document.querySelector("#mode");

let currMode = "light"; // dark 

modeBtn.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark";
    }
    else {
        currMode = "light";
    }
    console.log(currMode);
});