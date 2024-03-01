
import { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import PathConstants from '../routes/pathConstants';

function Math() {

    return (
        <div className='math-container'>
            <Outlet/>
        </div>
    );
}

export default Math;