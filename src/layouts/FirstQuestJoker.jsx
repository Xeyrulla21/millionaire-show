import './Pages.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FirstQuestJoker() {
    let navigate = useNavigate();
    const routeChange0 = () => {
        let path = '/secondnojoker';
        navigate(path);
    }

    const routeChange1 = () => {
        let path = '/lose';
        navigate(path);
    }

    return (
        <div className="firstQuestJoker">
            <div className="container">
                <h1 className='title'>💰 Milyonların Şousu 💰</h1>
                <p className='text'>Hər 100 ildə 7 sm yerə yaxınlaşan Piza qülləsi hansı qütbə doğru əyilməkdədir?</p>
                <button className='btnC' onClick={routeChange0}>Cənub</button>
                <button className='btnD' onClick={routeChange1}>Şərq</button>
            </div>
        </div>
    )
}
