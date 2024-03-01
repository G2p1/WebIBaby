import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Home.css';
import rbaby from '../img/rbaby.png';
import Aos from 'aos';
import 'aos/dist/aos.css'
import pathConstant from '../routes/pathConstants';

function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        Aos.init({
            duration: 600,
            easing: 'ease',
            once: false,
        });
    });

    return (
        <div className='home-container'>
            <div className='preview'>
                <img src={rbaby} className='imagePreview'></img>
                <div className='textPreview'>
                    <span className='greating'>Hello Buddy!</span> <br />
                    Do you ready to interesting adventures and learning new thingth that you dont know yet?<br />
                    So lets start! Press this button, select your subject and lets play!

                </div>
                <button className='buttonPreview' onClick={()=>navigate(pathConstant.LEARNING)}>Lets Play!</button>
            </div>
            <div className='content'>
                <div className='contentLearning' data-aos='fade-right'>
                    <div className='leftMarker'></div>
                    <div className='contentText'>
                        This chapter about your lesson.<br />
                        There is you can easily watch lesson and play relative game<br/>
                        <button className='buttonContent' onClick={()=>navigate(pathConstant.LEARNING)}>Lets test it</button>
                    </div>
                </div>
                <div className='contentAboutus' data-aos='fade-left'>
                <div className='rightMarker'></div>
                    <div className='contentText'>
                        This chapter about us.<br />
                        We know that you need to know who we are.<br/>
                        <button className='buttonContent' onClick={()=>navigate(pathConstant.ABOUTUS)}>Know who we are</button>
                    </div>
                    
                </div>
                <div className='contentMembership' data-aos='fade-right'>
                <div className='leftMarker'></div>
                    <div className='contentText'>
                        If you want to take you adventures without any limits.<br />
                        We give you all access to lesson. You dont have limits.<br/>
                        <button className='buttonContent' onClick={()=>navigate(pathConstant.MEMBERSHIP)}>Subscribe now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;