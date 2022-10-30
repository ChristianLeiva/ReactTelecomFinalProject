import React from "react";
import { useSelector } from "react-redux";
import ArticleForm, { ARTICLE_FORM_MODES } from "./ArticleForm";

export const ArticleEditing = () => {

    const {article} = useSelector(state=>state.articles)

    return (
        <ArticleForm mode={ARTICLE_FORM_MODES.editing} article={article} />
    )
};