// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  setFormState, 
} from '../../actionCreators/officeFormActionCreator';
import {
  removeOfficeDB as removeOffice, 
  fetchOfficesDB as fetchOffices   
} from '../../actionCreators/officesActionCreator';
import { isString } from '../../helperFunctions';

import type { ThunkAction } from '../../flow-types';
import type { Office } from '../../flow-types/officeFormTypes';
import type { OfficesState } from '../../flow-types/officesTypes';

import Header from '../Header/Header';
import Panel from '../Panel/Panel';
import Title from '../Title/Title';
import Footer from '../Footer/Footer';
import OfficeForm from '../OfficeForm/OfficeForm';
import OfficeList from '../OfficeList/OfficeList';

import './App.css';

type AppProps = {
  offices: OfficesState,
  removeOffice: ThunkAction,
  editOffice: ThunkAction,
  fetchOffices: ThunkAction
};
type AppState = {
  isFormOpen: boolean
};

class App extends Component<AppProps, AppState> {
  state = {
    isFormOpen: false
  }

  componentDidMount = () => {
    this.props.fetchOffices();
  }

  toggleForm = () => {
    this.setState(() => ({ isFormOpen: !this.state.isFormOpen }));
  }

  closeForm = () => {
    this.setState({ isFormOpen: false });
  }

  handleEditOffice = (office: Office): void => {
    if (!(office && office.hasOwnProperty('id') && isString(office.id))) {
      alert('Something went wrong.');
      return;
    }

    this.setState({ isFormOpen: true });
    this.props.editOffice(office);
  }

  handleRemoveOffice = (officeId: string): void => {
    if (!(officeId && isString(officeId))) {
      alert('Something went wrong.');
      return;
    }
    this.props.removeOffice(officeId);
  }

  render() {
    const { isFormOpen } = this.state;
    const { offices } = this.props;
    const officesLength = offices.length;

    return (
      <div className="App">
        <Header />
        <div className="App__body">
          <div className="App__body_left">
            <Panel />
          </div>
          <div className="App__body_right">
            <Title />
            <hr className="App__horizontal_line_dotten" />
            <div className="App__office">
              <div className="App__office_row App__office_margin_bottom">
                <button className="btn btn__light btn__big" onClick={this.toggleForm}>Add New Office</button>
                <span>{officesLength} Offices</span>
              </div>
              {isFormOpen &&
                <OfficeForm closeForm={this.closeForm} />
              }
              <OfficeList offices={offices} 
                          removeOffice={this.handleRemoveOffice} 
                          editOffice={this.handleEditOffice} />
            </div>
            <hr className="App__horizontal_line_dotten" />
            <Footer />
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
    editOffice: setFormState,
    fetchOffices: fetchOffices
  }, dispatch)

App.propTypes = {
  offices: PropTypes.array.isRequired,
  removeOffice: PropTypes.func.isRequired,
  editOffice: PropTypes.func.isRequired,
  fetchOffices: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
