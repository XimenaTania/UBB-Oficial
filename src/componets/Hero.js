import React, {useState} from 'react'
import './Hero.css'
import {Carousel} from "react-bootstrap";

const Hero = () => {
    const [index, setIndex] = useState(0);


    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div className="hero" id='about'>
            <Carousel activeIndex={index} onSelect={handleSelect} >
                <Carousel.Item>
                    <div className='img-background-1'></div>
                    <Carousel.Caption style={{textAlign:'left'}}>
                        <p className='first-child'>Hay vida en Jesus </p>
                        <p className='nth-child2'>Jesus transformacion y vida</p>
                        <p className='nth-child3'>Union Bautista Boliviana </p>
                        <p className='nth-child4'>Desde 1898</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='img-background-2'></div>
                    <Carousel.Caption style={{textAlign:'left'}}>
                        <p className='first-child'>Hay vida en Jesus </p>
                        <p className='nth-child2'>Jesus transformacion y vida</p>
                        <p className='nth-child3'>Union Bautista Boliviana </p>
                        <p className='nth-child4'>Desde 1898</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='img-background-3'></div>
                    <Carousel.Caption style={{textAlign:'left'}}>
                        <p className='first-child'>Hay vida en Jesus </p>
                        <p className='nth-child2'>Jesus transformacion y vida</p>
                        <p className='nth-child3'>Union Bautista Boliviana </p>
                        <p className='nth-child4'>Desde 1898</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        // <div className='hero'>
        //     <div className='content'>
        //         <p>Hay vida en Jesus </p>
        //         <p>Jesus transformacion y vida</p>
        //         <p>Union Bautista Boliviana </p>
        //         <p>Desde 1898</p>
        //
        //     </div>
        // </div>
    )
}

export default Hero
