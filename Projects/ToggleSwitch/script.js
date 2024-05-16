let btn = document.querySelector("button");
let body = document.querySelector("body");
let mode = "light";

btn.addEventListener("click", () =>{
    if(mode === "light"){
        mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        mode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(mode);
})