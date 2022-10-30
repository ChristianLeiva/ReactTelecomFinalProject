import React from "react";
import ArticleForm, { ARTICLE_FORM_MODES } from "./ArticleForm";

export const NewArticle = () => {
  return (
    <ArticleForm mode={ARTICLE_FORM_MODES.creating}/>
  )
};
