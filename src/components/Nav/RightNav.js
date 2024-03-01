import React, { useState } from "react";
import { Link } from 'react-router-dom';
import PathConstants from '../../routes/pathConstants';
import search from '../../img/icons8-search-16.png';
import styled from "styled-components";
import user from '../../img/user-black.png';
import  ModalAuth  from '../Modal/ModalAuth';
import '../Modal/ModalAuth.css';
const Side = styled.div`
@media (max-width: 1000px){
    transform:${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    display:flex;
}
`;

const RightNav = ({ open ,  auth , changeAuth}) => {
    const [isAuthOpen, setAuth] = useState(false);



    return (
        <>
            <span className='navLogo'><Link to={PathConstants.HOME}> IBaby </Link></span>
            <Side open={open} className="sideBar" >
                <a className='navLearning'> <Link to={PathConstants.LEARNING}>Learning</Link></a>
                <div className='navSearchbar'>
                    <img src={search}></img>
                    <input className='searchplace'
                        type="text"
                        placeholder="Search here" />
                </div>
                <a className='navAvoutus'><Link className='headlink' to={PathConstants.ABOUTUS}>About us</Link></a>
                <a className='navMembership'><Link className='headlink' to={PathConstants.MEMBERSHIP}>Membership</Link></a>
                {!auth && (
                    <>
                        <a className="navAuth" onClick={() => setAuth(true)}><Link><img src={user}></img></Link></a>
                        <ModalAuth
                            isOpen={isAuthOpen}
                            onClose={() => setAuth(false)}
                            change={changeAuth}
                        />
                    </>
                )}
                {auth && (
                    <>
                        <a className="navAuth"><Link to={PathConstants.PROFILE}><img src={user}></img></Link></a> 
                    </>
                )}
            </Side>
        </>
    );
}

export default RightNav;