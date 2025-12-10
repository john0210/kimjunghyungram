import './PostShow.css';
// import { useSelector } from 'react-redux';

export default function PostShow() {
  // const { show } = useSelector(state => state.postShow);
  return (
    <>
      {
        (
          <div className="post-show-container">
            <div className="post-show-post-box bottom-line">
              <img className="post-show-post-img"></img>
              <div className="post-show-post-info-items">
                <div className="post-show-post-likes-item">
                  <p>1919</p>
                  <div className='icon-heart-fill'></div>
                </div>
              </div>
              <textarea className="post-show-post-constent"></textarea>
            </div>
          </div>
        )
      }
    </>
  )
}