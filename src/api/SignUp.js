import axios from "./axios";
import React, { useState, useEffect } from 'react';

async function SignUp(usrname, passwd) {

    let token=null;

    const request = await axios({
        method: 'post',
        url: '/Authorization',
        params: {
            username: usrname,
            password: passwd
        }
    }).then(response => {
        token = response.data;
        
    })
        .catch(error => {
            alert(error.response.data.detail);
        });
    if(token==='user exist'){
        
        return null;
    }
    
    return token

}

export default SignUp;