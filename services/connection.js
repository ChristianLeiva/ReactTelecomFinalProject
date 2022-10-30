
const BASE_PATH = "http://localhost:4000"


const getTokenFromLocalStorage = ()=>{
    const user = localStorage.getItem('user');
    if(user){
        const parsedUser = JSON.parse(user);
        return parsedUser.token;
    }

    return '';
}

const fetchWithToken = ({url,method,body})=>{
    const options = {
        method: method,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: getTokenFromLocalStorage()
        }
    }

    if(method === "POST" || method === "PUT"){
        options.body = JSON.stringify(body);
    }
    
    return fetch(`${BASE_PATH}${url}`,options);
    
}
export const getFromAPi = (url)=>{
    return fetchWithToken({url, method:'GET'})
}

export const postToApi = (url,body)=>{
    return fetchWithToken({url, method:'POST',body})
}

export const putToApi = (url,body)=>{
    return fetchWithToken({url, method:'PUT',body})
}

export const deleteToApi = (url,body)=>{
    return fetchWithToken({url, method:'DELETE'})
}

