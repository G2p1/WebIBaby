import './css/Learning.css';
import GetLearning from '../api/GetLearning';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import PathConstants from '../routes/pathConstants';
import SubjectMenu from '../components/SubjectMenu';

function YearGradation(){
    const [year, setYear] = useState([]);

    useEffect(() => {
        async function fetchOnMount() {
            let yeargrad = await GetLearning();
            setYear(yeargrad);
            console.log(yeargrad);
        }
        fetchOnMount();
    }, []);
    return(
        <div className='year-container'>
            {year.map(gradation => 
                <div key={gradation.id} data-aos='zoom-in'>
                    <div className='head-year'>{gradation.year_name}</div>
                    <div className='year-grad-less'>
                    <a><Link to={PathConstants.MATH}>Math</Link></a><br />
                    <a><Link to={PathConstants.MATHREADING}>Math + reading</Link></a><br />
                    <a><Link to={PathConstants.READING}>Reading</Link></a><br />
                    <a><Link to={PathConstants.READYTOWRIGHT}>Ready to writing</Link></a><br />
                </div>
                </div>
            )}
            </div>
    );
}
export default YearGradation;