import React from 'react';

import indicator from '../images/indicator.svg'

export default function Panel(props) {
	return (
		<div className="App__panel">
            <div className="App__panel_top">
              	<img alt="Indicator" src={indicator} />
            </div>
            <div className="App__panel_body App__text_normal">
				<div className="App__panel_block">
					<div className="App__panel_title">COMPANY INFO</div>
					<div className="App__panel_normal">Basic Info</div>
					<div className="App__panel_normal App__panel_bold">Offices</div>
					<div className="App__panel_normal App__panel_light">Competitors</div>
				</div>
				<div className="App__panel_block">
					<div className="App__panel_title">MY FIRM</div>
				</div>
				<div className="App__panel_block">
					<div className="App__panel_title">DEALS</div>
				</div>
				<div className="App__panel_block">
					<div className="App__panel_title" >FINANCIALS</div>
				</div>
			</div>
		</div>
	);
}
