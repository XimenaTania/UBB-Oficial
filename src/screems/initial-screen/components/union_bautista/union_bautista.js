import './union_bautista.css'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../../../assets/imagenes/slider_principal/Group 2235.png'
import img2 from '../../../../assets/imagenes/slider_principal/Group 2234.png'
import img3 from '../../../../assets/imagenes/slider_principal/Group 2233.png'
import img4 from '../../../../assets/imagenes/slider_principal/Group 2236.png'

const UnionBautista = () => {

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 5,
        arrows: false,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className="container" id="UnionBautista">
            <h3 className="title">UNIONES AFILIADAS</h3>
            <span className='line'></span>
            <div className='content-slider'>
                <Slider  {...settings}>
                    <img src={img1} alt=""/>
                    <img src={img2} alt=""/>
                    <img src={img3} alt=""/>
                    <img src={img4} alt=""/>
                    <img src={img4} alt=""/>
                </Slider>
            </div>
        </div>
    );
}

export default UnionBautista