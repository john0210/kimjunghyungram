// import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import './PostIndex.css';
import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';
import img6 from '../../assets/6.jpg';
import img7 from '../../assets/7.jpg';
import img8 from '../../assets/8.jpg';
import img9 from '../../assets/9.jpg';
import img10 from '../../assets/10.jpg';
import img11 from '../../assets/11.jpg';
import img12 from '../../assets/12.jpg';

// import { useNavigate } from 'react-router-dom';

export default function PostIndex() {
  // 임시 리스트 데이터 (정적)
  const list = [
    { id : 1, image : img1},
    { id : 2, image : img2},
    { id : 3, image : img3},
    { id : 4, image : img4},
    { id : 5, image : img5},
    { id : 6, image : img6},
    { id : 7, image : img7},
    { id : 8, image : img8},
    { id : 9, image : img9},
    { id : 7, image : img10},
    { id : 8, image : img11},
    { id : 9, image : img12},
 ];

  // const dispatch = useDispatch();
  const isLasted = false;
  useEffect(() => {
    
  }, []);

  return (
    <>
      <div className="post-index-container">
        <div className="post-index-card-box">
          {
            list && list.map(item => {
              return (
                <div 
                className="post-index-card" 
                 style={{backgroundImage: `url("${item.image}")`}}
                 key={item.id}
                ></div>
              )
            })
          }
        </div>
        {
          !isLasted && <button type="button" className='btn-full-width'>다음 페이지를 보여주세요</button>
        }
      </div>
    </>
  )
}