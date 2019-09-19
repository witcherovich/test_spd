import React from 'react';

import cross from '../../images/cross.jpg';

import './Footer.css';

export default function Footer(props) {
	return (
		<div className="App__footer">
      <div className="App__footer_left OfficeItem__column_wrapper">
				<button className="btn btn__light btn__big">Back</button>
				<div className="App__footer_margin_left App__footer_center"><img className="OfficeItem__img" alt="Cross" src={cross} />Provide additional comments</div>
      </div>
      <div className="App__footer_right">
      	<button className="btn btn__light btn__big">Skip this step</button>
      	<button className="btn btn__primary btn__big App__footer_btn">Continue</button>
      </div>
    </div>
	);
}
