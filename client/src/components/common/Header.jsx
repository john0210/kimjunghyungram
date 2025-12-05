import './Header.css';
// import { useLocation, } from "react-router-dom";
// import UserInfo from './UserInfo.jsx';
// import { useSelector } from 'react-redux';

export default function Header() {

	// const location = useLocation();
	// const navigate = useNavigate();
	// const { isLoggedIn } = useSelector(state => state.auth)

	// const onlyTitleList = ['/login', '/registration'];
	// const onlyTitleFlg = onlyTitleList.some(path => path === location.pathname);
	
	// function redirectLogin() {
	// 	navigate('/login');
	// }

	// function redirectRegistration() {
	// 	navigate('/registration');
	// }	

	// function redirectPosts() {
	// 	navigate('/posts');
	// }	


	return (
		<>
			<div className="header-container">
				<div className='header-top'>
					<h1 className='header-top-title-only'>Kimjunghyungram</h1>
				 
						<div className='header-top-btn-box'>
								<button type="button" className='btn-small bg-dark'>로그아웃</button>
										<button type="button" className='btn-small bg-gray'>Sign in</button>
										<button type="button" className='btn-small bg-light'>Sign up</button>
						</div>
				</div>
			</div>
		</>
	)
}