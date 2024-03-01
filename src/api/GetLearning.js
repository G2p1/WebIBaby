import axios from "./axios";

async function GetLearning(){
            const request = await axios.get('/YearGradations',{headers: 'learning-header'}).catch(error => {console.log(error)});
            console.log(request);
            return request.data;
}

export default GetLearning;