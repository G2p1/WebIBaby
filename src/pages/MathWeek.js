import './css/Math.css';
import './css/Week.css'
import { useState, useEffect } from 'react';
import GetMath from '../api/GetMath';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import PathConstants from '../routes/pathConstants';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

function MathWeek() {
    const navigate = useNavigate();

    const [lessons, setLessons] = useState([]);
    const [lessByWeek, setLessonByWeek] = useState([]);
    const [userData, setData] = useState();

    useEffect(() => {
        Aos.init({
            duration: 600,
            easing: 'ease',
            once: false,
        });
        async function fetchOnMount() {
            let less = await GetMath();
            setLessons(less);
            console.log(less);
        }
        fetchOnMount();
        setData(jwtDecode(Cookies.get('token')));
    }, []);

    useEffect(() => {
        console.log(lessons);
        let arraySplitByWeek = [];
        let arrayWeek = [];
        for (let i = 0; i < lessons.length; i++) {
            arrayWeek.push(lessons[i]);
            if (i != lessons.length - 1) {
                if (lessons[i].less_week != lessons[i + 1].less_week) {
                    arraySplitByWeek.push(arrayWeek);
                    arrayWeek = [];
                }
            }
            else {
                arraySplitByWeek.push(arrayWeek);
            }
        }
        setLessonByWeek(arraySplitByWeek);
        console.log(lessByWeek);
    }, [lessons]);

    function toLess(query, url, id) {
        if (userData) {
            if (userData.math_sub) {
                console.log(query);
                console.log(url);
                console.log(PathConstants.LESSON + '/' + id);
                navigate('/learning/math/lesson/' + id);
            }
            else {
                alert("need to subscribe");
            }
        }
        else {
            alert("need log in");
        }
    }

    return (
        <div className='week-container'>
            {Object.keys(lessByWeek).map((week, index) => {
                return (
                    <div key={index} data-aos='zoom-in'>
                        <div className='head-week'>Week {index + 1}</div>
                        <div className='week-grad-less'>
                            {lessByWeek[index].map(less => {
                                return (<div key={less.id} >
                                    <Link onClick={() => toLess(less.lessq, less.urlq, less.id)}>{less.lesson}</Link>
                                </div>)
                            })}
                        </div>
                    </div>)
            })}
        </div>
    );
}

export default MathWeek;