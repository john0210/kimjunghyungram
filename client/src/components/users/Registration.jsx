import './Registration.css';

export default function Registration() {

  return (
    <>
      <form className="registration-container">
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