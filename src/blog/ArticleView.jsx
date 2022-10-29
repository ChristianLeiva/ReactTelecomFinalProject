import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from './../components/Navbar';
import moment from 'moment'

export const ArticleView = () => {
  const {isActive, _id} = useSelector( (state) => state.users.user)
  const {title, subtitle, description, image, createdAt, userID, createdBy} = useSelector( (state) => state.articles.article)
  let date = moment.utc(createdAt, "YYYY-MM-DD").format('DD-MM-YYYY h:mma')
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="card mb-3">
          <img
            src={image}
            class="card-img-top"
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
          {(isActive && _id === userID) ? (
            <div className="d-flex justify-content-end">
              <button className="btn btn-warning me-2">Edit</button>
              <button className="btn btn-danger me-2">Delete</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
