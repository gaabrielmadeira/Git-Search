export const renderInfoUser = (user)=>{
    const sectionInfoUser = document.querySelector(".user__container");
    sectionInfoUser.innerHTML = "";

    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figCap = document.createElement("figcaption");
    const button = document.createElement("button");

    img.src = user.avatar_url
    img.alt = "foto perfil";

    figCap.innerText = user.name;

    button.className = "user__button";
    button.innerText = "Trocar de usuário";

    figure.append(img, figCap);
    sectionInfoUser.append(figure, button);
}

export const renderRepository = (arr)=>{
    const ulTag = document.querySelector(".repository__container");
    ulTag.innerHTML = "";

    arr.forEach(repository => {
        
        const liTag = document.createElement("li");
        let h2Tag = document.createElement("h2");
        let pTag = document.createElement("p");
        const button = document.createElement("a");
        
        liTag.className = "repository__list";

        h2Tag.classList.add("title-3", "repository__name");
        h2Tag.innerText = repository.name;
    
        pTag.classList.add("text-2", "repository__description");
        pTag.innerText = repository.description;
    
        button.className = "repository__button";
        button.innerText = "Repositório";
        button.href =  repository.svn_url;
        button.target = "_blank"

        if(!pTag.innerText){
            pTag.innerText = "Não há descrição"
        }
        
        liTag.append(h2Tag, pTag, button);
        ulTag.appendChild(liTag);
    });          
}