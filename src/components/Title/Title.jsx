import React from 'react';

import './Title.css';

export default function Title(props) {
	return (
		<div className="Title">
			<div className="Title__text Title__margin_bottom">
	            <span className="text__big text__dark">OFFICES</span> <span className="text__big text__dull">| COMPANY INFO</span>			
			</div>
	        <div className="Title__description">
	            <span>Updating your location and contact information helps you appeal to regional investors and service providers.</span>
	        </div>
        </div>
	);
}
