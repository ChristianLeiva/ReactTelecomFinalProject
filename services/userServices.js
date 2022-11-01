import { deleteToApi, postToApi, putToApi } from "./connection"

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

const createUserFromDb = (body) =>{
return postToApi(`/users`, body)
}

const updateUser = (userId, body) =>{
  return putToApi(`/users/${userId}`, body)
} 

const deleteUser = (userId) =>{
  return deleteToApi(`/users/${userId}`)
}


export {
    loginFromDb,
    createUserFromDb,
    updateUser,
    deleteUser
}