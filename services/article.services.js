import { getAllArticles, getAnArticle } from '../store/articleSlice/articleSlice';

const getAllArticleFromDb =() =>{
    return async (dispatch) =>{
        const articles = await fetch('http://localhost:4000/articles',{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              }
        }).then(res => res.json())
        dispatch(getAllArticles(articles))

    }    
}

const getArticleByIdFomDb = (id) =>{
    return async (dispatch) =>{
        const article = await fetch('http://localhost:4000/articles/'+ id,{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              }
        }).then(res => res.json())
        dispatch(getAnArticle(article))
    }
}

export {
    getAllArticleFromDb,
    getArticleByIdFomDb
}