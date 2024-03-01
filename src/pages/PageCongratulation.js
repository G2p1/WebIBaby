import './css/PageCongratulation.css';
import { useNavigate } from 'react-router-dom';
import PathConstants from '../routes/pathConstants';

function PageCongratulation() {
    const navigate = useNavigate();
    return (
        <div className='congrat-container'>

            <div className="congrat-text">You are realy kind! Lets continue our adventures</div>
            <button className="congrat-button" onClick={()=> navigate('/learning')}>Go to lessons</button>

        </div>
    );
}

export default PageCongratulation;