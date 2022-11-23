import './Pages.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FirstQuest() {
    let navigate = useNavigate();
    const routeChange0 = () => {
        let path = '/firstwithjoker';
        navigate(path);
    }

    const routeChange1 = () => {
        let path = '/lose';
        navigate(path);
    }

    const routeChange2 = () => {
        let path = '/second';
        navigate(path);
    }

    return (
        <div className="firstQuest">
            <div className="container">
                <h1 className='title'>💰 Milyonların Şousu 💰</h1>
                <p className='text'>Hər 100 ildə 7 sm yerə yaxınlaşan Piza qülləsi hansı qütbə doğru əyilməkdədir?</p>
                <button className='btnA' onClick={routeChange1}>Qərb</button>
                <button className='btnB' onClick={routeChange1}>Şimal</button>
                <button className='btnC' onClick={routeChange2}>Cənub</button>
                <button className='btnD' onClick={routeChange1}>Şərq</button>
                <button className='btnJoker' onClick={routeChange0}>50/50</button>
            </div>
        </div>
    )
}
