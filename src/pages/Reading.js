import './css/Reading.css';
import { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import PathConstants from '../routes/pathConstants';

function Reading() {

    return (
        <div className='reading-container'>
            <Outlet/>
        </div>
    );
}

export default Reading;