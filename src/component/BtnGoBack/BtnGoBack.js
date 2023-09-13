// import { Navigate } from "react-router-dom";
import Arrow from '../../images/Arrow-left.png';

const BtnGoBack = () => {

    const GoBack = () => {
        // Navigate('-1');
        alert(":)")
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', margin: '15px 0 15px 32px', height: '32px' }}>
            <img src={Arrow} alt="Arrow" style={{ width: '16px', height: '16px' }}></img>
            <button onClick={GoBack}

                style={{
                    display: 'inline', background: 'none', border: 'none', borderBottom: 'solid 1px #fff',
                    color: 'white', padding: '0', lineHeight: '20px', cursor: 'pointer'
                }}>Назад</button>
        </div>
    );
};

export { BtnGoBack };