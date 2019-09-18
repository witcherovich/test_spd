import React from 'react';

import indicator from '../images/indicator.svg'

export default function Panel(props) {
	return (
		<div className="App__panel">
            <div className="App__panel_top">
              	<img alt="Indicator" src={indicator} />
            </div>
            <div className="App__panel_body">
				<div className="App__panel_row">
					<div className="text__dark App__panel_title">COMPANY INFO</div>
					<div className="App__panel_text">Basic Info</div>
					<div className="text__bold App__panel_text">Offices</div>
					<div className="text__light App__panel_text">Competitors</div>
				</div>
				<div className="App__panel_row">
					<div className="text__dark App__panel_title">MY FIRM</div>
				</div>
				<div className="App__panel_row">
					<div className="text__dark App__panel_title">DEALS</div>
				</div>
				<div className="App__panel_row">
					<div className="text__dark App__panel_title" >FINANCIALS</div>
				</div>
			</div>
		</div>
	);
}
