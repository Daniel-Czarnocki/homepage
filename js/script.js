{
    const welcome = () => {
        console.log("console check");
    }
    /*
    const onChangeBorderClick = () => {
        foto.classList.toggle("foto__noborder");
        showHide.innerText = foto.classList.contains("foto__noborder") ? "Pokaż" : "Ukryj";
    };
    
    welcome();
    
    let button = document.querySelector(".js-button");
    let foto = document.querySelector(".js-foto");
    let showHide = document.querySelector(".js-showHide");
    
    button.addEventListener("click", onChangeBorderClick);
    */

    const onChangeBackgroundClick = () => {
        const background = document.querySelector(".js-background");
        const backgroundShowHide = document.querySelector(".js-backgroundShowHide");
        background.classList.toggle("background__noFoto");
        backgroundShowHide.innerText = background.classList.contains("background__noFoto") ? "Pokaż" : "Ukryj";
    };

    welcome();

    const init = () => {
    const backgroundButton = document.querySelector(".js-backgroundButton");
    backgroundButton.addEventListener("click", onChangeBackgroundClick);
    }

    init();
    
}


