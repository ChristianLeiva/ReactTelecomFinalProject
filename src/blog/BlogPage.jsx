import React, { useEffect } from 'react'
import { Navbar } from './../components/Navbar';
import { NewArticle } from './NewArticle';
import { useSelector, useDispatch } from 'react-redux';
import { getAllArticleFromDb } from '../../services/article.services';
import { Article } from './Article';
import { setArticles } from '../../store/articleSlice/articleSlice';






export const BlogPage = () => {
  const dispatch = useDispatch()
  const {articles} = useSelector((state) => state.articles)

  useEffect(()=>{
    
    getAllArticleFromDb().then((articles)=>{
      dispatch(setArticles(articles))
    })
    
  },[])


  return (
    <>
     <div className='container mt-3'>
      {
        articles.map( (article) => <Article article={article} key={article._id}/>)
      }

     </div>
    </>
  )
}
