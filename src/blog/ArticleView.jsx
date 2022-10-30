import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from './../components/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment'
import Swal from 'sweetalert2'
import { deleteArticle, getArticleByIdFomDb } from '../../services/article.services';
import CommentList from './CommentList';
import { setSelectedArticle } from '../../store/articleSlice/articleSlice';
import LoadingSpinner from '../components/LoadingSpinner';

export const ArticleView = () => {
  const navigate = useNavigate();
  const {isActive, _id:_userId} = useSelector( (state) => state.users.user)
  const {title, subtitle, description, image, createdAt, userID, createdBy, _id: _articleId} = useSelector( (state) => state.articles.article)
  let date = moment.utc(createdAt, "YYYY-MM-DD").format('DD-MM-YYYY h:mma')
  let {id} = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    getArticleByIdFomDb(id).then((article)=>{
      dispatch(setSelectedArticle(article))
    })
  }, []);

  const handleDelete = ()=>{
    Swal.fire({
      title: 'Delete Article',
      text: 'Are you sure you want to delete the article?',
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
    }).then(async (result)=>{
      
      if (result.isConfirmed) {
        await deleteArticle(_articleId)
        Swal.fire('Deleted!', '', 'success').then(()=>{
          navigate('/home')
        })
      } 
    })

  }

  const handleEdit = ()=>{
    navigate('/articleEditing')
  }

  return (
    <LoadingSpinner isLoading={!_articleId}>
    <>
      
        <div className="container">
          <div className="card mb-3">
            <img
              src={image}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body m-2">
              <h2 className="card-title m-2">{title}</h2>
              <h4 className="card-title m-2">{subtitle}</h4>
              <p className="card-text m-2">{description}</p>
              <p className="card-text d-flex justify-content-between">
                <small className="text-muted">{date}</small>
                <small className="text-muted">posted by: {createdBy}</small>
              </p>
            </div>
            {(isActive && _userId === userID) ? (
              <div className="d-flex justify-content-end">
                <button className="btn btn-warning me-2" onClick={handleEdit}>Edit</button>
                <button className="btn btn-danger me-2" onClick={handleDelete}>Delete</button>
              </div>
            ) : (
              ""
            )}
          </div>
          <CommentList />
        </div>
      
    </>
    </LoadingSpinner>
  );
}
