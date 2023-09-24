
import { CalendarComp } from './CalendarComp/CalendarComp';
// import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import './NotificationDisplayTime.css';
import 'rsuite/dist/rsuite-rtl.css';
import Clock from './../../../../images/Clock.png'

const NotificationDisplayTime = () => {
    return (
        <div className='section'>
            <h2>Выберите время показа уведомления</h2>

            <div className='section-box'>

                <div className='date-block'>
                    <div className='date-block_calendar'>
                        <p>Дата начала показа</p>
                        <div className='calendarComp'>
                            <CalendarComp />
                        </div>
                    </div>

                    <div className='date-block_clock'>
                        <div>Время начала показа</div>
                        <div className='row'>
                            <p>10:45</p>
                            <img src={Clock} Clock alt="Clock" />
                        </div>
                    </div>
                </div>


                <div className='NotificationDisplayTime_box'>
                    <form>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="11" />
                            <label for='11'>Показывать 365 дней с даты начала показа</label>
                        </div>

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="21" />
                            <label for='21'>Показывать 30 дней с даты начала показа</label>
                        </div>

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="31" />
                            <label for='31'>Показывать до даты окончания показа</label>
                        </div>

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="41" />
                            <label for='41'>Не показывать по выходным</label>
                        </div>

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="51" />
                            <label for='51'>Показывать только по определенным датам, <span><a> &nbsp; выбрать дни недели</a></span></label>
                        </div>

                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="61" />
                            <label for='61'>Показывать только в течений дня, не показывать ночью, <span><a> &nbsp; указать промежуток времени</a></span></label>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}


export { NotificationDisplayTime };