import React, { Component } from 'react';

import OfficeForm from './OfficeForm';
import OfficeList from './OfficeList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OfficeForm />
        <OfficeList />
      </div>
    );
  }
}

export default App;
