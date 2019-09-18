import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeOffice, setFormState } from './actionCreators';

import OfficeForm from './OfficeForm';
import OfficeList from './OfficeList';

import logoSpd from './images/logo_spd.svg';
import './App.css';

class App extends Component {
  state = {
    isFormOpen: false
  }

  toggleForm = () => {
    this.setState(() => ({ isFormOpen: !this.state.isFormOpen }));
  }

  closeForm = () => {
    this.setState({ isFormOpen: false });
  }

  handleEditOffice = office => {
    this.setState({ isFormOpen: true });
    this.props.editOffice(office);
  }

  render() {
    const { isFormOpen } = this.state;
    const { offices, removeOffice, editOffice } = this.props;
    const officesLength = offices.length;

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
              <div className="App__description App__text_normal">
                <span>Updating your location and contact information helps you appeal to regional investors and service providers.</span>
              </div>
              <hr className="App__horizontal_line_dotten" />
              <div className="App__office">
                <div className="App__office_row App__office_margin_bottom">
                  <button className="App__btn_big OfficeForm__btn App__text_bold" onClick={this.toggleForm}>Add New Office</button>
                  <span className="App__text_normal">{officesLength} Offices</span>
                </div>
                {isFormOpen &&
                  <OfficeForm closeForm={this.closeForm} />
                }
                <OfficeList offices={offices} removeOffice={removeOffice} editOffice={this.handleEditOffice} />
              </div>
              <hr className="App__horizontal_line_dotten" />
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    offices: state.offices
  }
}

const mapDispatchToProps = dispatch => 
  bindActionCreators({
    removeOffice: removeOffice,
    editOffice: setFormState
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
