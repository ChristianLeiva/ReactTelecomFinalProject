import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { onLogin } from '../store/userSlice/userSlice';
import { BlogRouter } from './router/BlogRouter';

export const BlogApp = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    const localStorageUser = localStorage.getItem('user');
    if(localStorageUser){
      dispatch(onLogin(JSON.parse(localStorageUser)))
    }
  },[])

  return (
    <div className=''>  
        <BlogRouter/>
    </div>
  )
}
