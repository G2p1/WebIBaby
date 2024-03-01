import axios from "./axios";

async function GetLessonMath(id){
            const request = await axios.get('/Lessons/math/lesson/'+id,{headers: 'lesson-header'}).catch(error => {console.log(error)});
            
            return request.data;
}

export default GetLessonMath;