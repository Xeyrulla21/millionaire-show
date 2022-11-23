import './Pages.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ThirdQuestNoJoker() {
    let navigate = useNavigate();
    const routeChange0 = () => {
        let path = '/win';
        navigate(path);
    }

    const routeChange1 = () => {
        let path = '/lose';
        navigate(path);
    }
    return (
        <div className="secondQuestNoJoker">
            <div className="container">
                <h1 className='title'>💰 Milyonların Şousu 💰</h1>
                <p className='text'>Dədə Qorqud dastanının orijinal nüsxələri hansı şəhərdə yerləşir?</p>
                <button className='btnA' onClick={routeChange1}>Roma</button>
                <button className='btnB' onClick={routeChange1}>London</button>
                <button className='btnC' onClick={routeChange1}>Paris</button>
                <button className='btnD' onClick={routeChange0}>Vatikan</button>
            </div>
        </div>
    )
}
