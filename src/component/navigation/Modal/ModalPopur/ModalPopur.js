import "./ModalPopur.css";
import Icon from '../../../../images/Icon.png'

function ModalPopur({ setOpenModal }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        ×
                    </button>
                </div>
                <div className="title">
                    <h1>Предложить идею</h1>
                </div>
                <div className="body">
                    <p>Если у вас есть идеи по улучшению удоства нашего сервиса, мы всегда рады прислушать к ним, заполните форму и отправьте нам</p>
                </div>
                <form className="formPerson">
                    <input
                        type="text"
                        placeholder="Ваше имя*"
                    />
                    <input
                        type="text"
                        placeholder="Ваш email*"
                    />
                    <textarea name="text" placeholder="Небольшое описание"></textarea>
                    <div class="input__wrapper">
                        <input name="file" type="file" id="input__file" class="input input__file" />
                        <label for="input__file" class="input__file-button">
                            <span class="input__file-icon-wrapper"><img class="input__file-icon" src={Icon} alt="Выбрать файл" width="25" /></span>
                            <span class="input__file-button-text">Приложить документ/изображение</span>
                        </label>
                    </div>
                    <div className="form-check">
                        <input name="checkbox" id="labelCheckbox" className="input__checkbox  form-check-input" type="checkbox" />
                        <label for='labelCheckbox' className="labelCheckbox">Даю согласие с политикой обработки персональных данных</label>
                    </div>
                    <div className="footer BtnRed">
                        <button
                            onClick={() => {
                                setOpenModal(false);
                            }}
                            id="cancelBtn"
                        >
                            Отправить предложение
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export { ModalPopur };
