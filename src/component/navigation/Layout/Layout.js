import './Layout.css';
import Message from '../../../images/Message.png'
import Edit from '../../../images/Edit.png'
import Archive from '../../../images/Archive.png'
import MessageEdit from '../../../images/Message-edit.png';
import { Link, Outlet } from "react-router-dom";
import { BtnGoBack } from '../../BtnGoBack/BtnGoBack';
import { Header } from '../../Header/Header';
import { TechnicalSupport } from '../../BtnTechnicalSupport/BtnTechnicalSupport';
import { BtnToSuggestAnIdea } from '../../BtnToSuggestAnIdea/BtnToSuggestAnIdea';

const Layout = () => {
    return (
        <div className='container'>
            <div className='navigate'>
                <Header />
                <BtnGoBack />
                <div className='nav'        >
                    <div className='nav-list'>
                        <div className='nav__item'>
                            <div className='nav__link' >
                                <img src={Message} alt="Message" />
                                <Link to='/'>Активные уведомления</Link>
                            </div>
                            <div className=' nav__info'>10</div>
                        </div>

                        <div className='nav__item'>
                            <div className='nav__link'>
                                <img src={MessageEdit} alt="Edit" />
                                <Link to='/drafts' >Черновики</Link>
                            </div>
                            <div className='nav__info'>10</div>
                        </div >

                        <div className='nav__item'>
                            <div className='nav__link'>
                                <img src={Archive} alt="Archive" />
                                <Link to='/archive' >Архив</Link>
                            </div>
                            <div className='nav__info'>10</div>
                        </div>

                        <div className='nav__item'>
                            <div className='nav__link'>
                                <img src={Edit} alt="Archive" />
                                <Link to='/newNotice' >Создать новое уведомление</Link>
                            </div>
                        </div>
                    </div>
                </div >
                <TechnicalSupport />
                <div className='btn_toSuggestAnIdea'>
                    <BtnToSuggestAnIdea />
                </div>
            </div>
            <div className='outlet'>
                <Outlet />
            </div>
        </div>
    );
};

export { Layout };