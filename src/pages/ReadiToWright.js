import './css/ReadiToWright.css';
import { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import PathConstants from '../routes/pathConstants';

function ReadiToWright() {

    return (
        <div className='rtw-container'>
            <Outlet/>
        </div>
    );
}

export default ReadiToWright;