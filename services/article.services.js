import { deleteToApi, getFromAPi, postToApi, putToApi } from './connection';

const getAllArticleFromDb =() =>{
    return getFromAPi('/articles').then(res => res.json()) 
}

const getArticleByIdFomDb = (articleId) =>{
    return getFromAPi(`/articles/${articleId}`).then(res => res.json())
}

const saveArticle = (article)=>{
    return postToApi('/articles',article)
}

const deleteArticle = (articleId)=>{
    return deleteToApi(`/articles/${articleId}`);
}

const updateArticle = (articleId,body)=>{
    return putToApi(`/articles/${articleId}`, body);
}

const getArticleByCreator = () =>{
    return getFromAPi('/articles/articlesByCreator').then(res => res.json())
}

const addComment = (articleId,body) =>{
    return postToApi(`/articles/comment/${articleId}`, body ).then(res => res.json())
}

const addLike = (articleId) =>{
    return postToApi(`/articles/like/${articleId}`).then(res => res.json())
}

const getArticleByTitle = (title) =>{
    return getFromAPi(`/articles/findByTitle/${title}`).then(res => res.json())

}
export {
    getAllArticleFromDb,
    getArticleByIdFomDb,
    getArticleByCreator,
    getArticleByTitle,
    saveArticle,
    deleteArticle,
    updateArticle,
    addComment,
    addLike
}