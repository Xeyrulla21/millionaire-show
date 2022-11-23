import './Pages.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MainPage() {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/first';
        navigate(path);
    }

    return (
        <div className="mainPage">
            <div className="container">
                <h1 className='title'>💰 Milyonların Şousu 💰</h1>
                <p className='text'>Milyonların Şousuna xoş gəlmisiz 😄</p>
                <p className='text'>Milyoner olmaq hələ belə asan olmamışdı 😉</p>
                <button className='startButton' onClick={routeChange}>Başla</button>
            </div>
        </div>
    )
}
