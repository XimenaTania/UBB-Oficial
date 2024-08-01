import React from 'react'
import './Footer.css'
import logo from '../assets/imagenes/LOGO.png'
import facebook from '../assets/imagenes/icon-social/Facebook.png'
import youtube from '../assets/imagenes/icon-social/Youtube.png'
import whatsapp from '../assets/imagenes/icon-social/Whatsapp.png'

const Footer = () => {
    return (
        <div className='footer' id="Footer">
            <div className='container'>
                <a href='/'>
                    <img className='logo-footer' src={logo} alt='logo'/>
                </a>
                <div className='contact'>
                    <p>@ Union Bautista  Boliviana 2024</p>
                    <p>Telefono de contacto: 4583539 - 4583563</p>
                    <p>Celular: 65366838</p>
                    <p>info@ubb.org.bo</p>
                    <p>COCHABAMBA - BOLIVIA. </p>
                </div>
                <p>Nuestras redes sociales: </p>
                <a href="https://www.facebook.com/profile.php?id=100064776608413"><img className='icon-social' src={facebook}/></a>
                <a href="https://www.youtube.com/watch?v=_j9wXnuIpi0&t=173s"><img className='icon-social' src={youtube}/></a>
                <a href="https://web.whatsapp.com/65366838"><img className='icon-social' src={whatsapp}/></a>
            </div>
        </div>
    )
}

export default Footer
