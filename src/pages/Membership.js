import './css/Membership.css';
import freesub from '../img/buyimg/free.png';
import monthsub from '../img/buyimg/mounth.png';
import yearsub from '../img/buyimg/year.png';
import { useOutletContext } from 'react-router-dom';

function Membership() {
    const [isAuth, setAuth] = useOutletContext();

    

    return (
        <div className="membership-container">

            <div className='freemembership'>
                <div className='freeheader'>Можна використати <span style={{ fontWeight: 'bold' }}>1 раз</span></div>
                <img src={freesub} style={{ height: '140px' }}></img>
                <div>
                    <span style={{ fontWeight: 'bold', fontSize: '33px' }}>Безкоштовно</span><br />
                    <span style={{ display: 'block', marginTop: '20px' }}>Навіть твоя бабця оформила</span>
                </div>
                {isAuth && (
                    <a href='https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXkiLCJhbW91bnQiOiIwIiwiY3VycmVuY3kiOiJVQUgiLCJkZXNjcmlwdGlvbiI6ItCc0ZbQuSDRgtC+0LLQsNGAIiwicHVibGljX2tleSI6InNhbmRib3hfaTgzODIwNTg5NzAwIiwibGFuZ3VhZ2UiOiJ1ayJ9&signature=D87bZsyJufBCKOjXaELIsryxdt8=' className='buttonsub' target='_blank'>Підписатись зараз</a>
                )}
                {!isAuth && (
                    <a onClick={() => { alert('u need log in to subscribe') }} className='buttonsub' target='_blank'>Підписатись зараз</a>

                )

                }
                <ul className='ulsub'>
                    <li>Доступ до платного контенту</li>
                    <li>Збільшена кількість спроб</li>
                    <li>Перегляд результатів</li>
                </ul>
            </div>
            <div className='monthmbership'>
                <div className='monthheader' style={{ fontWeight: 'bold' }}>Рекомендується</div>
                <img src={monthsub} style={{ height: '120px' }}></img>
                <div>
                    <span style={{ fontSize: '33px' }}>Найкращий <br />вибір</span><br />
                    <span style={{ display: 'block', fontWeight: 'bold', fontSize: '27px', marginTop: '20px' }}>69.69 грн./міс.</span><br />
                    <span > Все минуче  інайкращий вибір теж кінчиться</span>
                </div>
                {isAuth &&
                    <a href='https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJzdWJzY3JpYmUiLCJhbW91bnQiOiI2OS42OSIsImN1cnJlbmN5IjoiVUFIIiwiZGVzY3JpcHRpb24iOiLQnNGW0Lkg0YLQvtCy0LDRgCIsInB1YmxpY19rZXkiOiJzYW5kYm94X2k4MzgyMDU4OTcwMCIsImxhbmd1YWdlIjoidWsiLCJzdWJzY3JpYmUiOjEsInN1YnNjcmliZV9kYXRlX3N0YXJ0Ijoibm93Iiwic3Vic2NyaWJlX3BlcmlvZGljaXR5IjoibW9udGgifQ==&signature=6tvT0JnPMRfIJ3XB/Ad5XyRDadw=' className='buttonmonth' target='_blank'>Підписатись зараз</a>
                }
                {
                    !isAuth && (
                        <a onClick={() => { alert('u need log in to subscribe') }} className='buttonmonth' target='_blank'>Підписатись зараз</a>

                    )
                }
                <ul className='ulsub'>
                    <li>Доступ до преміум контенту</li>
                    <li>Необмежена кількість спроб</li>
                    <li>Перегляд результатів</li>
                    <li>Консультації з викладачем</li>
                    <li>Унікальний експіріанс</li>
                </ul>
            </div>
            <div className='yearmbership'>
                <img src={yearsub} style={{ height: '120px' }}></img>
                <div>
                    <span style={{ fontSize: '33px' }}>Економіст</span><br />
                    <span style={{ display: 'block', fontWeight: 'bold', fontSize: '27px', marginTop: '20px' }}> 802.88 грн./міс.</span><br />
                    <span>Всесвіт у твоїх руках на 1 рік</span>
                </div>
                {isAuth && (
                    <a href='https://www.liqpay.ua/api/3/checkout?data=eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJzdWJzY3JpYmUiLCJhbW91bnQiOiI4MDIuODgiLCJjdXJyZW5jeSI6IlVBSCIsImRlc2NyaXB0aW9uIjoi0JzRltC5INGC0L7QstCw0YAiLCJwdWJsaWNfa2V5Ijoic2FuZGJveF9pODM4MjA1ODk3MDAiLCJsYW5ndWFnZSI6InVrIiwic3Vic2NyaWJlIjoxLCJzdWJzY3JpYmVfZGF0ZV9zdGFydCI6Im5vdyIsInN1YnNjcmliZV9wZXJpb2RpY2l0eSI6InllYXIifQ==&signature=QuW5jWROUAQ6+6PFzG7Ffvvagc4=' className='buttonsub' target='_blank'>Підписатись зараз</a>
                )}
                {!isAuth && (
                    <a onClick={() => { alert('u need log in to subscribe') }} className='buttonsub' target='_blank'>Підписатись зараз</a>

                )}
                <ul className='ulsub'>
                    <li>Все що й в найкращому виборі</li>
                    <li>Зменшена вартість в загальній сумі</li>
                </ul>
            </div>
            
        </div>

    );
}

export default Membership;