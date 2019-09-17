import React, { Component } from 'react';

import OfficeForm from './OfficeForm';
import OfficeList from './OfficeList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__header">Header</div>
        <div className="App__body">
          <div className="App__body_content">
            <div className="App__body_content_right">
              Panel
            </div>
            <div className="App__body_content_left">
              <OfficeForm />
              <OfficeList />
              <div>Footer</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
