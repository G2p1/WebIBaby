import './css/Lesson.css';
import { useState, useEffect } from 'react';
import PageGame from './tamplateLesson/PageGame';
import PageVideo from './tamplateLesson/PageVideo';
import { useParams } from 'react-router-dom';
import GetLesson from '../api/GetLessonMath';

function Lesson(props) {

    const [lesson, setLesson] = useState();
    const [lessonQueary, setQueary] = useState([]);
    const [index, setIndex] = useState(1);
    const [isVideo, setVideo] = useState(false);
    const [isGame, setGame] = useState(false);
    const [urlQueary, setUrl] = useState([]);
    const data = useParams();

    useEffect(() => {
        async function fetchOnMount(id){
            let less = await GetLesson(id);
            
            setLesson(less);
            setUrl(less[0].Url_query.split(';'));
            setQueary(Array.from(less[0].Less_query,Number));
            
            console.log(less);
        }

        fetchOnMount(data.lessonId);
        
    }, []);
    useEffect(()=>{
        
        if(lessonQueary[0] === 1){
            setVideo(true);
            setGame(false);
        }
        else{
            setVideo(false);
            setGame(true);
        }
        console.log(lessonQueary);
        console.log(urlQueary);
    },[lessonQueary])

    function incrementIndex(){
        setIndex(index+1);
    }

    return (
        <div className='lesson-container'>
            {isVideo && (
                <PageVideo lessQ={lessonQueary} url={urlQueary} video={setVideo} game={setGame} i={index} setI={incrementIndex}/>
            )}
            {isGame && (
                <PageGame lessQ={lessonQueary} url={urlQueary} video={setVideo} game={setGame} i={index} setI={incrementIndex}/>
            )}
        </div>
    );
}

export default Lesson;