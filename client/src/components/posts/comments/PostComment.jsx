import './PostComment.css';
import PostCommentCreate from './PostCommentCreate.jsx';
import PostCommentItem from './PostCommentItem.jsx';

export default function PostComment() {
  return (
    <>
      <div className="post-comment-contianer">
        <p className='post-comment-title'>Comments</p>
        <PostCommentCreate />
        <div className="post-comment-item-container"></div>
        <PostCommentItem />
      </div>
    </>
  )
}