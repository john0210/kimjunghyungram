import './Registration.css';
import { useNavigate } from 'react-router-dom';
export default function Registration() {
  const navigate = useNavigate();
  

  async function handleStore(e) {
    // 아래 폼 태그 자기자신으로 이동을 막아주는 처리
    e.preventDefault();
    
    return navigate(`/login`, {replace: true});
  }
  return (
    <>
      <form className="registration-container" onSubmit={handleStore}>
        <input type="text" className='input-big-border' placeholder='email' />
        <input type="password" className='input-big-border' placeholder='password' />
        <input type="password" className='input-big-border' placeholder='password check' />
        <input type="text" className='input-big-border' placeholder='nick' />
        <input type="file" accept="image/*" />
        <button type="submit" className="btn-big bg gray">Sign up</button>
      </form>
    </>
  )
}