import { useOutletContext, useNavigate } from 'react-router-dom';
import PathConstants from '../routes/pathConstants';
import './css/Profile.css'
import Cookies from 'js-cookie';
import profIcon from '../img/babby.png';

function Profile() {
    const navigate = useNavigate();
    const [isAuth, setAuth] = useOutletContext(true);

    function logOut() {
        Cookies.remove('token');
        setAuth(false);
        navigate(PathConstants.HOME);
    }

    return (
        <div className='profile-container'>
            <div className='profile-img'><img src={profIcon}></img></div>
            <div className='profile-info'>
                <div className='profile-username'>username</div>
                <div className='profile-functional'>
                    <div>
                    <button style={{ width: '200px', height: '30px' }} >Done</button></div>
                    <div>
                    <button style={{ width: '200px', height: '30px' }} >Subscribe</button></div>
                    <div>
                    <button style={{ width: '200px', height: '30px' }} onClick={() => logOut()}>Log Out</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;