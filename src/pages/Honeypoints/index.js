import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import api from '../../components/Api';

import { FiSearch } from 'react-icons/fi';
import waves from '../../Img/weves.svg'
import './styles.css';

export default function Honeypoints() {

    const [incidents, setIncidents] = useState([]);
    const [id, setId] = useState('');


    async function handleLogin(e) {
       e.preventDefault();


        try {
            const response = await api.get(`points/balance?user_id=${id}&server_id=651215889265590302`);
                setIncidents(response.data.points);


        } catch (err) {
            alert('falhar no id...');
        }
    }


    return (
      <>
        <Header />
        <div className="container">
            <h1 className="welcome-text text-center">Honeymoon<br /> <b>Points</b></h1>
        </div>
            <img className="svg-waves" src={waves} alt="alt" />
             <h1 className="points-open">{incidents}</h1>
            <div className="container-fluid container-fafafa ">
                <h1 className="text-center"><b>Perfil</b>points</h1>
                <p className="text-center text-desc">aqui o perfil de pessoas que habilitaram o modo de perfil com seus pontos</p>
        </div>
        <div className="container-fluid container-fafafa">
            <form className="form-sty" onSubmit={handleLogin}>
                <input className="form-points" placeholder="Discord ID" value={id} onChange={e => setId(e.target.value)}/>
                <button className="button-ent" type="submit"><FiSearch size="19" /></button>
            </form>
        </div>
        <Footer />
      </>
    );
}