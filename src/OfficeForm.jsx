import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addOffice, editOffice, setInitialFormState, setFormField } from './actionCreators';

class OfficeForm extends Component {
	state = {
		isFormOpen: true
	};

	handleInputChange = e => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
    	const name = target.name;
		
		this.props.setFormField({[name]: value});
	}

	handleSubmitForm = e => {
		e.preventDefault();

		const isEditMode = this.props.office.id !== null;

		isEditMode ?
			this.props.editOffice({...this.props.office}) : 
			this.props.addOffice({...this.props.office})

		this.handleCancelClick(e);
	}

	handleCancelClick = e => {
		e.preventDefault();
		// this.setState({ isFormOpen: false });
		this.props.setInitialFormState();
	}

	render() {
		const { 
			country, 
			stateOrProvince, 
			postalCode, 
			city, 
			streetAddress, 
			address2, 
			phone, 
			fax, 
			email, 
			officeType 
		} = this.props.office;
		const isFormOpen = this.state.isFormOpen;

		return (
			<div className="OfficeForm">
				{isFormOpen && <form onSubmit={this.handleSubmitForm}>
					<div>
						<input className="OfficeForm__form_input" type="text" name="country" value={country} onChange={this.handleInputChange} />
						<input className="OfficeForm__form_input" type="text" name="stateOrProvince" value={stateOrProvince} onChange={this.handleInputChange} />
						<input className="OfficeForm__form_input" type="text" name="postalCode" value={postalCode} onChange={this.handleInputChange} />
						<input className="OfficeForm__form_input" type="text" name="city" value={city} onChange={this.handleInputChange} />
						<input className="OfficeForm__form_input" type="text" name="streetAddress" value={streetAddress} onChange={this.handleInputChange} />
						<input className="OfficeForm__form_input" type="text" name="address2" value={address2} onChange={this.handleInputChange} />
					</div>
					<div>
						<input className="OfficeForm__form_input" type="text" name="phone" value={phone} onChange={this.handleInputChange} />
						<input className="OfficeForm__form_input" type="text" name="fax" value={fax} onChange={this.handleInputChange} />
						<input className="OfficeForm__form_input" type="text" name="email" value={email} onChange={this.handleInputChange} />
						<input className="OfficeForm__form_input" type="checkbox" name="officeType" checked={officeType} onChange={this.handleInputChange} />
					</div>
					<div>
						<button onClick={this.handleCancelClick}>Cancel</button>
						<input type="submit" value="Save" />
					</div>
				</form>}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		office: state.officeForm
	}
}

const mapDispatchToProps = dispatch => 
	bindActionCreators({
		addOffice,
		editOffice,
		setInitialFormState,
		setFormField
	}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(OfficeForm);
