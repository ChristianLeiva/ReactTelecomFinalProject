import React from 'react'
import { UserData } from './UserData';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getArticleByCreator } from '../../services/article.services';
import { setArticlesByCreator } from '../../store/articleSlice/articleSlice';
import { Article } from './Article';


export const UserPage = () => {
    const {user} = useSelector((state) => state.users)
    const {byCreator} = useSelector((state) => state.articles)
    const dispatch = useDispatch()

    useEffect(() => {
        getArticleByCreator().then((articles) => {
            dispatch(setArticlesByCreator(articles))
        })
    }, [])
    
  return (
    <div className=''>
        <UserData user={user} />
        <div className="container-fluid mt-5 vh-100">
            {
                (byCreator.length > 0) ? (
                    byCreator.map( article => <Article article={article}/>)
                ):(
                    <p>Empty Data Base </p>
                )
            }
        </div>
    </div>
  )
}
