import React from 'react';

import cross from '../../images/cross.jpg';

import './Footer.css';

export default function Footer(props) {
	return (
		<div className="Footer">
      <div className="Footer__left">
				<button className="btn btn__light btn__big">Back</button>
				<div className="Footer__margin_left Footer__center"><img className="OfficeItem__img" alt="Cross" src={cross} />Provide additional comments</div>
      </div>
      <div className="Footer__right">
      	<button className="btn btn__light btn__big">Skip this step</button>
      	<button className="btn btn__primary btn__big Footer__btn">Continue</button>
      </div>
    </div>
	);
}
