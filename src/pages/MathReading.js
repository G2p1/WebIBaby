import './css/MathReading.css';
import { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import PathConstants from '../routes/pathConstants';

function MathReading() {

    return (
        <div className='mathreading-container'>
            <Outlet/>
        </div>
    );
}

export default MathReading;