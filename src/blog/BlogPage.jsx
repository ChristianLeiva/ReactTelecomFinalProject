import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllArticleFromDb, getArticleByTitle } from '../../services/article.services';
import { Article } from './Article';
import { setArticles } from '../../store/articleSlice/articleSlice';
import { useForm } from './../../hooks/useForm';

export const BlogPage = () => {
  const dispatch = useDispatch()
  const {articles} = useSelector((state) => state.articles)

  const {formState, setFormState, onInputChange, onResetForm, search} = useForm({
    search : ""
  })

  useEffect(()=>{    
    getAllArticleFromDb().then((articles)=>{
      dispatch(setArticles(articles))
    })
    
  },[])

  const handleSearch = (e) => {
    e.preventDefault()
    getArticleByTitle(search).then(res => dispatch(setArticles(res)))
    onResetForm()
  }

  return (
    <>
      <div className="d-flex justify-content-end m-2">
        <form action="">
          <div className="row">
            <div className="col">
              <input 
                className="form-control"
                placeholder="Find Article"
                name='search'
                value={search}
                onChange={onInputChange}                
                />
            </div>
            <div className="col">
              <button className="btn btn-info" onClick={handleSearch}>Search</button>
            </div>
          </div>
        </form>
      </div>
      <div className="container mt-3">
        {articles.map((article) => (
          <Article article={article} key={article._id} />
        ))}
      </div>
    </>
  );
}
