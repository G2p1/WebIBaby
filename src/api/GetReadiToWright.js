import axios from "./axios";

async function GetReadiToWright(){
            const request = await axios.get('/Lessons',{headers: 'lesson-header',params:{math:'math'}}).catch(error => {console.log(error)});
            
            return request.data;
}

export default GetReadiToWright;