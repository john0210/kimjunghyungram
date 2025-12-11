// import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PostComment from './comments/PostComment.jsx';
import './PostShow.css';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

export default function PostShow() {
  // const { show } = useSelector(state => state.postShow);
  const { state } = useLocation();
  const image = state?.image;

  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate('/posts', {replace: true});
  // })

  return (
    <>
      {
        (
          <div className="post-show-container">
            <div className="post-show-post-box bottom-line">
              <img className="post-show-post-img" src={image}></img>
              <div className="post-show-post-info-items">
                <div className="post-show-post-likes-item">
                  <p>1919</p>
                  <div className='icon-heart-fill'></div>
                </div>
              </div>
              <textarea className="post-show-post-constent"></textarea>
            </div>
            <PostComment />
          </div>
        )
      }
    </>
  )
}