import './css/Aboutus.css'

function Aboutus() {
    return (
        <div className="aboutus-container">
            <div className='aboutusHeader'>
                НАВЧАЄМСЬ РАЗОМ! МИ - ІНТЕЛЕКТ УКРАЇНИ!
            </div>
            <div className='workshedule'>
                <div><div style={{backgroundColor: '#E6AF2E', paddingTop:'10px'}}>ГРАФІК РОБОТИ:</div>
                Понеділок-п'ятниця<br/>
                з 9:00 до 17:00</div>
            </div>
            <div className='hotline'>
                <span style={{fontSize: '1.5vw'}}>ГАРЯЧА ЛІНІЯ(загальні та  методичні питання):</span>
                <div className='hotlinenumbers'>
                    <div>Початкова школа: 099-00-218-59</div> 
                    <div>Старша школа: 067-17-692-97</div>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;