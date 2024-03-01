import { Link } from "react-router-dom";
import './css/SubjectMenu.css'

export default function SubjectMenu() {

    return (
        <div className='container-subject'>
                <div>
                    <Link to='/learning/math'>Math</Link>
                </div>
                <div>
                    <a href='/learning/mathreading'>Math + reading</a>
                </div>
                <div>
                    <a href='/learning/reading'>Reading</a>
                </div>
                <div>
                    <a href='/learning/readitowrtight'>Ready to writing</a>
                </div>
            </div>
    );
}