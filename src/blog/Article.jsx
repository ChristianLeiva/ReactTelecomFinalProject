import React from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getArticleByIdFomDb } from "../../services/article.services";
import { setSelectedArticle } from "../../store/articleSlice/articleSlice";


export const Article = ({ article }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { _id,title, subtitle, description, image } = article

  const onClick = () =>{
    
    getArticleByIdFomDb(_id).then((article)=>{
      dispatch(setSelectedArticle(article))
      navigate(`/articleView/${_id}`,{
        replace: true
      })
    })

  }

  return (
    <>
      <div className="card">
        <div className="card-header">
          <img src={image} className="card-img-bottom" alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{subtitle}</p>
          <button           
           className="btn btn-primary"
           onClick={onClick}
          
           >
            view more...
          </button>
        </div>
      </div>
    </>
  );
};
