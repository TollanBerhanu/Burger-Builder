import React from "react";
import './Logo.scss'
import burgerLogo from '../../../assets/images/burger-logo.png'

const Logo = () => (
    <div className="Logo">
        <img src={burgerLogo} alt="Logo" />
    </div>
)

export default Logo