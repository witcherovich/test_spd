import React from 'react';

import logoSpd from '../images/logo_spd.svg';

export default function Header(props) {
	return (
        <div className="App__header App__header_text_styles">
        	<div className="App__header_left">
            	<img alt="Logo Spd" src={logoSpd} />
            <span className="App__header_margin_left">Profile Editor</span>
          	</div>
          	<div className="App__header_rigt">
            	<span className="App__header_text">Contact</span>
            	<span className="App__header_text">FAQs</span>
            	<span className="App__header_text">Save and Exit</span>
          	</div>
        </div>
	);
}
