const loginFromDb = (email, password) =>{
    return fetch('http://localhost:4000/users/login', {
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
  return fetch('http://localhost:4000/users', {
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