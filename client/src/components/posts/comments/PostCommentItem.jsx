import './PostCommentItem.css';
// import PostCommentCreate from './PostCommentCreate.jsx';

export default function PostCommentItem() {

  return (
    <>
      <div className='post-comment-item-box'>
        <div className="profile profile-small"></div>
        <div className='post-comment-item-comment'>
          <div className='post-comment-item-comment-info'>
            <p className='post-comment-item-item-nick'></p>
            <p className='post-comment-item-item-content'></p>
          </div>
          <div className='post-comment-item-reply-box'></div>
        </div>
      </div>
    </>
  )
}