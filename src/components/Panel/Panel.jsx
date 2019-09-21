import React from 'react';

import indicator from '../../images/indicator.svg'
import checkMarkGrey from '../../images/checkMarkGrey.jpg';

import './Panel.css';

export default function Panel(props) {
	return (
		<div className="Panel">
            <div className="Panel__top">
              	<div className="Panel__circle"></div>
              	<div className="Panel__circle Panel__circle_sector"></div>
              	<div className="Panel__circle Panel__circle_small">
              		<div className="Panel__circle_text">
	              		<span className="Panel__circle_text_big">2</span>
	              		<span className="Panel__circle_text_small">/ 8</span>
              		</div>
              	</div>
            </div>
            <div className="Panel__body">
				<div className="Panel__row">
					<div className="text__dark Panel__title">COMPANY INFO</div>
					<div className="Panel__text">Basic Info <img className="Panel__img" alt="Check mark grey" src={checkMarkGrey} /></div>
					<div className="text__bold Panel__text Panel__selected">Offices</div>
					<div className="text__light Panel__text">Competitors</div>
				</div>
				<div className="Panel__row">
					<div className="text__dark Panel__title">MY FIRM</div>
				</div>
				<div className="Panel__row">
					<div className="text__dark Panel__title">DEALS</div>
				</div>
				<div className="Panel__row">
					<div className="text__dark Panel__title" >FINANCIALS</div>
				</div>
			</div>
		</div>
	);
}
