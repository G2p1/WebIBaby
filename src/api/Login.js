import axios from "./axios";
import React, {useState, useEffect} from 'react';

async function LogIn(usrname, passwd){

    let token;

    const request = await axios({
        method:'get',
        url:'/Authorization',
        params:{
            username: usrname,
            password: passwd
        }
    });

    console.log(request.data);
    token = request.data;
    return token;
}

export default LogIn;