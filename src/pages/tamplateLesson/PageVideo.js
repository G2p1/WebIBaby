import { useNavigate } from "react-router-dom";
import PathConstants from "../../routes/pathConstants";
import { Component, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './lesson.css';

function PageVideo({ lessQ, url, video, game, i, setI }) {
    const navigate = useNavigate();
    function nextFun() {

        console.log(url[i - 1]);

        if (i < lessQ.length) {

            console.log(i);
            console.log(lessQ[i]);
            console.log(lessQ);

            if (lessQ[i] !== 1) {

                setI();
                video(false);
                game(true);
            }
            else {
                setI();
            }
        } else {
            navigate(PathConstants.CONGRATULATION);
        }
    }

    return (
        <div className='video-container'>

                <iframe className="video-iframe" src={url[i-1]} title="YouTube video" allowFullScreen></iframe>
                <button className="lesson-button" onClick={() => nextFun()}>Next</button>

        </div>
    );
}

export default PageVideo;