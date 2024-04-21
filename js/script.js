{
    const welcome = () => {
        console.log("console check");
    }
    
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


