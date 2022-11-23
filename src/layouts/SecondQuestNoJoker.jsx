import './Pages.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SecondQuestNoJoker() {
    let navigate = useNavigate();
    const routeChange0 = () => {
        let path = '/lose';
        navigate(path);
    }

    const routeChange1 = () => {
        let path = '/thirdnojoker';
        navigate(path);
    }
    return (
        <div className="secondQuestNoJoker">
            <div className="container">
                <h1 className='title'>💰 Milyonların Şousu 💰</h1>
                <p className='text'>Aspirinin xammalı hansı ağacdır?</p>
                <button className='btnA' onClick={routeChange0}>Saqqız</button>
                <button className='btnB' onClick={routeChange1}>Söyüd</button>
                <button className='btnC' onClick={routeChange0}>Akasiya</button>
                <button className='btnD' onClick={routeChange0}>Pirkal</button>
            </div>
        </div>
    )
}
