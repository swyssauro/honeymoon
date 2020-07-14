import React from 'react';
import Header from '../../components/Header';
import CardExampleGroupProps from '../../components/NiveisCards';
import './styles.css';

import catelinho from '../../Img/catelinho.svg'
import abelinhas from '../../Img/abelhas.svg'
import waves from '../../Img/weves.svg'

import { FiKey } from 'react-icons/fi';

function Home() {
    return (
        <>
            <Header />
            <div className="container">
                <img className="svg-castelo" src={catelinho} alt="alt" />
                <h1 className="welcome-text text-center">bem-vindos a <br /> <b>Honeymoon</b></h1>
                <br />
                <a className="button-entrar" href="/"><FiKey size='15' /></a>
                <img className="svg-abelinhas" src={abelinhas} alt="abelinhas" />
            </div>
            <img className="svg-waves" src={waves} alt="alt" />
            <div className="container-fluid container-fafafa ">
                <h1 className="text-center"><b>Cargos de</b> níveis</h1>
                <p className="text-center text-desc">Os cargos do servidor foram criados tendo como base as fases lunares e os seus fenômenos na língua japonesa</p>
                <br/> <br/>
                <CardExampleGroupProps />
                <br/><br/>
                <div class="cursor"></div>
            </div>
        </>
    );
}

export default Home;