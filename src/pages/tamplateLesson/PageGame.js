import { useNavigate } from "react-router-dom";
import PathConstants from "../../routes/pathConstants";

function PageGame({ lessQ, url, video, game, i, setI }) {
    const navigate = useNavigate();
    //{video(true); game(false)}

    function nextFun() {
        console.log(lessQ.length);
        if (i < lessQ.length) {

            console.log(i);
            console.log(lessQ[i]);
            console.log(lessQ);
            if (lessQ[i] === 1) {

                setI();
                video(true);
                game(false);
            }
            else {
                setI();
            }
        } else {
            navigate(PathConstants.CONGRATULATION);
        }
    }

    return (
        <div className="game-container">
            <div >
            <iframe className="game-iframe" src="http://fiend-game.s3-website-us-west-2.amazonaws.com/1">

            </iframe>
            </div>
            <button  className="lesson-button" onClick={() => nextFun()}>Next</button>
        </div>
    );
}

export default PageGame;