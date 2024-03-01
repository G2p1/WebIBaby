import React from 'react';
import { Link } from 'react-router-dom';
import search from '../img/icons8-search-16.png';
import './css/Header.css';
import './css/AdaptiveHeader.css';
import RightNav from './Nav/RightNav';
import Burger from './Nav/Burger';

export default function Header({auth, changeState}) {


    return (
        <div className='layout-header'>
            <nav>

                
                <Burger isAuth={auth} change={changeState}/>   
            </nav>
        </div>
    );
}