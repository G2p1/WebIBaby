import axios from "./axios";

async function GetMathReading(){
            const request = await axios.get('/Lessons',{headers: 'lesson-header',params:{math:'math'}}).catch(error => {console.log(error)});
            
            return request.data;
}

export default GetMathReading;