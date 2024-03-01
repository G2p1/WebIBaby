import React, {useState} from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useDeferredValue } from 'react';

export default function Layout() {
    const [isAuth, setAuth] = useState(false);

    function changeAuth(){
        setAuth(!isAuth);
    }

    return (
        <>
            <Header auth={isAuth} changeState = {changeAuth}/>
            <main className='layout-body'>
                <Outlet context={[isAuth, setAuth]} />
            </main>
            <Footer />
        </>
    );
}