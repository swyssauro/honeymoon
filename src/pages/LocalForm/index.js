import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Form, Button } from 'semantic-ui-react'

import waves from '../../Img/weves.svg'
import './styles.css';

export default function Honeypoints() {

    const [id, setId] = useState('');
    const [name, setName] = useState('');

    async function handleLogin(e) {
        e.preventDefault();
        try {
            localStorage.setItem('discordID', id);
            localStorage.setItem('discordName', name);
        } catch (err) { alert('Falhar no ID...'); }
    }

    return (
        <>
            <Header />
            <div className="container">
                <br /><br /><br />
                <h1 className="text-left"><b>Identificação</b></h1>
                <p className="text-left text-desc">Aqui o perfil de pessoas que habilitaram o modo de perfil com seus pontos</p>
                <br />
                <Form unstackable onSubmit={handleLogin}>
                    <Form.Field>
                        <Form.Input placeholder='Discord Name' value={name} onChange={e => setName(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input type="number" placeholder="Discord ID" value={id} onChange={e => setId(e.target.value)} />
                    </Form.Field>
                    <Form.Field>
                    </Form.Field>
                    <Button type='submit'><a href="/">Enviar</a></Button>
                </Form>
            </div>
            <img className="svg-waves" src={waves} alt="alt" />
            <Footer />
        </>
    );
}