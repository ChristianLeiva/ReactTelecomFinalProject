import React from "react";
import { useForm } from "../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import { addComment } from "../../services/article.services";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { setSelectedArticle } from "../../store/articleSlice/articleSlice";

export const CommentForm = ({_articleId, children}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {isActive} = useSelector((state) => state.users.user)
  const { formState, onInputChange, comment, onResetForm } = useForm({
    comment: "",
  });

  const handleCancel = () =>{
    alert("cancel")
  }

  const handleSave = (e) =>{
    e.preventDefault()
    if(!isActive) return navigate('/login')

    addComment(_articleId, formState).then((res)=>{
        Swal.fire({
            title: `Comment added succefuly!`,
            text: '',
            icon: 'success',
            confirmButtonText: 'Cool'
            }).then(()=>dispatch(setSelectedArticle(res)))
    })
    onResetForm()

  }
  return (
    <>
      <div className="mb-3 border border-3 rounded p-2 bg-light">
        <form className="mb-5">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Add comment"
            name="comment"
            value={comment}
            onChange={onInputChange}
          />
          <div className="mt-3 d-flex justify-content-end">
            <button
              type="button"
              className="btn btn-danger me-2"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button className="btn btn-success" onClick={handleSave}>
              Save
            </button>
          </div>
        </form>

        <div>{children}</div>
      </div>
    </>
  );
};
