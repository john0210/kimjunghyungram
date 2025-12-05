import './Login.css';

export default function Login() {

  return (
    <>
      <form className="login-container">
        <input type="text" className='input-big-border'></input>
        <input type="password" className='input-big-border'/>
        <button type="submit" className="btn-big bg-gray">로그인</button>
        <div className="text-on-line">또는</div>
        <button type="button" className="btn-big bg-img-kakao"></button>
        <button type="button" className="btn-big bg-light">회원가입</button>
      </form>
    </>
  )
}