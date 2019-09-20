import React from 'react';

import Header from '../Header/Header';
import Panel from '../Panel/Panel';
import Title from '../Title/Title';
import Footer from '../Footer/Footer';
import Offices from '../Offices/Offices';

import './App.css';

export default function App(props) {
    return (
        <div className="App">
            <Header />
            <div className="App__content">
                <div className="App__content_left">
                    <Panel />
                </div>
                <div className="App__content_right">
                    <Title />
                    <hr className="App__horizontal_line_dotten" />
                    <Offices />
                    <hr className="App__horizontal_line_dotten" />
                    <Footer />
                </div>
            </div>
        </div>
    );
}
