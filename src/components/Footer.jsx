import React from 'react';

export default function Footer(props) {
	return (
		<div className="App__footer">
            <div className="App__footer_left">
				<button className="App__btn_big OfficeForm__btn App__text_bold">Back</button>
				<span className="App__footer_margin_left App__text_normal">Provide additional comments</span>
            </div>
            <div className="App__footer_right">
              	<button className="App__btn_big App__footer_btn OfficeForm__btn App__text_bold App__text_normal">Skip this step</button>
              	<button className="App__btn_big App__footer_btn OfficeForm__btn OfficeForm__style_primary">Continue</button>
            </div>
        </div>
	);
}
