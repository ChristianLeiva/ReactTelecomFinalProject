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
        getAllArticles : (state, {payload}) =>{
            state.articles = payload
            return state
        },
        getAnArticle: (state, {payload}) =>{
            state.article = {
                ...payload
            }
            return state
        }


    }
})

export const {getAllArticles, getAnArticle} = articleSlice.actions;