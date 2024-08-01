import Navbar from "../../componets/Navbar";
import Hero from "../../componets/Hero";
import About from "../../componets/About";
import Testimonials from "./components/testimonials/Testimonials";
import UnionBautista from "./components/union_bautista/union_bautista";
import Footer from "../../componets/Footer";
import {Profile} from "../../componets/Profile";
import MapView from "../../componets/MapView";
import React from "react";

export const InitialScreen = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <div style={{paddingTop:'20px'}}>
                <About/>
            </div>
            <UnionBautista/>
            <Testimonials/>
            <Footer/>
            <Profile/>
            {/*<MapView/>*/}
        </div>
    )
}