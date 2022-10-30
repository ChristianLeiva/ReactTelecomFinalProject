import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isUpdatingArticle: null,
    articles : [],
    article : {
        _id: "",
        title: "",
        subtitle: "",
        description: "",
        image: "",
        userID: "",
        createdAt: "",
        createdBy: ""
    }
}

export const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers:{
        setArticles : (state, {payload}) =>{
            state.articles = payload
            return state
        },
        setSelectedArticle: (state, {payload}) =>{
            state.article = {
                ...payload
            }
            return state
        }


    }
})

export const {setArticles, setSelectedArticle} = articleSlice.actions;