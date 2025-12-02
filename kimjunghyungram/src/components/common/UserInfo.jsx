import './UserInfo.css';

export default function UserInfo() {
	const navigate = useNavigate();
	const { user } = useSelector(state => state.auth);

	function redirectPosts() {
		navigate('/posts');
	}
	function redirectPostCreate() {
		navigate('/posts/create');
	}
	function redirectUserInfo() {
		navigate(`/users/${user?.id}`);
	}

	return (
		<>
			<div className="user-info-contianer bottom-line">
				<div className="profile profile-medium" style={{backgroundImage: `url("${user?.profile}")`}}></div>
				<div className="user-info-controll-box">
					<div className="user-info-stat-items">
						<p className='user-info-stat-name'>{user?.nick}</p>
					</div>
				</div>				
			</div>		
		</>
	)
}