import './Pages.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ThirdQuest() {
    let navigate = useNavigate();
    const routeChange0 = () => {
        let path = '/thirdjoker';
        navigate(path);
    }

    const routeChange1 = () => {
        let path = '/win';
        navigate(path);
    }

    const routeChange2 = () => {
        let path = '/lose';
        navigate(path);
    }

    return (
        <div className="thirdQuest">
            <div className="container">
                <h1 className='title'>💰 Milyonların Şousu 💰</h1>
                <p className='text'>Dədə Qorqud dastanının orijinal nüsxələri hansı şəhərdə yerləşir?</p>
                <button className='btnA' onClick={routeChange2}>Roma</button>
                <button className='btnB' onClick={routeChange2}>London</button>
                <button className='btnC' onClick={routeChange2}>Paris</button>
                <button className='btnD' onClick={routeChange1}>Vatikan</button>
                <button className='btnJoker' onClick={routeChange0}>50/50</button>
            </div>
        </div>
    )
}
