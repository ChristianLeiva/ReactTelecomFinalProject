import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment'
import Swal from 'sweetalert2'
import { deleteArticle, getArticleByIdFomDb, addLike } from '../../services/article.services';
import CommentList from './CommentList';
import { setSelectedArticle } from '../../store/articleSlice/articleSlice';
import LoadingSpinner from '../components/LoadingSpinner';
import { CommentForm } from './CommentForm';

export const ArticleView = () => {
  const navigate = useNavigate();
  const {isActive, _id:_userId, username} = useSelector( (state) => state.users.user)
  const {title, subtitle, description, image, createdAt, userID, createdBy, _id: _articleId, comments, likes} = useSelector( (state) => state.articles.article)
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

  const handleLikeClick = () =>{
    addLike(_articleId).then(res => dispatch(setSelectedArticle(res)))
  }

  return (
    <LoadingSpinner isLoading={!_articleId}>
    <div className='vh-100'>      
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
              <div className="d-flex justify-content-end mb-2">
                <button className="btn btn-warning me-2" onClick={handleEdit}><i className="bi bi-pencil"></i></button>
                <button className="btn btn-danger me-2"  onClick={handleDelete}><i className="bi bi-trash3"></i></button>
              </div>
            ) : (
              
              ""
            )}
            <div className='d-flex justify-content-start mb-2'>
                  <button className='btn' onClick={handleLikeClick}>
                  {
                    likes && likes.some((like) => like.username === username) ? 
                    <i className="bi bi-hand-thumbs-up-fill">{likes.length}</i> :
                    <i className="bi bi-hand-thumbs-up">{likes && likes.length}</i>

                  }
                  {' '}
                  
                  </button>
            </div>

          </div>
          <CommentForm _articleId={_articleId}/>
          {
            (comments)&&comments.map((comment) => <CommentList key={comment._id} comments={comment}/>)
          }
        </div>
      
    </div>
    </LoadingSpinner>
  );
}
