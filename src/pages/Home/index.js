import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardExampleGroupProps from '../../components/NiveisCards';
import './styles.css';
import abelinhas from '../../Img/abelhas.svg'
import waves from '../../Img/weves.svg'

import { FiKey } from 'react-icons/fi';

function Home() {

    const discordName = localStorage.getItem('discordName');

    return (
        <>
            <Header />
            <div className="container">
                <h1 className="welcome-text text-center">bem-vindos a <br /> <b>Honeymoon</b> {discordName}</h1>
                <br />
                <a className="button-entrar" href="/"><FiKey size='15' /></a>
                <img className="svg-abelinhas" src={abelinhas} alt="abelinhas" />
            </div>
            <img className="svg-waves" src={waves} alt="alt" />
            <div className="container-fluid container-fafafa ">
                <h1 className="text-center"><b>Cargos de</b> níveis</h1>
                <p className="text-center text-desc">Os cargos do servidor foram criados tendo como base as fases lunares e os seus fenômenos na língua japonesa</p>
                <br /> <br />
                <CardExampleGroupProps />
                <br /><br />
            </div>
            <Footer />
        </>
    );
}

export default Home;