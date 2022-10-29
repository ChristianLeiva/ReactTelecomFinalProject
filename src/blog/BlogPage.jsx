import React, { useEffect } from 'react'
import { Navbar } from './../components/Navbar';
import { NewArticle } from './NewArticle';
import { useSelector, useDispatch } from 'react-redux';
import { getAllArticleFromDb } from '../../services/article.services';
import { Article } from './Article';






export const BlogPage = () => {
  const dispatch = useDispatch()
  const {articles} = useSelector((state) => state.articles)

  useEffect(()=>{
    dispatch(getAllArticleFromDb())
  },[])


  return (
    <>
     <Navbar/>
     <div className='container mt-3'>
      {
        articles.map( (article) => <Article article={article} key={article._id}/>)
      }

     </div>
    </>
  )
}
