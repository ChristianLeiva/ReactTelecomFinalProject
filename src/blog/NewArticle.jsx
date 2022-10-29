import React from "react";
import { useForm } from "../../hooks/useForm";
import { Navbar } from "./../components/Navbar";

export const NewArticle = () => {
  const {formState, onResetForm, setFormState, onInputChange, title, subtitle, description, image} = useForm({
    image: "",
    title: "",
    subtitle: "",
    description: ""
  })
  const isOnSubmit = (e) => {
    e.preventDefault();
  };

  const onCancel = ( ) =>{

  }
  return (
    <>
      <Navbar />
      <div className="container mt-5">
      <h2 className="fs-3 text-center">New article</h2>
        <div className="mb-3 border border-3 rounded m-3">
          <div className="p-2">
            <form action="" className="" onSubmit={isOnSubmit}>
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
                <button className="btn btn-danger me-2" onClick={onCancel}>Cancel</button>
                <button className="btn btn-success">Acept</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
