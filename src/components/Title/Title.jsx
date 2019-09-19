import React from 'react';

import './Title.css';

export default function Title(props) {
	return (
		<div className="App__title">
			<div className="App__title_text App__title_margin_bottom">
	            <span className="text__big text__dark">OFFICES</span> <span className="text__big text__dull">| COMPANY INFO</span>			
			</div>
	        <div className="App__description">
	            <span>Updating your location and contact information helps you appeal to regional investors and service providers.</span>
	        </div>
        </div>
	);
}
