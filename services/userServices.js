const BASE_PATH = "http://localhost:4000"

const loginFromDb = (email, password) =>{
    return fetch(`${BASE_PATH}/users/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            email,
            password
          })
    }).then(res => res.json())

}

const createUserFromDb = (data) =>{
  return fetch(`${BASE_PATH}/users`, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
}).then(res => res.json())
}


export {
    loginFromDb,
    createUserFromDb
}