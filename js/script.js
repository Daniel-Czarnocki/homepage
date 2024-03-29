console.log("console check");

let button = document.querySelector(".js-button");
let foto = document.querySelector(".js-foto");
let showHide = document.querySelector(".js-showHide");

button.addEventListener("click", () => {
    foto.classList.toggle("foto__noborder");

    showHide.innerText = foto.classList.contains("foto__noborder") ? "Pokaż" : "Ukryj";
    });


    
