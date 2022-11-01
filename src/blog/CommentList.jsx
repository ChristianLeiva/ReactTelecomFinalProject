import React from "react";

const CommentList = ({ comments }) => {
  const { username, comment } = comments;
  return (
    <div className="card">
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p className="text-start">{comment}</p>
          <footer className="blockquote-footer text-start">
            <cite>{username}</cite>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default CommentList;
