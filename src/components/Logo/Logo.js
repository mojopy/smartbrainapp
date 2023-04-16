import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.png';
import "./Logo.css";

const Logo = () => {
    return (
        <div className="ma4 mt0 top logo">
            <Tilt className="Tilt pa2 br2 shadow-2 LogoComponent" tiltMaxAngleX="25" tiltMaxAngley="25">
                <img src={brain} alt="Logo represented by half a brain and half a circuit." style={{filter: 'invert(100%)', paddingTop: '3px'}}/>
            </Tilt>
        </div>
    );
}

export default Logo;