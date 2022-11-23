import './Pages.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function SecondQuest() {
    let navigate = useNavigate();
    const routeChange0 = () => {
        let path = '/secondwithjoker';
        navigate(path);
    }

    const routeChange1 = () => {
        let path = '/lose';
        navigate(path);
    }

    const routeChange2 = () => {
        let path = '/third';
        navigate(path);
    }
    return (
        <div className="secondQuest">
            <div className="container">
                <h1 className='title'>💰 Milyonların Şousu 💰</h1>
                <p className='text'>Aspirinin xammalı hansı ağacdır?</p>
                <button className='btnA' onClick={routeChange1}>Saqqız</button>
                <button className='btnB' onClick={routeChange2}>Söyüd</button>
                <button className='btnC' onClick={routeChange1}>Akasiya</button>
                <button className='btnD' onClick={routeChange1}>Pirkal</button>
                <button className='btnJoker' onClick={routeChange0}>50/50</button>
            </div>
        </div>
    )
}
