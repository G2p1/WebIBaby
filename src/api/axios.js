import axios from "axios";

let headers = new Headers();
headers.append('Authorization', 'Basic YWRtaW46cGFzc3dvcmQ=');

const intance = axios.create({
    baseURL: process.env.REACT_APP_URL_SERVER,
    withCredentials: false,
    headers: headers,
    mode: "no-cors",
});

export default intance;