import React from "react";
import { useForm } from "../../hooks/useForm";
import { saveArticle, updateArticle } from "../../services/article.services";
import { useNavigate } from 'react-router-dom';
import { Navbar } from "./../components/Navbar";
import Swal from 'sweetalert2'

export const ARTICLE_FORM_MODES = {
    creating : 'creating',
    editing : 'editing'
}

const ArticleForm = ({mode = ARTICLE_FORM_MODES.creating, article}) => {
    const navigate = useNavigate();
    const {formState, onResetForm, setFormState, onInputChange, title, subtitle, description, image} = useForm({
      image: article ? article.image : "",
      title: article ? article.title : "",
      subtitle: article ? article.subtitle : "",
      description: article ? article.description : ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (mode === ARTICLE_FORM_MODES.creating) {
            saveArticle(formState).then(() => {
                showSuccessMessageAndRedirect();
            })
        }

        if (mode === ARTICLE_FORM_MODES.editing) {
            updateArticle(article._id, formState).then(() => {
                showSuccessMessageAndRedirect();
            })
        }
    };

    const showSuccessMessageAndRedirect = ()=>{
        const message = mode === ARTICLE_FORM_MODES.creating ? 'created' : 'updated'
        Swal.fire({
            title: `Article ${message} succefuly!`,
            text: '',
            icon: 'success',
            confirmButtonText: 'Cool'
          }).then(()=>{
            navigate("/home", {
              replace: false,
            });
          })
    }
  
    const onCancel = ( ) =>{
        if(mode === ARTICLE_FORM_MODES.creating){
            navigate("/home")
        }

        if(mode === ARTICLE_FORM_MODES.editing){
            navigate(`/articleView/${article._id}`)
        }
        
    }
  
    return (
      <>
        
        <div className="container mt-5">
        <h2 className="fs-3 text-center">{ mode === ARTICLE_FORM_MODES.creating ? 'New article' : 'Edit article'}</h2>
          <div className="mb-3 border border-3 rounded m-3">
            <div className="p-2">
              <form action="" className="" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="Title"
                      name="title"
                      value={title}
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control mb-2"
                      placeholder="Subtitle"
                      name="subtitle"
                      value={subtitle}
                      onChange={onInputChange}
                    />
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Image"
                  name="image"
                  value={image}
                  onChange={onInputChange}
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  name="description"
                  value={description}
                  onChange={onInputChange}
                />
                <div className="mt-3 d-flex justify-content-end">
                  <button type="button" className="btn btn-danger me-2" onClick={onCancel}>Cancel</button>
                  <button className="btn btn-success">{ mode === ARTICLE_FORM_MODES.creating ? 'Save' : 'Update' }</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>)

}

export default ArticleForm