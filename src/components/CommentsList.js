import React from 'react';
import { AddCommentForm } from './AddCommentForm';

export const CommentsList = ({ comments, articleName, setArticleInfo }) => (
  <>
    <h3>Comments:</h3>
    {comments.map((comment) => (
      <div className='comment' key={comment.text}>
        <h4>{comment.postedBy}</h4>
        <p>{comment.text}</p>
      </div>
    ))}
    <AddCommentForm articleName={articleName} setArticleInfo={setArticleInfo} />
  </>
);
