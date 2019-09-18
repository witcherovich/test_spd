import React from 'react';

export default function Footer(props) {
	return (
		<div className="App__footer">
      <div className="App__footer_left">
				<button className="btn btn__light btn__big">Back</button>
				<span className="App__footer_margin_left">Provide additional comments</span>
      </div>
      <div className="App__footer_right">
      	<button className="btn btn__light btn__big">Skip this step</button>
      	<button className="btn btn__primary btn__big App__footer_btn">Continue</button>
      </div>
    </div>
	);
}
