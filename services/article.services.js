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

export {
    getAllArticleFromDb,
    getArticleByIdFomDb,
    saveArticle,
    deleteArticle,
    updateArticle
}