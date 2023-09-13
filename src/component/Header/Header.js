import Logo from '../../images/Logo.png';
import './Header.css'

const Header = () => {
    return (

        <div className='header'>
            <div className='header-box'>

                <div className="header-left">
                    <img src={Logo} style={{ width: "65px", height: '65px' }} alt="Logo" />
                    <div className='header-user'>Бессонова Ольга</div>
                </div>

                <div className="header-right">
                    <div className='header-right_rov'>
                        <div className='header-right_info'>Сервис</div>
                        <div>Логины, пароли</div>
                    </div>

                    <div className='header-right_rov'>
                        <div className='header-right_info'>Тариф</div>
                        <div>Бесплатно</div>
                    </div>

                    <div className='header-right_rov'>
                        <div className='header-right_info'>Стоймость</div>
                        <div>0.00руб.</div>
                    </div>

                    <div className='header-right_rov'>
                        <div className='header-right_info'>Баланс в системе</div>
                        <div>4 992.50 руб.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { Header };