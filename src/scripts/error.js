const newSearch = ()=>{
    const button = document.querySelector(".error__button-search");

    button.addEventListener("click", ()=>{
        location.replace("../../");
    })
}

newSearch();