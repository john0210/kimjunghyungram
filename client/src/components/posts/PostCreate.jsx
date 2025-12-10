import './PostCreate.css';


export default function PostCreate() {


  return (
    <>
      <form className="post-create-container">
        <textarea className='post-create-textarea' placeholder='내용 작성'></textarea>
        <input type="file"/>
        <button type="submit" className="btn-big bg gray">파일 업로드</button>
      </form>
    </>
  )
}