import './css/Learning.css';
import GetLearning from '../api/GetLearning';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import PathConstants from '../routes/pathConstants';
import SubjectMenu from '../components/SubjectMenu';

function Learning() {


    return (
        <div className="learning-container">
            <SubjectMenu/>
            
            <Outlet/>
        </div>
    );
}

export default Learning;