import React from 'react';

import logoSpd from '../../images/logo_spd.svg';

import './Header.css';

export default function Header(props) {
	return (
    <div className="Header Header__text">
    	<div className="Header__left">
        	<img alt="Logo Spd" src={logoSpd} />
        <span className="Header__margin_left">Profile Editor</span>
      	</div>
      	<div className="Header__rigt">
        	<span className="Header__margin_left">Contact</span>
        	<span className="Header__margin_left">FAQs</span>
        	<span className="Header__margin_left">Save and Exit</span>
      	</div>
    </div>
	);
}
