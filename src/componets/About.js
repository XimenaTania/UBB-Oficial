import './About.css'
import imgHistory from '../assets/imagenes/history.png'
import imgMission from '../assets/imagenes/mission.png'
import imgVision from '../assets/imagenes/vision.png'
import {useState} from "react";

const About = () => {
    const [expandedH, setExpandedH] = useState(false);
    const [expandedM, setExpandedM] = useState(false);
    const [expandedV, setExpandedV] = useState(false);

    // Función para manejar el clic del botón
    const clickH = () => {
        setExpandedH(!expandedH);
    };
    const clickM = () => {
        setExpandedM(!expandedM);
    };
    const clickV = () => {
        setExpandedV(!expandedV);
    };
    return (
        <div className="container">
            <div className='section-information'>
                <div className='card'>
                    <div className='body-card'>
                        <img className='icon-img' src={imgHistory} alt='imgHistory' width='30' height='30'/>
                        <label className='title'>HISTORIA</label>
                        <div className={`content-text ${expandedH? 'expanded':'colapsed'}`}>
                            <label className='text-long'>“La Unión Bautista Boliviana data del 1898 con la llegada de Archivaldo Reekie enviado como Misionero Bautista Canadiense.
                                 Llega a nuestro país el 20 de abril de 1898 con la intención de iniciar la predicación evangelística en el país. Cuatro años después organiza la primera iglesia Evangélica Bautista en Bolivia en la ciudad de Oruro cuyo nombre es “Iglesia Bautista Del Señor Resucitado”. Posteriormente organizaría la segunda iglesia en La Paz, el 26 de julio 1904, con el nombre de “Iglesia Bautista Del Prado” y la tercera en Cochabamba, el 21 de mayo de 1905, con el nombre de “Primera Iglesia Bautista de Cochabamba”. 
                                 De esta manera afirmamos sin lugar a duda, que el trabajo evangelístico en Bolivia empezó con los bautistas. Reekie y los varios misioneros que llegan después de él, ayudó a los nuevos creyentes en Bolivia, y estos permanecieron trabajando en el país a lo largo de estos cien años y fueron los artífices de la obra Bautista. 
                            </label>

                        </div>
                        <button className='button' onClick={clickH}>{expandedH ? 'Leer menos...' : 'Leer mas...'}</button>
                    </div>
                    <div className='line-bottom'></div>
                </div>
                <div className='card'>
                    <div className='body-card'>
                        <img className='icon-img' src={imgMission} alt='imgMission' width='30' height='30'/>
                        <label className='title'>MISION</label>
                        <div className={`content-text ${expandedM? 'expanded':'colapsed'}`}>
                            <label className='text-long'> Proclamemos el evangelio de Jesucristo segun las ordenanzas de La Biblia y establesemos 
                                igleias  en todo el territorio nacional y el exterior  enseñamos la verdades de la fe cristiana para el desarrollo integral del ser humano
                                y servimos a las nmecesidades  del ser humano sin discriminacion de  credo, grupo social  o cultura. 
                            </label>

                        </div>
                        <button className='button' onClick={clickM}>{expandedM ? 'Leer menos...' : 'Leer mas...'}</button>
                    </div>
                    <div className='line-bottom'></div>
                </div>
                <div className='card'>
                    <div className='body-card'>
                        <img className='icon-img' src={imgVision} alt='imgVision' width='30' height='30'/>
                        <label className='title'>VISION</label>
                        <div className={`content-text ${expandedV? 'expanded':'colapsed'}`}>
                            <label className='text-long'>“Somos la unión de iglesias evangélicas bautistas de Bolivia y tenemos un compromiso
                            misionero integral destinado a la transformación de personas, de comunidades y la sociedad multicultural.” 
                            </label>

                        </div>
                        <button className='button' onClick={clickV}>{expandedV ? 'Leer menos...' : 'Leer mas...'}</button>
                    </div>
                    <div className='line-bottom'></div>
                </div>
            </div>
        </div>
    )
}

export default About
