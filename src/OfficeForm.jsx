import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addOffice, editOffice, setInitialFormState, setFormField } from './actionCreators';

import './OfficeForm.css';

class OfficeForm extends Component {
	handleInputChange = e => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
    	const name = target.name;
		
		this.props.setFormField({[name]: value});
	}

	handleSubmitForm = e => {
		e.preventDefault();

		if (!this.isValid()) {
			alert('Please, fill all required field(*)!');
			return;
		}

		const isEditMode = this.props.office.id !== null;

		isEditMode ?
			this.props.editOffice({...this.props.office}) : 
			this.props.addOffice({...this.props.office})

		this.handleCancelClick(e);
	}

	handleCancelClick = e => {
		e.preventDefault();
		this.props.closeForm();
		this.props.setInitialFormState();
	}

	isValid = () => {
		const { country, stateOrProvince, postalCode, city, streetAddress } = this.props.office;

		return !!(country && stateOrProvince && postalCode && city && streetAddress);
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

		return (
			<div className="OfficeForm">
				<div className="OfficeForm__content">
					<form className="OfficeForm__content_form OfficeForm__text" onSubmit={this.handleSubmitForm}>
						<div className="OfficeForm__form_column">
							<div className="OfficeForm__form_row">
								<div className="OfficeForm__form_label">*Country:</div>
								<select className={`OfficeForm__form_field ${!country ? 'OfficeForm__form_field_invalid' : ''}`} name="country" value={country} onChange={this.handleInputChange}>
									<option value="USA">USA</option>
									<option value="Canada">Canada</option>
									<option value="Ukraine">Ukraine</option>
								</select>
							</div>
							<div className="OfficeForm__form_row">
								<div className="OfficeForm__form_label">*State/Province:</div>
								<input className={`OfficeForm__form_field ${!stateOrProvince ? 'OfficeForm__form_field_invalid' : ''}`} type="text" name="stateOrProvince" value={stateOrProvince} onChange={this.handleInputChange} />
							</div>
							<div className="OfficeForm__form_row">
								<div className="OfficeForm__form_label">*Postal Code:</div>
								<input className={`OfficeForm__form_field ${!postalCode ? 'OfficeForm__form_field_invalid' : ''}`} type="text" name="postalCode" value={postalCode} onChange={this.handleInputChange} />
							</div>
							<div className="OfficeForm__form_row">
								<div className="OfficeForm__form_label">*City:</div>
								<select className={`OfficeForm__form_field ${!city ? 'OfficeForm__form_field_invalid' : ''}`} name="city" value={city} onChange={this.handleInputChange}>
									<option value="New York">New York</option>
									<option value="Toronto">Toronto</option>
									<option value="Kiev">Kiev</option>
								</select>	
							</div>
							<div className="OfficeForm__form_row">
								<div className="OfficeForm__form_label">*Street Andress:</div>
								<input className={`OfficeForm__form_field ${!streetAddress ? 'OfficeForm__form_field_invalid' : ''}`} type="text" name="streetAddress" value={streetAddress} onChange={this.handleInputChange} />
							</div>
							<div className="OfficeForm__form_row">
								<div className="OfficeForm__form_label">Andress 2:</div>
								<input className="OfficeForm__form_field" type="text" name="address2" value={address2} onChange={this.handleInputChange} />	
							</div>
						</div>

						<div className="OfficeForm__form_column_wrapper">
							<div className="OfficeForm__form_column">
								<div className="OfficeForm__form_row">
									<div className="OfficeForm__form_label">Phone:</div>
									<input className="OfficeForm__form_field" type="text" name="phone" value={phone} onChange={this.handleInputChange} />
								</div>
								<div className="OfficeForm__form_row">
									<div className="OfficeForm__form_label">Fax:</div>
									<input className="OfficeForm__form_field" type="text" name="fax" value={fax} onChange={this.handleInputChange} />
								</div>
								<div className="OfficeForm__form_row">
									<div className="OfficeForm__form_label">Email:</div>
									<input className="OfficeForm__form_field" type="text" name="email" value={email} onChange={this.handleInputChange} />
								</div>
								<div className="OfficeForm__form_row">
									<div className="OfficeForm__form_label">Office Type:</div>
									<div className="OfficeForm__form_checkbox_wrapper">
										<input className="OfficeForm__form_checkbox" type="checkbox" name="officeType" checked={officeType} onChange={this.handleInputChange} />
										<div>Primary HQ</div>
									</div>
								</div>
							</div>
							<div className="OfficeForm__form_column">
								<div className="OfficeForm__form_row">
									<button className="OfficeForm__btn" onClick={this.handleCancelClick}>Cancel</button>
									<input className="OfficeForm__btn OfficeForm__margin_left OfficeForm__style_primary" type="submit" value="Save" />
								</div>
							</div>
						</div>
					</form>
				</div>
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
	}, dispatch);

OfficeForm.propTypes = {
	office: PropTypes.shape({
		country: PropTypes.oneOf(['USA', 'Canada', 'Ukraine']).isRequired,
		stateOrProvince: PropTypes.string.isRequired,
		postalCode: PropTypes.string.isRequired,
		city: PropTypes.oneOf(['New York', 'Toronto', 'Kiev']).isRequired,
		streetAddress: PropTypes.string.isRequired,
		address2: PropTypes.string.isRequired,
		phone: PropTypes.string.isRequired,
		fax: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		officeType: PropTypes.bool
	}).isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(OfficeForm);
