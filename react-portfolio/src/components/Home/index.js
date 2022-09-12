import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['s', 'r', 'a', 'e', 'l', ' ', 'N', 'o', 'n', 'a', 't', 'o']
    const jobArray = ['D', 'e', 's', 'e', 'n', 'v', 'o', 'l', 'v', 'e', 'd', 'o', 'r', ' ', 'F', 'r', 'o', 'n', 't', '-', 'E', 'n', 'd']
    
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Olá, <br /> Eu sou
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={27} />
                </h1>
                <h2> Desenvolvedor Web / Analista de Sistemas
                </h2>
                <Link to="/contact" className="flat-button">MEU CONTATO</Link>
            </div>
        </div>
    );
}

export default Home