import './NewNotice.css';
import Frame from '../../../images/Frame.png';
import { BtnRed } from './BtnRed/BtnRed';
import { BtnWhite } from './BtnWhite/BtnWhite';
import { NotificationDisplayTime } from './NotificationDisplayTime/NotificationDisplayTime';
import 'rsuite/dist/rsuite-rtl.css';

const NewNotice = () => {

    return (
        <div className='wrapper'>
            <div className='title'>Редактирование и создание уведомления</div>
            <div className='wrapper-inner'>
                <div className='notificationTemplate'>
                    <div className='notificationTemplate_box'>
                        <h2>Выберите шаблон уведомления</h2>
                        <form>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="1" />
                                <label for='1'>Баннер</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="2" />
                                <label for='2'>Слайдер с несколькими большими изображениями</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="3" />
                                <label for='3'>С текстом и кнопкой</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="4" />
                                <label for='4'>С изображением слева, текстом и кнопкой справа</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="5" />
                                <label for='5'>С изображением справа, текстом и кнопкой слева</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="6" />
                                <label for='6'>С несколькими изображениями, текстом и кнопкой по центру</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="6" />
                                <label for='6'>С изображением, текстом и кнопкой по центру</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="8" />
                                <label for='8'>С несколькими изображениями, текстом, кнопкой</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="9" />
                                <label for='9'>С двумя изображениями, текстом и кнопкой</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="10" />
                                <label for='10'>С несколькими картинками, текстом и кнопкой</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="11" />
                                <label for='11'>С несколькими изображениями, текмтом и кнопкой</label>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="inner-box">
                    <div className='inner_content'>
                        <div className='btn_close'>×</div>
                        <div className='inner_holder'>
                            <div className='img_frame'>
                                <img src={Frame} alt="Frame" />
                            </div>
                            <div className='inner-box_text'>
                                <div className='inner-box_subtitle'>Заголовок Уведомления,  достаточно длинный для описания предложения</div>
                                <p>Являясь всего лишь частью общей картины, многие известные личности являются только методом политического участия и рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок. Современные технологии достигли такого уровня, что высокотехнологичная концепция.</p>

                                <div className='inner-box_buttons'>
                                    <BtnWhite />
                                    <BtnRed />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NotificationDisplayTime />
        </div>
    );
};

export { NewNotice };


