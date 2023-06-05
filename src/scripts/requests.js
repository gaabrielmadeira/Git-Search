const baseUrl = "https://api.github.com/users/"

export const searchUser = async (user) => {
    const gitUser = await fetch(`${baseUrl}${user}`, {
      method: "GET"
    })
      .then(async (resp) => {
        if (resp.ok) {
          const response = await resp.json();
          localStorage.setItem("user", JSON.stringify(response));
          location.replace("./src/pages/profile.html");
          return response;
        } else {
          location.replace("./src/pages/error.html");
          throw new Error("URL inválido");
        }
      })
      .catch((error) => {
        console.log(error);
      });
      
    return gitUser;
  };
  


export const searchRepository = async (user)=>{
    const userRepository = await fetch(`${baseUrl}${user}/repos`, {
        method: "GET"
    })
    .then(async (res)=>{
        if(res.ok){
            const response = await res.json()
            localStorage.setItem("repository", JSON.stringify(response));
            return response 
        }else{
            location.replace("./src/pages/error.html");
            throw new Error("URL inválido")
        }
       
    })
    .catch((error)=>{
        console.log(error);
    })

    return userRepository;
}

