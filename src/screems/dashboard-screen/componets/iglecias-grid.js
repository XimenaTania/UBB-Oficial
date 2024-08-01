import React, {useState} from 'react';
import './iglecias-grid.css'
import imgHistory from "../../../assets/imagenes/history.png";
import cocha from "../../../assets/imagenes/icons-city/cocha.png";
import gran_chaco from "../../../assets/imagenes/icons-city/gran_chaco.png";
import la_paz from "../../../assets/imagenes/icons-city/la_paz.png";
import nor_potosi from "../../../assets/imagenes/icons-city/nor_potosi.png";
import oruro from "../../../assets/imagenes/icons-city/oruro.png";
import santa_cruz from "../../../assets/imagenes/icons-city/santa_cruz.png";
import sucre from "../../../assets/imagenes/icons-city/sucre.png";
import tarija from "../../../assets/imagenes/icons-city/tarija.png";
import tropico_cbb from "../../../assets/imagenes/icons-city/tropico_cbb.png";
import quoteIcon from "../../../assets/imagenes/quote-icon.png";

const IgleciasGrid = ({ data , item, setItem}) => {


    const dataMajor = data.filter((item) => item.major)
    const handleClick = (itemSelect) => {
        setItem(itemSelect)
    }
    return (
        <div className="three-column-grid">

            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20}}>
                {data.map((item, index) => (
                    !item.major ? (
                            // <div key={index} onClick={() => handleClick(item)}>
                            //     <div>
                            //         <label className='title'>Asociación {item.name.toUpperCase()}</label>

                            //     </div>
                            //     <div className='line-bottom'></div>
                            // </div>
                        <div key={index} onClick={() => handleClick(item)}>
                            <div style={{display: "flex", flexDirection: "row", gap: "8px", backgroundColor: "#FFF5EB", padding: "8px"}}>
                                <label style={{fontWeight: "bold", flexGrow:"1", alignSelf:"center"}}>ASOCIACIÓN {item.name.toUpperCase()}</label>
                                {
                                    item.name.toLowerCase() === 'cochabamba' ? (
                                        <img src={cocha} alt='cocha' width='50' height='50'/>
                                    ) : item.name.toLowerCase() === 'la paz' ? (
                                        <img src={la_paz} alt='la_paz' width='50' height='50'/>
                                    ) : item.name.toLowerCase() === 'gran chaco' ? (
                                        <img src={gran_chaco} alt='gran_chaco' width='70' height='70'/>
                                    ) : item.name.toLowerCase() === 'oruro' ? (
                                        <img src={oruro} alt='oruro' width='70' height='70'/>
                                    ) : item.name.toLowerCase() === 'santa cruz' ? (
                                        <img src={santa_cruz} alt='santa_cruz' width='70' height='70'/>
                                    ) : item.name.toLowerCase() === 'norte potosi' ? (
                                        <img src={nor_potosi} alt='nor_potosi' width='70' height='70'/>
                                    ) : item.name.toLowerCase() === 'tropico cochabamba' ? (
                                        <img src={tropico_cbb} alt='tropico_cbb' width='70' height='70'/>
                                    ) : item.name.toLowerCase() === 'tarija' ? (
                                        <img src={tarija} alt='tarija' width='70' height='70'/>
                                    ) : (
                                        <img src={sucre} alt='sucre' width='70' height='70'/>
                                    )
                                }
                            </div>
                            <div className='line-bottom'></div>
                        </div>
                    ) : <></>
                ))}
                {/*<div>Column 1</div>*/}
                {/*<div>Column 2</div>*/}
                {/*<div>Column 3</div>*/}
                {/*<div>Column 1</div>*/}
                {/*<div>Column 2</div>*/}
                {/*<div>Column 3</div>*/}
                {/*<div>Column 1</div>*/}
                {/*<div>Column 2</div>*/}
                {/*<div>Column 3</div>*/}
            </div>
            {/*<div className='contentHeader' onClick={()=>handleClick(dataMajor[0])}>*/}
            {/*    <div className='headerIglecia'>*/}
            {/*        <div className='body-card-iglecia'>*/}
            {/*            <div className='contentLeft'>*/}
            {/*                <label className='titleC'>{dataMajor[0].name}</label>*/}
            {/*                <label className='content'>{dataMajor[0].description} </label>*/}
            {/*            </div>*/}
            {/*            <div className='contentRigth'>*/}
            {/*                <img className='imgC' src={quoteIcon} alt='quoteIcon' />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className='line-bottom'></div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*    <div className='section-information-iglecia'>*/}
            {/*        {data.map((item, index) => (*/}
            {/*            !item.major? (*/}
            {/*                <div key={index} className='card-iglecia' onClick={()=>handleClick(item)}>*/}
            {/*                    <div className='body-card-iglecia'>*/}
            {/*                        <label className='title'>Asociación {item.name.toUpperCase()}</label>*/}
            {/*                        {*/}
            {/*                            item.name.toLowerCase() === 'cochabamba' ? (*/}
            {/*                                <img src={cocha} alt='cocha' width='70' height='70'/>*/}
            {/*                            ) : item.name.toLowerCase() === 'la paz' ? (*/}
            {/*                                <img src={la_paz} alt='la_paz' width='70' height='70'/>*/}
            {/*                            ) : item.name.toLowerCase() === 'gran chaco' ? (*/}
            {/*                                <img src={gran_chaco} alt='gran_chaco' width='70' height='70'/>*/}
            {/*                            ) : item.name.toLowerCase() === 'oruro' ? (*/}
            {/*                                <img src={oruro} alt='oruro' width='70' height='70'/>*/}
            {/*                            ) : item.name.toLowerCase() === 'santa cruz' ? (*/}
            {/*                                <img src={santa_cruz} alt='santa_cruz' width='70' height='70'/>*/}
            {/*                            ) : item.name.toLowerCase() === 'norte potosi' ? (*/}
            {/*                                <img src={nor_potosi} alt='nor_potosi' width='70' height='70'/>*/}
            {/*                            ) : item.name.toLowerCase() === 'tropico cochabamba' ? (*/}
            {/*                                <img src={tropico_cbb} alt='tropico_cbb' width='70' height='70'/>*/}
            {/*                            ) : item.name.toLowerCase() === 'tarija' ? (*/}
            {/*                                <img src={tarija} alt='tarija' width='70' height='70'/>*/}
            {/*                            ) : (*/}
            {/*                                <img src={sucre} alt='sucre' width='70' height='70'/>*/}
            {/*                            )*/}
            {/*                        }*/}
            {/*                    </div>*/}
            {/*                    <div className='line-bottom'></div>*/}
            {/*                </div>*/}
            {/*            ) : <></>*/}
            {/*        ))}*/}
            {/*    </div>*/}

        </div>
    );
};

export default IgleciasGrid;