import './PostCommentCreate.css';

export default function PostCommentCreate() {
  
  async function handleCommentStore(e) {
    e.preventDefault();
    
  }
  return (
    <>
      <form className="post-comment-create-box" onSubmit={handleCommentStore}>
        <input type="text" className="post-comment-create-input-add" />
        <div className="post-comment-create-btn-add"></div>
      </form>
    </>
  )
}