import {renderInfoUser, renderRepository } from "./render.js";

const showUser = async ()=>{
    const gitUser = JSON.parse(localStorage.getItem("user"))

    renderInfoUser(gitUser);
}

const showRepository = async ()=>{
    const repUser = JSON.parse(localStorage.getItem("repository"));

    renderRepository(repUser);
}

const changeUser = ()=>{
    const button = document.querySelector(".user__button");

    button.addEventListener("click", ()=>{
        location.replace("../../");
    })
}

const emptySectionRepository = () => {
    const repUser = JSON.parse(localStorage.getItem("repository"));
    const emptySection = document.querySelector(".empty__repos");
  
    if (repUser.length === 0) {
      emptySection.style.display = "flex";
    } else {
      emptySection.style.display = "none";
    }
  };
  

showUser();
showRepository();
changeUser();
emptySectionRepository()


