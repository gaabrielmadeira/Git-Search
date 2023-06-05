import { searchRepository, searchUser } from "./requests.js";

const handleSearch = () => {
    const inputSearch = document.querySelector("#search");
    const button = document.querySelector(".search__button");
    const spinner = document.querySelector(".spinner");
    let count = 0;

    button.addEventListener("click", async (e) => {
        e.preventDefault()
        spinner.classList.remove("hidden");
        const userName = inputSearch.value

            if (userName === "") {
                count++;
            }
    
            if (count != 0) {
                count = 0;
                spinner.classList.add("hidden");
                return alert("Por favor preencha o campo de busca");
            }else{
                localStorage.setItem("userName", userName);
                await searchRepository(userName);
                await searchUser(userName);
                spinner.classList.add("hidden");
            }
       
    })
}

handleSearch();