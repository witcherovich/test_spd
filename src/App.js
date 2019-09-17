import React, { Component } from 'react';

import OfficeForm from './OfficeForm';
import OfficeList from './OfficeList';

import logoSpd from './images/logo_spd.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__header App__header_text_styles">
          <div className="App__header_left">
            <img src={logoSpd} />
            <span className="App__header_margin_left">Profile Editor</span>
          </div>
          <div className="App__header_rigt">
            <span className="App__header_text">Contact</span>
            <span className="App__header_text">FAQs</span>
            <span className="App__header_text">Save and Exit</span>
          </div>
        </div>
        <div className="App__body">
          <div className="App__body_content">
            <div className="App__body_content_right">
              Panel
            </div>
            <div className="App__body_content_left">
              <div className="App__title">
                <span className="App__title_big">OFFICES</span> <span className="App__title_big App__title_big_grey">| COMPANY INFO</span>
              </div>
              <div className="App__description">
                <span>Updating your location and contact information helps you appeal to regional investors and service providers.</span>
              </div>
              <hr className="App__horizontal_line_dotten" />
              <div className="App__office">
                <OfficeForm />
                <OfficeList />
              </div>
              <hr className="App__horizontal_line_dotten" />
              <div>Footer</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
