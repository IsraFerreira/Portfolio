import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'

const Home = () => {
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Olá, <br /> Eu sou
                <img src={LogoTitle} alt="developer" />
                srael Nonato
                <br />
                Desenvolvedor Front-End
                </h1>
                <h2> Desenvolvedor Web / Analista de Sistemas
                </h2>
                <Link to="/contact" className="flat-button">MEU CONTATO</Link>
            </div>
        </div>
    );
}

export default Home